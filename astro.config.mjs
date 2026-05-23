import { defineConfig } from "astro/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const domain = process.env.SITE_DOMAIN;
if (!domain) {
  throw new Error(
    "SITE_DOMAIN env var is required (e.g. SITE_DOMAIN=sugawa.dev)",
  );
}

export default defineConfig({
  site: `https://${domain}`,
  output: "static",
  integrations: [
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
