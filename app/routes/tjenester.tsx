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
      title: "Tjenester | define waters A/S",
      description:
        "Udforsk define waters A/S' tjenester: vandovervågning, IoT-sensorer, dataanalyse, smart forvaltning og professionel installation til industri og landbrug.",
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
  name: "Tjenester — define waters A/S",
  description: "Smart vandteknologi: overvågning, sensorer, dataanalyse og installation.",
  url: PAGE_URL,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tjenester", item: PAGE_URL },
    ],
  },
};

const SERVICES = [
  {
    id: "vandovervaagning",
    title: "Vandovervågning & Sensorer",
    lead: "Realtids indsigt i vandkvalitet og -mængde — overalt i jeres anlæg.",
    desc: "Vores IoT-baserede sensorer måler kontinuerligt vandflow, pH, turbiditet, ledningsevne og temperatur. Dataene overføres trådløst til vores cloud-platform, hvor de er tilgængelige via dashboard eller API. Systemet er skalerbart fra enkeltpunkts- til flerlokalitetsmålinger.",
    features: [
      "Flow-, pH-, turbiditet- og temperaturmåling",
      "Trådløs dataoverføring (4G / LoRaWAN / WiFi)",
      "Alarm ved grænseoverskriding (SMS / e-mail)",
      "IP68-klassificerede sensorer til brug udendørs",
      "Kalibrering og certificering inkluderet",
    ],
    tag: "Overvågning",
    accent: "#0056A0",
  },
  {
    id: "dataanalyse",
    title: "Datafangst & Analyse",
    lead: "Fra rådata til handlingsbar indsigt — automatisk og i realtid.",
    desc: "Vores cloud-platform samler data fra alle jeres sensorer og præsenterer dem i klare dashboards. Med avancerede algoritmer identificerer systemet anomalier, tendenser og forbrugsmønstre — og genererer automatisk perioderapporter til dokumentation og compliance.",
    features: [
      "Centralt dashboard med live data",
      "Historiske data og tendensgraf",
      "Automatiske perioderapporter (PDF / Excel)",
      "API-adgang til integration med SCADA / ERP",
      "Anomalidetektion med machine learning",
    ],
    tag: "Analyse",
    accent: "#00B5CC",
  },
  {
    id: "smart-forvaltning",
    title: "Intelligent Vandforvaltning",
    lead: "Automatiserede processer der sparer tid, vand og penge.",
    desc: "define Smart Management er vores flagskibsprodukt: et komplet forvaltningssystem der kombinerer sensordata, regler og automatisering. Det kan styre ventiler, pumper og dosering — baseret på realtidsdata — og sikre at I altid opererer inden for lovkrav og interne mål.",
    features: [
      "Automatisk styring af ventiler og pumper",
      "Regulering af vandbehandling baseret på data",
      "Integreret lækagesporingssystem",
      "Compliance-dokumentation til myndighederne",
      "Energioptimering og CO₂-rapportering",
    ],
    tag: "Smart System",
    accent: "#0056A0",
  },
  {
    id: "installation-service",
    title: "Installation & Løbende Service",
    lead: "Fra idé til drift — og alt imellem.",
    desc: "Vores certificerede teknikere håndterer alt fra anlægsrådgivning og installation til løbende kalibrering og service. Vi tilbyder serviceaftaler med garanteret responstid og prioriteret support — så I aldrig er i tvivl om, hvem I skal ringe til.",
    features: [
      "Professionel projektledelse og installation",
      "Kalibrering og CE-certificering",
      "Serviceaftaler med SLA og 24/7 support",
      "Fjerndiagnose og remote support",
      "Reservedelslager i Danmark",
    ],
    tag: "Service",
    accent: "#00B5CC",
  },
];

const PROCESS = [
  { step: "01", title: "Behovsanalyse", desc: "Vi kortlægger jeres vandanlæg, identificerer målepunkter og fastsætter krav." },
  { step: "02", title: "Løsningsdesign", desc: "Vi designer den optimale sensoropstilling og systemarki­tektur til jeres behov." },
  { step: "03", title: "Installation", desc: "Vores teknikere installerer og konfigurerer alt udstyr og sikrer korrekt kalibrering." },
  { step: "04", title: "Drift & Support", desc: "Vi overvåger systemet, opdaterer software og er klar med support — dag som nat." },
];

export default function Tjenester(_: Route.ComponentProps) {
  return (
    <div className="page">
      <Header />
      <JsonLd data={pageSchema} />

      <main>
        <header className="phero">
          <div className="wrap">
            <nav className="crumb" aria-label="Brødkrumme">
              <Link to="/">Forside</Link>
              <span className="sep">/</span>
              <b style={{ color: "#F5FAFF" }}>Tjenester</b>
            </nav>
            <p className="eyebrow">Tjenester</p>
            <h1>Intelligent vandteknologi — fra sensor til beslutning</h1>
            <p className="lead">
              Vi tilbyder komplette løsninger inden for vandovervågning, dataanalyse
              og intelligent forvaltning — tilpasset jeres specifikke behov.
            </p>
          </div>
        </header>

        {/* Services list */}
        <section style={{ padding: "5rem 0", background: "#F5FAFF" }}>
          <div className="wrap">
            <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
              {SERVICES.map(({ id, title, lead, desc, features, tag, accent }, i) => (
                <article
                  key={id}
                  id={id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                    gap: "3rem",
                    alignItems: "start",
                    borderBottom: "2px solid #E8F3FF",
                    paddingBottom: "4rem",
                  }}
                >
                  <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.25rem 0.875rem", background: accent === "#0056A0" ? "#E8F3FF" : "rgba(0,181,204,0.1)", border: `2px solid ${accent}`, marginBottom: "1.25rem" }}>
                      <span style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: accent }}>{tag}</span>
                    </div>
                    <h2 style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 0.875rem" }}>{title}</h2>
                    <p style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "1.125rem", fontWeight: 600, color: "#0056A0", margin: "0 0 1rem" }}>{lead}</p>
                    <p style={{ color: "#4A6080", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 2rem" }}>{desc}</p>
                    <Link to="/kontakt" className="nb-btn nb-btn-primary">Få et tilbud →</Link>
                  </div>

                  <div style={{ order: i % 2 === 0 ? 1 : 0, background: "#0A1628", border: "2px solid #0A1628", boxShadow: `6px 6px 0px ${accent}`, padding: "2rem" }}>
                    <h3 style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.15em", color: "#00B5CC", margin: "0 0 1.25rem" }}>Inkluderet</h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                      {features.map((f) => (
                        <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00B5CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          <span style={{ color: "rgba(245,250,255,0.85)", fontSize: "0.9375rem", lineHeight: 1.5 }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section style={{ background: "#0056A0", borderTop: "4px solid #0A1628", borderBottom: "4px solid #0A1628", padding: "5rem 0" }} aria-labelledby="process-heading">
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p className="eyebrow" style={{ color: "#00B5CC" }}>Vores proces</p>
              <h2 id="process-heading" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#F5FAFF", letterSpacing: "-0.02em", margin: 0 }}>
                Sådan arbejder vi
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
              {PROCESS.map(({ step, title, desc }) => (
                <div key={step} style={{ background: "rgba(245,250,255,0.08)", border: "2px solid rgba(245,250,255,0.2)", padding: "2rem" }}>
                  <div style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "2.5rem", fontWeight: 800, color: "#00B5CC", lineHeight: 1, marginBottom: "1rem" }}>{step}</div>
                  <h3 style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "1.125rem", fontWeight: 700, color: "#F5FAFF", margin: "0 0 0.625rem" }}>{title}</h3>
                  <p style={{ color: "rgba(245,250,255,0.7)", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#E8F3FF", borderBottom: "4px solid #0A1628", padding: "4rem 0" }}>
          <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0A1628", margin: "0 0 0.625rem" }}>
                Hvilken løsning passer jer?
              </h2>
              <p style={{ color: "#4A6080", fontSize: "1rem", margin: 0 }}>
                Kontakt os for en gratis rådgivningssnak — ingen forpligtelse.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", flexShrink: 0 }}>
              <Link to="/kontakt" className="nb-btn nb-btn-primary">Kontakt os →</Link>
              <Link to="/priser" className="nb-btn nb-btn-outline">Se priser</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
