import type { Route } from "./+types/tjenester";
import { Link } from "react-router";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { JsonLd } from "~/components/JsonLd";
import { buildMeta } from "~/lib/seo";

const SITE_URL = "https://define-smart.dk";
const PAGE_URL = `${SITE_URL}/tjenester`;

export function meta(_: Route.MetaArgs) {
  return [
    ...buildMeta({
      title: "Produkt | define waters A/S",
      description:
        "Én platform til hver måler og maskine: live flow-kort, forudsigelig filterstyring, smarte arbejdsordrer og lækageintelligens — drevet af DS-1 sensoren.",
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
  name: "Produkt — Define Smart platform",
  description: "Sensorer, forbindelse og software til realtids vandintelligens.",
  url: PAGE_URL,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Produkt", item: PAGE_URL },
    ],
  },
};

const FEATURES = [
  { title: "Live flow-kort", desc: "Et realtidsbillede af forbruget på tværs af hver bygning, maskine og måler — bor fra portefølje helt ned til en enkelt ventil." },
  { title: "Forudsigelig filterstyring", desc: "Beregn kapacitet ud fra filtertype og vandets hårdhed, og planlæg næste skift efter faktisk forbrug — ikke et fast interval." },
  { title: "Smarte arbejdsordrer", desc: "Vælg en lokation, så samler vi alle kommende service- og filteropgaver i nærheden i én rute. Kør færre kilometer." },
  { title: "Lækageintelligens", desc: "Mønstermodeller lærer hver lokations normale rytme og flagger løbende flow, natforbrug og udslip." },
];

const SPECS = [
  ["Forbindelse", "Eget net · LTE-M"],
  ["Batterilevetid", "5 år"],
  ["Måling", "1 / sek."],
  ["Tæthedsklasse", "IP68"],
  ["Installation", "Klik-på, < 2 min"],
];

export default function Produkt(_: Route.ComponentProps) {
  return (
    <div className="page">
      <Header />
      <JsonLd data={pageSchema} />

      <main>
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px 50px" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#15B6CF", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 14 }}>Platformen</div>
          <h1 className="ds-h1" style={{ fontSize: 54, lineHeight: 1.05, letterSpacing: "-0.035em", fontWeight: 800, margin: "0 0 20px", maxWidth: 720 }}>Én platform til hver måler og maskine.</h1>
          <p style={{ fontSize: 19, lineHeight: 1.5, color: "#3C566B", maxWidth: 580, margin: 0 }}>Sensorer, forbindelse og software der spiller sammen ud af boksen — så jeres team bruger tid på at handle på vand, ikke jage det.</p>
        </section>

        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 32px 60px" }}>
          <div className="ds-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            {FEATURES.map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid #E2ECF4", borderRadius: 18, padding: 32 }}>
                <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 10px" }}>{f.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "#58728A", margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "30px 32px 90px" }}>
          <div className="ds-split" style={{ background: "#fff", border: "1px solid #E2ECF4", borderRadius: 24, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ position: "relative", background: "repeating-linear-gradient(135deg,#EAF3FB,#EAF3FB 12px,#E2EEF8 12px,#E2EEF8 24px)", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ width: 90, height: 90, margin: "0 auto 16px", background: "linear-gradient(150deg,#19C0D6,#0E63C7)", borderRadius: "50% 50% 50% 6px", transform: "rotate(45deg)", boxShadow: "0 20px 50px rgba(14,99,199,0.35)", animation: "ds-bob 4s ease-in-out infinite" }} />
                <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 13, color: "#7E99B2" }}>[ produktbillede — DS-1 sensor ]</div>
              </div>
            </div>
            <div style={{ padding: 46 }}>
              <h3 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 24px" }}>DS-1 sensoren</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, fontSize: 15 }}>
                {SPECS.map(([k, v], i) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: i < SPECS.length - 1 ? "1px solid #EDF3F8" : "none" }}>
                    <span style={{ color: "#58728A" }}>{k}</span>
                    <span style={{ fontWeight: 600, fontFamily: '"IBM Plex Mono", monospace' }}>{v}</span>
                  </div>
                ))}
              </div>
              <Link to="/kontakt" style={{ display: "inline-block", marginTop: 26, background: "#0E63C7", color: "#fff", padding: "13px 24px", borderRadius: 11, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Bestil en prøveenhed</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
