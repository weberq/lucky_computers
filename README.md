# Lucky Computers

Static Next.js website for Lucky Computers, Kukatpally. Primary customer actions are directions, calls and WhatsApp enquiries.

## Development

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run check:export
npm run preview
```

The build exports HTML, CSS, JS and images into `out/`. No Node.js server, database or API service is needed in production. The enquiry form opens a WhatsApp draft; the visitor still needs to send it.

Business details live in `src/lib/site.ts`. Pages: home, `/laptops/`, `/repairs/`, `/visit/`, `/privacy/`.

## GitHub Pages

Repository: https://github.com/weberq/lucky_computers

Preview: https://weberq.github.io/lucky_computers/

Settings → Pages → Source must be **GitHub Actions**. `.github/workflows/pages.yml` validates and deploys every push to `main`. Pull requests build and validate without publishing. The workflow reads the hostname and base path from Pages, so a custom domain uses root paths automatically after another deployment.

To reproduce the project-path build:

```sh
NEXT_PUBLIC_SITE_URL=https://weberq.github.io/lucky_computers NEXT_PUBLIC_BASE_PATH=/lucky_computers npm run build
npm run check:export
```

The GitHub preview uses `noindex` metadata to avoid competing with the business domain. Custom-domain builds allow indexing. Never leave the custom-domain deployment built with the preview hostname.

## Domain migration

1. Keep Hostinger serving the existing domain until the Pages preview is verified.
2. In this repository's Pages settings, add the chosen canonical domain, preferably `www.luckycomputers.in` to match existing links. Follow GitHub's domain verification instructions.
3. Map DNS following [GitHub's custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). The `www` CNAME target is `weberq.github.io` (no repository path). Configure apex records as instructed by GitHub. Preserve unrelated mail and verification records.
4. Run the deployment workflow again after saving the domain. Its metadata, sitemap, image paths and manifest must use the custom domain with an empty base path.
5. Wait for HTTPS, enable Enforce HTTPS, verify both apex and www resolve correctly, all five routes work on refresh, and sitemap/canonical/robots match the chosen domain.
6. Update the ad destination to the live `/laptops/` page only after testing it. Request an honest policy review; do not conceal the repair services elsewhere on the website.

A CNAME file is not required for Actions publishing. DNS and custom-domain setup are intentionally a separate launch step.

## Optional measurement

Repository Actions variables (public identifiers, never secrets):

- `GA_MEASUREMENT_ID`: verified GA4 web-stream ID.
- `GOOGLE_ADS_ID`: verified Google Ads tag ID, if needed.
- `GOOGLE_SITE_VERIFICATION`: Search Console meta verification token, if using that verification method.

Rebuild after changing variables. No tracking tag loads when IDs are absent. When configured, measurement is opt-in. Events: `directions_click`, `call_click`, `whatsapp_click`, `whatsapp_enquiry_click`; text entered into the enquiry is excluded. These are interaction signals, not confirmed calls, visits or sales. No Ads conversion label or automatic lead conversion is invented. Verify the chosen IDs, DebugView/Tag Assistant and consent behavior before importing any events into Ads.

## Paid pilot readiness

Do not fund the campaign solely because the preview is live. First verify the domain migration, ad destination approval, actual shop location asset, correct goals and measurement. Keep sales ads focused on products. Repair advertising must separately meet Google's policy requirements. Validate phone, hours, map pin and mobile enquiry flow. Use a limited pilot and record qualified calls and actual store enquiries independently of clicks. Never equate a directions click with a visit or promise a first-place Maps ranking.
