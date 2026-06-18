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
// output turns these into meta-refresh HTML pages. Both the trailing-slash and
// non-slash forms are listed so either URL resolves.
const APP_NAMES = ["dots", "wavconverter", "file"];
const redirects = Object.fromEntries(
  APP_NAMES.flatMap((name) => {
    const destination = `https://${appsHost}/${name}`;
    return [
      [`/tools/${name}`, destination],
      [`/tools/${name}/`, destination],
    ];
  }),
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
