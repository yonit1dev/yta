import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yonit.dev",
  trailingSlash: "never",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});
