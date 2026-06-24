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
        "Gennemsigtige priser på vandovervågning og smart vandteknologi. Vælg mellem Starter, Professional og Enterprise — eller få et skræddersyet tilbud.",
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
  name: "Priser — define waters A/S",
  description: "Priser på smart vandteknologi og vandovervågning til industri og landbrug.",
  url: PAGE_URL,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Priser", item: PAGE_URL },
    ],
  },
};

const PLANS = [
  {
    name: "Starter",
    tagline: "Perfekt til enkeltinstallationer",
    price: "Fra 1.995",
    unit: "kr./måned",
    note: "Ekskl. moms. Inkl. opsætning.",
    highlight: false,
    features: [
      "Op til 5 sensorer / målepunkter",
      "Cloud-dashboard med realtidsdata",
      "E-mail og SMS alarmer",
      "Månedlige rapporter (PDF)",
      "Support på hverdage 8–17",
      "Online onboarding og dokumentation",
    ],
    cta: "Kom i gang",
    ctaLink: "/kontakt",
  },
  {
    name: "Professional",
    tagline: "Til virksomheder med komplekse behov",
    price: "Fra 4.995",
    unit: "kr./måned",
    note: "Ekskl. moms. Inkl. opsætning.",
    highlight: true,
    features: [
      "Op til 25 sensorer / målepunkter",
      "Avanceret dashboard med tendensgraf",
      "Anomalidetektion (AI-baseret)",
      "API-integration (SCADA / ERP)",
      "Automatiske compliance-rapporter",
      "Prioriteret support hverdage 8–17",
      "Kvartalsvise servicebesøg",
    ],
    cta: "Vælg Professional",
    ctaLink: "/kontakt",
  },
  {
    name: "Enterprise",
    tagline: "Ubegrænset skalerbarhed og SLA",
    price: "Tilpasset",
    unit: "kontakt os",
    note: "Baseret på jeres specifikke behov.",
    highlight: false,
    features: [
      "Ubegrænsede sensorer og lokationer",
      "Dedikeret kundemanager",
      "24/7 support med garanteret responstid",
      "Custom dashboards og rapportering",
      "On-premises mulighed",
      "Fuld systemintegration",
      "Månedlige servicebesøg",
      "SLA med oppetidsgaranti",
    ],
    cta: "Kontakt salg",
    ctaLink: "/kontakt",
  },
];

const FAQ = [
  {
    q: "Er hardware inkluderet i prisen?",
    a: "Prisen dækker software-abonnementet og cloud-platformen. Hardware (sensorer, gateways etc.) prissættes separat og afhænger af jeres specifikke installation. Vi hjælper jer med at vælge den rette hardware.",
  },
  {
    q: "Kan jeg opgradere min plan?",
    a: "Ja. I kan til enhver tid opgradere til en større plan. Nedgradering kan ske ved udgangen af faktureringsperioden. Kontakt vores team, og vi ordner det.",
  },
  {
    q: "Er der binding på abonnementet?",
    a: "Starter- og Professional-planer har 12 måneders minimumsperiode. Enterprise-aftaler er individuelle. Vi tilbyder en 30-dages prøveperiode uden binding.",
  },
  {
    q: "Hvem installerer hardware?",
    a: "Vores certificerede teknikere installerer og kalibrerer alt hardware. Installation faktureres som en engangspris baseret på omfang og placering.",
  },
  {
    q: "Hvad sker der, hvis en sensor fejler?",
    a: "Systemet alarmerer automatisk ved fejl. Professional- og Enterprise-kunder har prioriteret support og reservedele på lager i Danmark — typisk løst inden for 24–48 timer.",
  },
];

export default function Priser(_: Route.ComponentProps) {
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
              <b style={{ color: "#F5FAFF" }}>Priser</b>
            </nav>
            <p className="eyebrow">Priser</p>
            <h1>Gennemsigtige priser — ingen skjulte gebyrer</h1>
            <p className="lead">
              Vælg den plan, der passer til jeres størrelse og behov — eller kontakt os
              for et skræddersyet tilbud til større installationer.
            </p>
          </div>
        </header>

        {/* Pricing cards */}
        <section style={{ padding: "5rem 0", background: "#F5FAFF" }} aria-labelledby="pricing-heading">
          <div className="wrap">
            <h2 id="pricing-heading" className="sr-only">Prisplaner</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
              {PLANS.map(({ name, tagline, price, unit, note, highlight, features, cta, ctaLink }) => (
                <article
                  key={name}
                  style={{
                    background: highlight ? "#0A1628" : "#F5FAFF",
                    border: "2px solid #0A1628",
                    boxShadow: highlight ? "6px 6px 0px #00B5CC" : "4px 4px 0px #0A1628",
                    padding: "2rem",
                    position: "relative" as const,
                  }}
                >
                  {highlight && (
                    <div style={{ position: "absolute" as const, top: -2, right: 24, background: "#00B5CC", border: "2px solid #0A1628", padding: "0.25rem 0.875rem" }}>
                      <span style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#0A1628" }}>Populær</span>
                    </div>
                  )}

                  <h3 style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "1.5rem", fontWeight: 800, color: highlight ? "#F5FAFF" : "#0A1628", margin: "0 0 0.375rem" }}>{name}</h3>
                  <p style={{ color: highlight ? "rgba(245,250,255,0.65)" : "#4A6080", fontSize: "0.9rem", margin: "0 0 1.5rem" }}>{tagline}</p>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <span style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: highlight ? "#00B5CC" : "#0056A0", letterSpacing: "-0.03em" }}>{price}</span>
                    <span style={{ color: highlight ? "rgba(245,250,255,0.6)" : "#4A6080", fontSize: "0.875rem", marginLeft: "0.5rem" }}>{unit}</span>
                    <div style={{ fontSize: "0.8rem", color: highlight ? "rgba(245,250,255,0.45)" : "#6A80A0", marginTop: "0.25rem" }}>{note}</div>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={highlight ? "#00B5CC" : "#0056A0"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }}>
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span style={{ color: highlight ? "rgba(245,250,255,0.85)" : "#0A1628", fontSize: "0.9375rem", lineHeight: 1.45 }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={ctaLink}
                    className={highlight ? "nb-btn nb-btn-accent" : "nb-btn nb-btn-primary"}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    {cta} →
                  </Link>
                </article>
              ))}
            </div>

            <p style={{ textAlign: "center", color: "#4A6080", fontSize: "0.9rem", marginTop: "2rem" }}>
              Alle priser er ekskl. moms. Hardware prissættes separat.{" "}
              <Link to="/kontakt" style={{ color: "#0056A0", fontWeight: 600 }}>Kontakt os</Link>{" "}
              for et skræddersyet tilbud.
            </p>
          </div>
        </section>

        {/* What's included */}
        <section style={{ background: "#0A1628", borderTop: "4px solid #0A1628", borderBottom: "4px solid #0A1628", padding: "5rem 0" }} aria-labelledby="included-heading">
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p className="eyebrow" style={{ color: "#00B5CC" }}>Altid inkluderet</p>
              <h2 id="included-heading" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#F5FAFF", letterSpacing: "-0.02em", margin: 0 }}>
                I alle planer
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
              {[
                { title: "Sikker cloud", desc: "ISO 27001-certificeret hosting med 99,9 % oppetidsgaranti." },
                { title: "GDPR-compliant", desc: "Data behandles og opbevares i overensstemmelse med dansk og EU-lovgivning." },
                { title: "Automatiske opdateringer", desc: "Platformen opdateres løbende — uden nedetid for jer." },
                { title: "Dataeksport", desc: "Eksportér jeres data til CSV, Excel eller via API til enhver tid." },
                { title: "Dokumentation", desc: "Komplet teknisk dokumentation og onboarding-guides på dansk." },
                { title: "Skalérbarhed", desc: "Tilføj sensorer og lokationer, efterhånden som jeres behov vokser." },
              ].map(({ title, desc }) => (
                <div key={title} style={{ background: "rgba(245,250,255,0.05)", border: "2px solid rgba(245,250,255,0.12)", padding: "1.5rem" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B5CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginBottom: "0.875rem" }}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <h3 style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "1rem", fontWeight: 700, color: "#F5FAFF", margin: "0 0 0.5rem" }}>{title}</h3>
                  <p style={{ color: "rgba(245,250,255,0.6)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "5rem 0", background: "#F5FAFF" }} aria-labelledby="faq-heading">
          <div className="wrap" style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p className="eyebrow" style={{ color: "#0056A0" }}>Spørgsmål & svar</p>
              <h2 id="faq-heading" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em", margin: 0 }}>
                Hyppige spørgsmål
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {FAQ.map(({ q, a }) => (
                <div key={q} style={{ background: "#F5FAFF", border: "2px solid #0A1628", boxShadow: "3px 3px 0px #0056A0", padding: "1.5rem" }}>
                  <h3 style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "1.0625rem", fontWeight: 700, color: "#0A1628", margin: "0 0 0.75rem" }}>{q}</h3>
                  <p style={{ color: "#4A6080", fontSize: "0.9375rem", lineHeight: 1.65, margin: 0 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#E8F3FF", borderTop: "4px solid #0A1628", padding: "4rem 0" }}>
          <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0A1628", margin: "0 0 0.625rem" }}>
                Usikker på hvilken plan?
              </h2>
              <p style={{ color: "#4A6080", fontSize: "1rem", margin: 0 }}>
                Ring eller skriv til os — vi hjælper jer med at vælge rigtigt.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", flexShrink: 0 }}>
              <Link to="/kontakt" className="nb-btn nb-btn-primary">Kontakt os →</Link>
              <a href="tel:+4521221606" className="nb-btn nb-btn-outline">+45 21 22 16 06</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
