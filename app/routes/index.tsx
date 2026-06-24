import type { Route } from "./+types/index";
import { Link } from "react-router";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { JsonLd } from "~/components/JsonLd";
import { buildMeta } from "~/lib/seo";

const SITE_URL = "https://define-smart.dk";

export function meta(_: Route.MetaArgs) {
  return [
    ...buildMeta({
      title: "Forside | define waters A/S",
      description:
        "define waters A/S leverer smart vandteknologi — præcise måleinstrumenter, IoT-sensorer og intelligent overvågning til industri og landbrug i Danmark.",
      url: SITE_URL,
      siteName: "define waters A/S",
      type: "website",
      locale: "da_DK",
    }),
    { tagName: "link", rel: "canonical", href: SITE_URL },
  ];
}

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Forside — define waters A/S",
  description:
    "Smart vandteknologi til industri og landbrug. Præcise måleinstrumenter, IoT-sensorer og intelligent vandovervågning.",
  url: SITE_URL,
};

const SERVICES = [
  {
    title: "Vandovervågning",
    desc: "Kontinuerlig, realtids overvågning af vandkvalitet og -mængde med præcise IoT-sensorer.",
    iconPath: "M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zM12 9m-2.5 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0",
  },
  {
    title: "Dataanalyse",
    desc: "Avanceret datafangst og analyse, der omsætter målinger til handlingsbare indsigter.",
    iconPath: "M2 3h20v14H2zM8 21h8M12 17v4M6 8h4M6 11h6M6 14h3",
  },
  {
    title: "Smart Forvaltning",
    desc: "Intelligent vandforvaltning med automatiserede alarmer, rapporter og optimeringsfunktioner.",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
  },
  {
    title: "Installation & Service",
    desc: "Professionel installation, kalibrering og løbende service af alle målesystemer.",
    iconPath: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  },
];

const STATS = [
  { value: "500+", label: "Installationer" },
  { value: "99.8%", label: "Oppetid" },
  { value: "15+", label: "Års erfaring" },
  { value: "24/7", label: "Overvågning" },
];

const WHY_US = [
  { title: "Dansk kvalitet", desc: "Alle systemer er designet og testet under danske klimaforhold." },
  { title: "±0,1 % nøjagtighed", desc: "Kalibrerede sensorer sikrer pålidelige data til dine beslutninger." },
  { title: "Nem integration", desc: "Åbne API'er gør det let at integrere med SCADA og ERP-systemer." },
  { title: "Lokal support", desc: "Vores teknikere er baseret i Danmark og klar til at hjælpe hurtigt." },
];

export default function Index(_: Route.ComponentProps) {
  return (
    <div className="page">
      <Header />
      <JsonLd data={pageSchema} />

      <main>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #0A1628 0%, #0056A0 60%, #003D75 100%)",
            borderBottom: "4px solid #0A1628",
            padding: "5rem 0 4rem",
            position: "relative",
            overflow: "hidden",
          }}
          aria-labelledby="hero-heading"
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(0,181,204,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
            aria-hidden="true"
          />
          <div className="wrap" style={{ position: "relative" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 1rem",
                background: "rgba(0,181,204,0.12)",
                border: "2px solid #00B5CC",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#00B5CC" }}>
                Smart vandteknologi
              </span>
            </div>

            <h1
              id="hero-heading"
              style={{
                fontFamily: '"Space Grotesk", system-ui, sans-serif',
                fontSize: "clamp(2.75rem, 6vw, 5rem)",
                fontWeight: 800,
                color: "#F5FAFF",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                margin: "0 0 1.5rem",
                maxWidth: "820px",
              }}
              className="reveal"
            >
              Præcis vandovervågning{" "}
              <span style={{ color: "#00B5CC" }}>til fremtiden</span>
            </h1>

            <p
              style={{ fontSize: "clamp(1.0625rem, 2vw, 1.25rem)", color: "rgba(245,250,255,0.8)", maxWidth: "580px", lineHeight: 1.65, margin: "0 0 2.5rem" }}
              className="reveal d1"
            >
              Vi leverer intelligente målesystemer, IoT-sensorer og cloud-baseret
              dataanalyse — fuld kontrol over jeres vandressourcer.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }} className="reveal d2">
              <Link to="/tjenester" className="nb-btn nb-btn-accent">Se vores tjenester</Link>
              <Link to="/kontakt" className="nb-btn nb-btn-white">Kontakt os</Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: "#0056A0", borderBottom: "4px solid #0A1628", padding: "2rem 0" }} aria-label="Nøgletal">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
              {STATS.map(({ value, label }) => (
                <div key={label} style={{ textAlign: "center", padding: "0.5rem" }}>
                  <div style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#00B5CC", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.25rem" }}>
                    {value}
                  </div>
                  <div style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: "0.8125rem", color: "rgba(245,250,255,0.75)", textTransform: "uppercase" as const, letterSpacing: "0.08em", fontWeight: 600 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section style={{ padding: "5rem 0", background: "#F5FAFF" }} aria-labelledby="services-heading">
          <div className="wrap">
            <div style={{ marginBottom: "3rem", maxWidth: "560px" }}>
              <p className="eyebrow">Vores tjenester</p>
              <h2 id="services-heading" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 1rem" }}>
                Alt inden for vandteknologi
              </h2>
              <p style={{ color: "#4A6080", fontSize: "1.0625rem", lineHeight: 1.65, margin: 0 }}>
                Fra sensor til skyløsning — vi dækker hele kæden og sikrer, at din virksomhed altid har de rigtige data.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {SERVICES.map(({ title, desc, iconPath }) => (
                <article
                  key={title}
                  style={{ background: "#F5FAFF", border: "2px solid #0A1628", boxShadow: "4px 4px 0px #0A1628", padding: "2rem" }}
                >
                  <div style={{ width: 56, height: 56, background: "#E8F3FF", border: "2px solid #0056A0", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", color: "#0056A0" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={iconPath} />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "1.25rem", fontWeight: 700, color: "#0A1628", margin: "0 0 0.75rem" }}>
                    {title}
                  </h3>
                  <p style={{ color: "#4A6080", lineHeight: 1.6, margin: 0, fontSize: "0.9375rem" }}>{desc}</p>
                </article>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
              <Link to="/tjenester" className="nb-btn nb-btn-primary">Se alle tjenester →</Link>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section style={{ background: "#0A1628", borderTop: "4px solid #0A1628", borderBottom: "4px solid #0A1628", padding: "5rem 0" }} aria-labelledby="why-heading">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
              <div>
                <p className="eyebrow">Hvorfor define waters?</p>
                <h2 id="why-heading" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#F5FAFF", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 1.25rem" }}>
                  Teknologi du kan regne med
                </h2>
                <p style={{ color: "rgba(245,250,255,0.7)", fontSize: "1.0625rem", lineHeight: 1.65, margin: "0 0 2rem" }}>
                  define waters A/S er grundlagt med ét formål: at give virksomheder og kommuner de bedste
                  forudsætninger for ansvarlig vandforvaltning — med dansk kvalitet og præcis teknologi.
                </p>
                <Link to="/om-os" className="nb-btn nb-btn-accent">Læs om os →</Link>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                {WHY_US.map(({ title, desc }) => (
                  <div key={title} style={{ background: "rgba(245,250,255,0.05)", border: "2px solid rgba(245,250,255,0.12)", padding: "1.5rem" }}>
                    <div style={{ width: 8, height: 8, background: "#00B5CC", marginBottom: "0.875rem" }} aria-hidden="true" />
                    <h3 style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "1rem", fontWeight: 700, color: "#F5FAFF", margin: "0 0 0.5rem" }}>{title}</h3>
                    <p style={{ color: "rgba(245,250,255,0.6)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#E8F3FF", borderBottom: "4px solid #0A1628", padding: "5rem 0" }} aria-labelledby="cta-heading">
          <div className="wrap" style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
            <p className="eyebrow" style={{ color: "#0056A0" }}>Kom i gang</p>
            <h2 id="cta-heading" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 1.25rem" }}>
              Klar til smartere vandforvaltning?
            </h2>
            <p style={{ color: "#4A6080", fontSize: "1.0625rem", lineHeight: 1.65, margin: "0 0 2.5rem" }}>
              Kontakt os for en uforpligtende snak om, hvordan vi kan hjælpe din virksomhed
              med at optimere vandforbrug og sikre lovpligtig dokumentation.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/kontakt" className="nb-btn nb-btn-primary">Få et gratis tilbud</Link>
              <Link to="/priser" className="nb-btn nb-btn-outline">Se priser</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
