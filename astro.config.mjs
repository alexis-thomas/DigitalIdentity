// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://alexisthomas.fr",
  trailingSlash: "never",
  // Emit /resume.html rather than /resume/index.html. scripts/deploy.mjs
  // uploads each page to an extensionless S3 key so /resume resolves directly.
  build: { format: "file", inlineStylesheets: "always" },
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/achievements") && !page.includes("/404") && !page.endsWith("/cv"),
      serialize(item) {
        item.url = item.url.replace(/\/$/, "") || item.url;
        if (item.url === "https://alexisthomas.fr") item.priority = 1.0;
        else if (item.url.includes("/projects") || item.url.endsWith("/resume")) item.priority = 0.8;
        else if (item.url.includes("/aura/")) item.priority = 0.2;
        else item.priority = 0.7;
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
});
