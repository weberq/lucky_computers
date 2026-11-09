import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
const pages = ["", "laptops", "repairs", "visit", "privacy"];
for (const page of pages) {
  const file = path.join("out", page, "index.html");
  const html = readFileSync(file, "utf8");
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length, 1, file + " must have one h1");
  assert.ok(html.includes("tel:+919618849601"), file + " missing correct call action");
  assert.ok(html.includes("https://wa.me/919618849601"), file + " missing WhatsApp");
  assert.ok(html.includes('id="main-content"'), file + " missing skip-link target");
  assert.ok(html.includes('rel="canonical"'), file + " missing canonical");
  for (const stale of ["9391919214","9391919215","500011","10,000+","Military-grade","95% Same-day","Save up to 60%"]) assert.ok(!html.includes(stale), file + " contains stale claim: " + stale);
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  assert.ok(canonical && !canonical.includes("localhost"), file + " has invalid canonical");
  const basePath = new URL(canonical).pathname.replace(new RegExp("(?:/" + page + ")?/$"), "");
  // Check actual local images, scripts and styles at both root and project-path deployments.
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const value = match[1].replaceAll("&amp;", "&");
    if (!value.startsWith("/") || value.startsWith("//")) continue;
    const pathname = value.split("?")[0];
    if (basePath) assert.ok(pathname.startsWith(basePath + "/"), file + " asset missing project prefix: " + value);
    const relative = basePath && pathname.startsWith(basePath + "/") ? pathname.slice(basePath.length) : pathname;
    assert.ok(existsSync(path.join("out", relative)), file + " broken local asset/link: " + value);
  }
  if (page !== "privacy") {
    const raw = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    assert.ok(raw, file + " missing structured data");
    const data = JSON.parse(raw);
    assert.equal(data.telephone, "+919618849601");
    assert.equal(data.address.postalCode, "500072");
    assert.equal(data.openingHoursSpecification[0].dayOfWeek.length, 7);
    assert.equal(data.openingHoursSpecification[0].opens, "10:30");
    assert.equal(data.openingHoursSpecification[0].closes, "21:30");
    assert.equal(data.geo.latitude, 17.4868567);
  }
}
const sitemap = readFileSync("out/sitemap.xml","utf8");
for(const page of pages) assert.ok(sitemap.includes(page ? "/" + page + "/" : "<loc>"), "Missing sitemap page");
console.log("Static checks passed: 5 pages, assets, canonicals, address, phone, hours and schema.");
