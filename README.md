# alexisthomas.fr

Personal website of Alexis Thomas: Applied Scientist at Amazon, and the builder of Prismo, Giftruly and Aura.

Static site built with [Astro](https://astro.build). Every page is plain, pre-rendered HTML with inlined CSS and about 2 KB of JavaScript, so it is fast and fully crawlable.

## Commands

| Command           | What it does                                                                 |
| ----------------- | ---------------------------------------------------------------------------- |
| `npm install`     | Install dependencies (Node 20+)                                              |
| `npm run dev`     | Dev server at http://localhost:4321                                          |
| `npm run build`   | Build to `dist/`, then run the SEO checks in `scripts/postbuild.mjs`         |
| `npm run preview` | Serve the production build locally                                           |
| `npm run check`   | Type-check Astro and TypeScript files                                        |
| `npm run deploy`  | Upload `dist/` to S3 and invalidate CloudFront (`DRY_RUN=1` prints commands) |
| `npm run prod`    | Build, then deploy                                                           |

## Editing content

Almost everything lives in two files:

- `src/data/profile.ts` holds the bio, experience, education, certifications, publications, awards and skills.
- `src/data/projects.ts` holds the project case studies: copy, highlights, architecture lanes, stack, numbers and gallery images.

Project images are in `src/assets/projects/<slug>/`. Astro converts them to responsive AVIF and WebP at build time.

To add a project, add an entry to `projects`. Its page (`/projects/<slug>`), social card (`/og/<slug>.png`), sitemap entry, `llms.txt` section and footer link are all generated automatically.

## SEO features

- One canonical URL per page (no trailing slash) and a unique title and description on each page. Both are checked at build time.
- JSON-LD `@graph` on every page: `Person` (with credentials, alumni, `sameAs`), `WebSite`, `ProfilePage`, `BreadcrumbList`, `MobileApplication` for projects, `ScholarlyArticle` for the paper.
- A 1200×630 Open Graph image for every page, rendered with satori.
- `sitemap-index.xml`, `robots.txt`, and `/llms.txt` (a plain-text summary for AI search).
- Self-hosted, preloaded, Latin-only fonts; responsive images; zero layout shift.
- Lighthouse scores 99–100 for performance, accessibility, best practices and SEO.

## Hosting

The site is served from S3 (bucket `alexisthomas`) through CloudFront. Astro emits `resume.html`, and `scripts/deploy.mjs` also uploads it under the extensionless key `resume` with `Content-Type: text/html`. That way, clean URLs such as `/resume` and `/projects/prismo` resolve directly.

These URLs must keep working, because the App Store listing links to them:

- `/aura/privacypolicy`
- `/aura/termsofservice`

The contact form posts JSON to `https://api.alexisthomas.fr/api/contact`.

Old URLs from the previous site still work: `/achievements` redirects to `/research` (see CloudFront below).

## Email and contact form (website AWS account, eu-west-1)

- **Contact form:** `POST https://api.alexisthomas.fr/api/contact` (API Gateway "Contact Service") → Lambda
  `Contact-ContactHandler…` (Node 22). It sends via SES to Alexis's personal inbox with Reply-To set
  to the visitor, falling back to `mail@alexisthomas.fr` if Gmail delivery fails.
- **Inbound mail:** the domain's MX points to SES (`inbound-smtp.eu-west-1.amazonaws.com`). The receipt rule
  `alexisthomas-inbound / forward-to-gmail` stores every message for `*@alexisthomas.fr` in
  the private `alexisthomas-inbound-mail-*` S3 bucket (30-day expiry) and invokes the Lambda
  `alexisthomas-mail-forwarder`, which re-sends it to Gmail as "<sender> via alexisthomas.fr" with Reply-To
  set to the original sender.
- SES is in sandbox mode: it can only send to verified identities (the `alexisthomas.fr` domain and the Gmail
  address), which is all this setup needs.

## CloudFront (distribution E2XOW6SZZECWR1)

- Viewer-request CloudFront Function `alexisthomas-canonical-redirects` (default behavior only, not `/api/*`)
  301-redirects `www.`, trailing slashes, `.html` and `/index.html` to the canonical clean URL. It also
  301s retired or alias URLs: `/expertise*` → `/`, `/cv` → `/resume`, `/achievements` → `/research`. Source of truth
  is the function in the AWS console; keep it in sync if routes change.
- Custom error responses: 403 and 404 from S3 return `/404.html` with a real 404 status.
- `www.alexisthomas.fr` has A/AAAA alias records to the distribution (it redirects to the apex).
- IndexNow key: `public/89793fb24658002e8350d9ad9f6474cf.txt`. After a deploy, re-submit URLs to
  `https://api.indexnow.org/indexnow` to notify Bing and other engines.
