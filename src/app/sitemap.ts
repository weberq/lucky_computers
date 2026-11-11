import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/laptops/", "/repairs/", "/business-it-support/", "/visit/", "/privacy/"].map(path=>({ url: SITE.url + path, changeFrequency:"monthly", priority:path==="/"?1:0.8 }));
}
