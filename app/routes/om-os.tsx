import type { Route } from "./+types/om-os";
import { Link } from "react-router";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { JsonLd } from "~/components/JsonLd";
import { buildMeta } from "~/lib/seo";

const SITE_URL = "https://define-smart.dk";
const PAGE_URL = `${SITE_URL}/om-os`;

export function meta(_: Route.MetaArgs) {
  return [
    ...buildMeta({
      title: "Om Os | define waters A/S",
      description:
        "Lær define waters A/S at kende — vores historie, mission og de værdier, der driver vores arbejde med smart vandteknologi i Danmark.",
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
  "@type": "AboutPage",
  name: "Om Os — define waters A/S",
  description: "define waters A/S's historie, mission og værdier inden for smart vandteknologi.",
  url: PAGE_URL,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Om Os", item: PAGE_URL },
    ],
  },
};

const VALUES = [
  {
    title: "Præcision",
    desc: "Vi kompromitterer aldrig med nøjagtighed. Vores sensorer og systemer opfylder de strengeste industristandarder.",
  },
  {
    title: "Bæredygtighed",
    desc: "Intelligent vandforvaltning er kernen i en bæredygtig fremtid. Vi hjælper virksomheder med at reducere spild.",
  },
  {
    title: "Innovation",
    desc: "Vi investerer kontinuerligt i forskning og udvikling for at levere fremtidens løsninger i dag.",
  },
  {
    title: "Partnerskab",
    desc: "Vi er ikke blot leverandør — vi er langsigtet teknologipartner, der vokser med jeres behov.",
  },
];

export default function OmOs(_: Route.ComponentProps) {
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
              <b style={{ color: "#F5FAFF" }}>Om Os</b>
            </nav>
            <p className="eyebrow">Om Os</p>
            <h1>Vi definerer fremtidens vandteknologi</h1>
            <p className="lead">
              define waters A/S er en dansk virksomhed specialiseret i intelligente
              måle&shy;systemer og vandovervågning til industri, landbrug og kommuner.
            </p>
          </div>
        </header>

        {/* Story */}
        <section style={{ padding: "5rem 0", background: "#F5FAFF" }} aria-labelledby="story-heading">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
              <div>
                <p className="eyebrow" style={{ color: "#0056A0" }}>Vores historie</p>
                <h2 id="story-heading" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 1.25rem" }}>
                  Grundlagt med en vision om præcision
                </h2>
                <p style={{ color: "#4A6080", fontSize: "1.0625rem", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
                  define waters A/S blev grundlagt med en klar mission: at give virksomheder
                  og myndigheder mulighed for at træffe bedre beslutninger om vandressourcer
                  — baseret på præcise, realtidsdata frem for estimater og tommelfingerregler.
                </p>
                <p style={{ color: "#4A6080", fontSize: "1.0625rem", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
                  Med base i Boeslunde og kunder over hele Danmark har vi siden vores
                  start installeret mere end 500 målesystemer i alt fra mejeriindustrien
                  til kommunale vandværker og landbruget.
                </p>
                <p style={{ color: "#4A6080", fontSize: "1.0625rem", lineHeight: 1.7, margin: 0 }}>
                  I dag er define waters A/S anerkendt som en af de ledende leverandører
                  af smart vandteknologi i Danmark — med en oppetid på 99,8 % og kunder,
                  der kan se effekten direkte på bundlinjen.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { num: "01", title: "Analyse & Rådgivning", desc: "Vi starter med at kortlægge jeres eksisterende vandsystem og identificere forbedringspotentialer." },
                  { num: "02", title: "Skræddersyet Design", desc: "Baseret på analysen designer vi den optimale løsning — tilpasset jeres specifikke behov og budget." },
                  { num: "03", title: "Installation & Drift", desc: "Vores teknikere installerer og idriftsætter systemet, og vi overtager herefter overvågning og vedligehold." },
                ].map(({ num, title, desc }) => (
                  <div key={num} style={{ background: "#F5FAFF", border: "2px solid #0A1628", boxShadow: "3px 3px 0px #0056A0", padding: "1.5rem", display: "flex", gap: "1.25rem" }}>
                    <div style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "1.5rem", fontWeight: 800, color: "#0056A0", minWidth: 40, lineHeight: 1 }}>{num}</div>
                    <div>
                      <h3 style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "1rem", fontWeight: 700, color: "#0A1628", margin: "0 0 0.375rem" }}>{title}</h3>
                      <p style={{ color: "#4A6080", fontSize: "0.9rem", lineHeight: 1.55, margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section style={{ background: "#0A1628", borderTop: "4px solid #0A1628", borderBottom: "4px solid #0A1628", padding: "5rem 0" }} aria-labelledby="mission-heading">
          <div className="wrap" style={{ textAlign: "center" }}>
            <p className="eyebrow">Vores mission</p>
            <h2 id="mission-heading" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, color: "#F5FAFF", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 auto 1.5rem", maxWidth: 720 }}>
              "At gøre vandforvaltning intelligent, præcis og bæredygtig — for alle"
            </h2>
            <p style={{ color: "rgba(245,250,255,0.7)", fontSize: "1.125rem", lineHeight: 1.65, maxWidth: 600, margin: "0 auto 3rem" }}>
              Vi tror på, at adgang til pålidelige vanddata er fundamentalt for
              fremtidens industrielle og kommunale drift. Vores teknologi gør
              komplekse systemer enkle at forstå og styre.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/kontakt" className="nb-btn nb-btn-accent">Kontakt os</Link>
              <Link to="/tjenester" className="nb-btn nb-btn-white">Vores tjenester</Link>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: "5rem 0", background: "#F5FAFF" }} aria-labelledby="values-heading">
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p className="eyebrow" style={{ color: "#0056A0" }}>Vores værdier</p>
              <h2 id="values-heading" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em", lineHeight: 1.1, margin: 0 }}>
                Det vi tror på
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
              {VALUES.map(({ title, desc }) => (
                <article key={title} style={{ background: "#F5FAFF", border: "2px solid #0A1628", boxShadow: "4px 4px 0px #0A1628", padding: "2rem" }}>
                  <div style={{ width: 48, height: 4, background: "#0056A0", marginBottom: "1.25rem" }} aria-hidden="true" />
                  <h3 style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "1.25rem", fontWeight: 700, color: "#0A1628", margin: "0 0 0.75rem" }}>{title}</h3>
                  <p style={{ color: "#4A6080", lineHeight: 1.65, margin: 0, fontSize: "0.9375rem" }}>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#E8F3FF", borderTop: "4px solid #0A1628", padding: "4rem 0" }}>
          <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0A1628", margin: "0 0 0.625rem" }}>
                Lad os tage en snak
              </h2>
              <p style={{ color: "#4A6080", fontSize: "1rem", margin: 0 }}>
                Vi er klar til at hjælpe jer med at finde den rette løsning.
              </p>
            </div>
            <Link to="/kontakt" className="nb-btn nb-btn-primary" style={{ flexShrink: 0 }}>
              Kontakt os i dag →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
