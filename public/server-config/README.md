# Server & Edge Optimization Playbook

This directory defines deployment-side optimizations that do not require modifications to the compiled HTML, CSS, or JavaScript that ships in the repository. Apply them through your hosting control panel, CDN, CI/CD pipeline, or infrastructure-as-code stack.

## 1. HTTP caching, compression, and CDN edge delivery

### Recommended response headers

Apply the following defaults on the origin server (e.g., Netlify headers, Nginx `add_header`, or Apache `.htaccess`). Adjust the cache horizon to align with your release cadence.

```
# Cache static assets aggressively
location ~* \.(js|css|svg|woff2?|ttf|png|jpe?g|webp|gif)$ {
    expires 6M;
    add_header Cache-Control "public, max-age=15552000, immutable";
}

# Cache HTML cautiously to allow controlled invalidation
location ~* \.(html)$ {
    expires 10m;
    add_header Cache-Control "public, max-age=600, stale-while-revalidate=86400";
}

# Cache JSON-LD + API payloads with validation
location ~* \.(json)$ {
    expires 1h;
    add_header Cache-Control "public, max-age=3600, stale-if-error=86400";
}

# Enable Brotli + Gzip
brotli on;
brotli_types text/plain text/css application/javascript application/json image/svg+xml;
gzip on;
gzip_types text/plain text/css application/javascript application/json image/svg+xml;
```

**Edge rule:** Provision a CDN (Cloudflare, Fastly, Akamai, etc.) in front of the origin. Mirror the cache headers above and enable automatic Brotli/Gzip. For Cloudflare specifically:

- Turn on **Cache Everything** on HTML with a cache TTL of 10 minutes and set **Origin Cache Control** to respect the origin headers above.
- Enable **Early Hints** and **HTTP/3**.
- Activate **Polish**/**Image Optimization** only for fallback formats because WebP is already shipped.

### Versioned cache busting

Continue using existing hashed asset names or set a CI/CD variable to purge the CDN cache after each deployment. Example Netlify CLI command:

```
netlify api purgeSiteCache --data '{"site_id": "<site-id>"}'
```

Automate this command from your deployment pipeline after uploading assets.

## 2. Responsive image pipeline (run outside this repo)

Add a CI/CD or local build step that generates responsive variants before assets are committed. Example using ImageMagick:

```
./scripts/generate-responsive-images.sh images/hero/*.webp
```

This produces 640px, 960px, and 1280px derivatives that you can reference through `srcset` attributes the next time you touch HTML templates. Because the transformation happens before commit, repository code stays untouched.

## 3. Critical CSS + connection hints via headers

Maintain existing CSS bundles, but deliver render-blocking rules earlier:

1. Extract the above-the-fold CSS for the home page using a tool like `critters` or `penthouse` during CI.
2. Serve the extracted block as an HTTP `Link` header with `rel=preload; as=style` from your CDN or server configuration.
3. Add `Link: <https://fonts.googleapis.com>; rel=preconnect; crossorigin` (and any analytics origins) via origin headers so clients warm up TCP/TLS connections before HTML parsing completes.

These headers can be defined within Netlify `_headers`, Cloudflare Transform Rules, or Nginx `add_header` directives.

## 4. Structured data expansion and validation cadence

- Keep the Organization, WebSite, and WebPage graphs active.
- Introduce `FAQPage` and `HowTo` nodes through server-side template injection or Google Tag Manager custom HTML tags so HTML files remain unchanged.
- Schedule a monthly Google Rich Results Test using the CLI: `npx @google/rich-results-test-url <page-url>`.
- Log the validation output to `data/structured-data-reports/` (already in gitignore) for audit trails.

## 5. Crawl log intelligence

Export combined access logs (Cloudflare + origin) weekly and pipe them through the included scripts:

```
./scripts/analyze-crawl-frequency.py /path/to/logs/*.log
```

The analyzer highlights Googlebot request counts, crawl depth, and status distribution. If the tool reports a significant drop, submit the updated XML sitemaps (`sitemap-index.xml`, `sitemap-news.xml`, etc.) to Google Search Console to nudge a re-crawl.

---

Document any environment-specific overrides (e.g., AWS CloudFront behaviors or Fastly VCL snippets) in sibling files within this directory so the operational runbook stays versioned alongside the project.
