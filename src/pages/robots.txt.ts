import type { APIRoute } from "astro";

// Public portfolio: every page is meant to be discoverable, so all crawlers
// (search engines and AI bots alike) are allowed everywhere. The Sitemap URL is
// derived from the configured `site` so it always tracks SITE_DOMAIN.
const getRobotsTxt = (sitemapURL: URL) => `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
