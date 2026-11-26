/**
 * llms[.]txt route — served at /llms.txt
 *
 * A short, factual description of the site for AI assistants and LLM
 * crawlers (https://llmstxt.org). Facts mirror the front page's meta
 * description and page schema.
 */
const SITE_URL = "https://define-smart.dk";

export function loader() {
  const llmsTxt = [
    "# Define Smart — Live vandintelligens (define waters A/S)",
    "",
    "> Define Smart forvandler vandmålere og maskiner til live intelligens: realtidsforbrug, automatisk lækagevarsling og forudsigelige filterskift. Plug-and-play på 2 minutter.",
    "",
    "## Sider",
    "",
    `- [Forside](${SITE_URL}/)`,
    `- [Tjenester](${SITE_URL}/tjenester): Realtidsovervågning, lækagevarsling, filterskift`,
    `- [Priser](${SITE_URL}/priser)`,
    `- [Dashboard](${SITE_URL}/dashboard): Live demo af vanddata`,
    `- [Om os](${SITE_URL}/om-os)`,
    `- [Kontakt](${SITE_URL}/kontakt)`,
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
  ].join("\n");

  return new Response(llmsTxt, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
