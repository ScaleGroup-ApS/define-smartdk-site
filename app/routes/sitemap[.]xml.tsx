import type { Route } from "./+types/sitemap[.]xml";

const SITE_URL = "https://define-smart.dk";
const TODAY = "2026-06-24";

const PAGES = [
  { path: "",          priority: "1.0", changefreq: "daily",   lastmod: TODAY },
  { path: "tjenester", priority: "0.9", changefreq: "weekly",  lastmod: TODAY },
  { path: "priser",    priority: "0.8", changefreq: "weekly",  lastmod: TODAY },
  { path: "om-os",     priority: "0.7", changefreq: "monthly", lastmod: TODAY },
  { path: "kontakt",   priority: "0.7", changefreq: "monthly", lastmod: TODAY },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function loader(_: Route.LoaderArgs) {
  const urls = PAGES.map(({ path, priority, changefreq, lastmod }) => {
    const loc = path ? `${SITE_URL}/${path}` : SITE_URL;
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
  ].join("\n");

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
