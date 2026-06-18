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

// The web apps used to live under /tools/<name>/ on this host but have moved to
// their own subdomain (apps.<root domain>/<name>). We strip a leading "www." so
// the apps host stays on the apex domain (e.g. www.sugawa.dev -> apps.sugawa.dev).
const appsHost = `apps.${domain.replace(/^www\./, "")}`;

// Old /tools/<name>/ URLs now redirect to the relocated app on appsHost. Static
// output turns each into a meta-refresh HTML page emitted at
// /tools/<name>/index.html, which GitHub Pages serves for both the slash and
// non-slash request forms.
const APP_NAMES = ["dots", "wavconverter", "file"];
const redirects = Object.fromEntries(
  APP_NAMES.map((name) => [`/tools/${name}`, `https://${appsHost}/${name}`]),
);

export default defineConfig({
  site: `https://${domain}`,
  output: "static",
  redirects,
  integrations: [
    sitemap(),
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
