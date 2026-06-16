import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const domain = process.env.SITE_DOMAIN;
if (!domain) {
  throw new Error(
    "SITE_DOMAIN env var is required (e.g. SITE_DOMAIN=www.sugawa.dev)",
  );
}

export default defineConfig({
  site: `https://${domain}`,
  output: "static",
  integrations: [
    // The DOTS pixel-art editor lives at /tools/dots/ on this same host but is
    // built from a separate repo, so it isn't auto-discovered. Add its single
    // URL explicitly. The domain comes from SITE_DOMAIN, so it always matches
    // the site's canonical host (currently www.sugawa.dev).
    sitemap({
      customPages: [`https://${domain}/tools/dots/`, `https://${domain}/tools/wavconverter/`, `https://${domain}/tools/file/`],
    }),
    {
      name: "github-pages-cname",
      hooks: {
        "astro:build:done": ({ dir }) => {
          fs.writeFileSync(path.join(fileURLToPath(dir), "CNAME"), `${domain}\n`);
        },
      },
    },
  ],
});
