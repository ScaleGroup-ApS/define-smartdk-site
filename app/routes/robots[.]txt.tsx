/**
 * robots[.]txt route — served at /robots.txt
 *
 * Allows all crawlers, points to the sitemap.
 */
import type { Route } from "./+types/robots[.]txt";

export function loader(_: Route.LoaderArgs) {
  const robotsTxt = [
    "User-agent: *",
    "Allow: /",
    "",
    "Sitemap: https://define-smart.dk/sitemap.xml",
  ].join("\n");

  return new Response(robotsTxt, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
