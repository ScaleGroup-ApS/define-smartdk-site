import { useState } from "react";
import type { Route } from "./+types/priser";
import { Link } from "react-router";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { JsonLd } from "~/components/JsonLd";
import { buildMeta } from "~/lib/seo";

const SITE_URL = "https://define-smart.dk";
const PAGE_URL = `${SITE_URL}/priser`;

export function meta(_: Route.MetaArgs) {
  return [
    ...buildMeta({
      title: "Priser | define waters A/S",
      description:
        "Enkel pris pr. lokation. Hardware inkluderet, ingen aflæsningsgebyrer. Vælg mellem Start, Vækst og Enterprise — skalér målere i takt med, at I vokser.",
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
  name: "Priser — Define Smart",
  description: "Enkel pris pr. lokation. Hardware inkluderet, ingen aflæsningsgebyrer.",
  url: PAGE_URL,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Priser", item: PAGE_URL },
    ],
  },
};

const lightBtn: React.CSSProperties = {
  display: "block",
  width: "100%",
  textAlign: "center",
  background: "#EAF2FA",
  color: "#0E63C7",
  padding: 13,
  borderRadius: 11,
  fontWeight: 600,
  fontSize: 15,
  textDecoration: "none",
  marginBottom: 24,
};

export default function Priser(_: Route.ComponentProps) {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="page">
      <Header />
      <JsonLd data={pageSchema} />

      <main>
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px 30px", textAlign: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#15B6CF", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 14 }}>Priser</div>
          <h1 className="ds-h1" style={{ fontSize: 50, lineHeight: 1.06, letterSpacing: "-0.035em", fontWeight: 800, margin: "0 0 16px" }}>Enkel pris pr. lokation.</h1>
          <p style={{ fontSize: 18, color: "#58728A", margin: "0 auto 28px", maxWidth: 480 }}>Hardware inkluderet. Ingen aflæsningsgebyrer. Skalér målere i takt med, at I vokser.</p>
          <div style={{ display: "inline-flex", background: "#E7F0F8", borderRadius: 100, padding: 4, gap: 4 }}>
            <button
              onClick={() => setAnnual(false)}
              style={{ border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14, padding: "9px 20px", borderRadius: 100, background: annual ? "transparent" : "#fff", color: annual ? "#58728A" : "#0B2740" }}
            >
              Månedligt
            </button>
            <button
              onClick={() => setAnnual(true)}
              style={{ border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14, padding: "9px 20px", borderRadius: 100, background: annual ? "#fff" : "transparent", color: annual ? "#0B2740" : "#58728A" }}
            >
              Årligt <span style={{ opacity: 0.7 }}>−20%</span>
            </button>
          </div>
        </section>

        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px 90px" }}>
          <div className="ds-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, alignItems: "start" }}>
            {/* Start */}
            <div style={{ background: "#fff", border: "1px solid #E2ECF4", borderRadius: 20, padding: 34 }}>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>Start</div>
              <div style={{ fontSize: 14, color: "#58728A", marginBottom: 22 }}>Til én lokation.</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 24 }}>
                <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em" }}>{annual ? "279" : "349"}</span>
                <span style={{ color: "#58728A", fontSize: 15 }}>kr / lokation / md</span>
              </div>
              <Link to="/kontakt" style={lightBtn}>Start gratis prøve</Link>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14, color: "#3C566B" }}>
                <div>✓ Op til 5 målere</div>
                <div>✓ Realtidsovervågning</div>
                <div>✓ Lækage- &amp; servicevarsling</div>
                <div>✓ 1 års historik</div>
                <div>✓ E-mailsupport</div>
              </div>
            </div>

            {/* Vækst */}
            <div style={{ background: "#0B2740", border: "1px solid #0B2740", borderRadius: 20, padding: 34, position: "relative", boxShadow: "0 24px 50px rgba(11,39,64,0.28)" }}>
              <div style={{ position: "absolute", top: -12, left: 34, background: "#15B6CF", color: "#06212F", fontSize: 12, fontWeight: 700, padding: "5px 12px", borderRadius: 100 }}>MEST POPULÆR</div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6, color: "#fff" }}>Vækst</div>
              <div style={{ fontSize: 14, color: "#9DB6CC", marginBottom: 22 }}>Til porteføljer med flere lokationer.</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 24 }}>
                <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em", color: "#fff" }}>{annual ? "719" : "899"}</span>
                <span style={{ color: "#9DB6CC", fontSize: 15 }}>kr / lokation / md</span>
              </div>
              <Link to="/kontakt" style={{ display: "block", width: "100%", textAlign: "center", background: "#15B6CF", color: "#06212F", padding: 13, borderRadius: 11, fontWeight: 700, fontSize: 15, textDecoration: "none", marginBottom: 24 }}>Book en demo</Link>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14, color: "#CFE0EE" }}>
                <div>✓ <strong style={{ color: "#fff" }}>Ubegrænset</strong> målere</div>
                <div>✓ Forudsigelig filterstyring</div>
                <div>✓ Smarte arbejdsordrer &amp; ruteplan</div>
                <div>✓ Avanceret analyse &amp; benchmarks</div>
                <div>✓ API &amp; integrationer</div>
                <div>✓ Prioriteret support</div>
              </div>
            </div>

            {/* Enterprise */}
            <div style={{ background: "#fff", border: "1px solid #E2ECF4", borderRadius: 20, padding: 34 }}>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>Enterprise</div>
              <div style={{ fontSize: 14, color: "#58728A", marginBottom: 22 }}>Til forsyninger &amp; store porteføljer.</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 24 }}>
                <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em" }}>Tilpasset</span>
              </div>
              <Link to="/kontakt" style={lightBtn}>Kontakt salg</Link>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14, color: "#3C566B" }}>
                <div>✓ Alt i Vækst</div>
                <div>✓ SSO &amp; rollebaseret adgang</div>
                <div>✓ 99,9 % oppetid (SLA)</div>
                <div>✓ Dedikeret succesmanager</div>
                <div>✓ On-prem / privat sky</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
