import type { Route } from "./+types/dashboard";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { JsonLd } from "~/components/JsonLd";
import { buildMeta } from "~/lib/seo";
import { DropMark } from "~/components/Visuals";
import { DashboardPanels } from "~/components/DashboardPanels";

const SITE_URL = "https://define-smart.dk";
const PAGE_URL = `${SITE_URL}/dashboard`;

export function meta(_: Route.MetaArgs) {
  return [
    ...buildMeta({
      title: "Dashboard | define waters A/S",
      description:
        "Se Define Smart-dashboardet: realtids flow, forbrug, lækager og filterskift på tværs af hele porteføljen — live og samlet ét sted.",
      url: PAGE_URL,
      siteName: "define waters A/S",
      type: "website",
      locale: "da_DK",
    }),
    { tagName: "link", rel: "canonical", href: PAGE_URL },
  ];
}

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Dashboard — Define Smart",
  description: "Live demonstration af Define Smart-dashboardet.",
  url: PAGE_URL,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Dashboard", item: PAGE_URL },
    ],
  },
};

const NAV = ["Overblik", "Lokationer", "Varsler", "Arbejdsordrer", "Rapporter", "Indstillinger"];

export default function Dashboard(_: Route.ComponentProps) {
  return (
    <div className="page">
      <Header />
      <JsonLd data={pageSchema} />

      <main style={{ background: "#EEF4FA" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "28px 32px 70px" }}>
          <div className="ds-dash" style={{ display: "grid", gridTemplateColumns: "212px 1fr", gap: 22, alignItems: "start" }}>
            {/* Sidebar */}
            <aside className="ds-hide-sm" style={{ background: "#fff", border: "1px solid #E2ECF4", borderRadius: 18, padding: 18, position: "sticky", top: 90 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "6px 8px 16px" }}>
                <DropMark size={20} />
                <span style={{ fontWeight: 800, fontSize: 15 }}>DefineSmart</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3, fontSize: 14, fontWeight: 500 }}>
                {NAV.map((n, i) => (
                  <div key={n} style={{ padding: "10px 12px", borderRadius: 9, background: i === 0 ? "#EAF3FB" : "transparent", color: i === 0 ? "#0E63C7" : "#58728A", fontWeight: i === 0 ? 600 : 500 }}>{n}</div>
                ))}
              </div>
              <div style={{ marginTop: 18, padding: 14, background: "#F4F9FD", borderRadius: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Porteføljesundhed</div>
                <div style={{ fontSize: 12, color: "#58728A", lineHeight: 1.4 }}>3 af 14 lokationer kræver opmærksomhed</div>
              </div>
            </aside>

            {/* Main */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                <div>
                  <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", margin: 0 }}>Overblik</h1>
                  <div style={{ fontSize: 14, color: "#58728A", marginTop: 2 }}>Vantage Ejendomme — 14 lokationer · 96 målere</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ background: "#fff", border: "1px solid #E2ECF4", borderRadius: 10, padding: "9px 14px", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>Alle lokationer <span style={{ color: "#94A8B8" }}>▾</span></div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#E4F6EF", color: "#0A8F5E", padding: "9px 13px", borderRadius: 10, fontSize: 13, fontWeight: 600 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0A8F5E", animation: "ds-pulse 1.6s infinite" }} />Live
                  </div>
                </div>
              </div>

              <DashboardPanels />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
