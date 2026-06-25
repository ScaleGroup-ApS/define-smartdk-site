import type { Route } from "./+types/om-os";
import { Link } from "react-router";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { JsonLd } from "~/components/JsonLd";
import { buildMeta } from "~/lib/seo";
import { WaveCanvas } from "~/components/Visuals";

const SITE_URL = "https://define-smart.dk";
const PAGE_URL = `${SITE_URL}/om-os`;

export function meta(_: Route.MetaArgs) {
  return [
    ...buildMeta({
      title: "Om os | define waters A/S",
      description:
        "Vi gør vand til viden. define waters A/S bygger sensorerne og softwaren bag Define Smart — live vandintelligens til bygninger, maskiner og forsyninger i Danmark.",
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
  name: "Om os — define waters A/S",
  description: "Historien bag Define Smart og define waters A/S.",
  url: PAGE_URL,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Om os", item: PAGE_URL },
    ],
  },
};

const STATS = [
  { v: "15+", l: "års erfaring" },
  { v: "38", l: "medarbejdere" },
  { v: "500+", l: "installationer" },
  { v: "99,8%", l: "oppetid" },
];

const VALUES = [
  { icon: <div style={{ width: 16, height: 16, border: "3px solid #0E63C7", borderRadius: 4 }} />, bg: "#EAF3FB", title: "Enkelhed", desc: "Hvis det tager mere end to minutter at sætte op, har vi fejlet. Teknologi skal forsvinde i baggrunden." },
  { icon: <div style={{ width: 16, height: 16, background: "linear-gradient(150deg,#19C0D6,#0A7F8C)", borderRadius: "50% 50% 50% 2px", transform: "rotate(45deg)" }} />, bg: "#E7F6FA", title: "Bæredygtighed", desc: "Hver dråbe, vi hjælper med at spare, tæller. Vand er den ressource, vi ikke kan lave mere af." },
  { icon: <div style={{ width: 16, height: 16, border: "3px solid #0A7F8C", borderRadius: "50%" }} />, bg: "#EAF3FB", title: "Pålidelighed", desc: "Vores kunder stoler på os til at fange problemer, mens de sover. Det ansvar tager vi alvorligt." },
];

export default function OmOs(_: Route.ComponentProps) {
  return (
    <div className="page">
      <Header />
      <JsonLd data={pageSchema} />

      <main>
        <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg,#F4F9FD 0%,#E7F2FB 100%)" }}>
          <WaveCanvas style={{ opacity: 0.7 }} />
          <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "88px 32px 80px" }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#15B6CF", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 14 }}>Om os</div>
            <h1 className="ds-h1" style={{ fontSize: 56, lineHeight: 1.04, letterSpacing: "-0.035em", fontWeight: 800, margin: "0 0 20px", maxWidth: 760, textWrap: "balance" }}>Vi gør vand til viden.</h1>
            <p style={{ fontSize: 20, lineHeight: 1.5, color: "#3C566B", maxWidth: 600, margin: 0 }}>
              define waters A/S blev grundlagt med en enkel overbevisning: det vand, der løber gennem en bygning eller en maskine, fortæller en historie — hvis nogen lytter. Vi bygger sensorerne og softwaren, der lytter.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
          <div className="ds-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <h2 className="ds-h2" style={{ fontSize: 32, lineHeight: 1.14, letterSpacing: "-0.025em", fontWeight: 800, margin: "0 0 18px" }}>Fra serviceteams til 500+ installationer.</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#58728A", margin: "0 0 16px" }}>
                Vi startede med at hjælpe serviceteams med at holde kaffemaskiner i drift. Det viste sig, at det samme princip — måling af faktisk forbrug i realtid — kunne spare bygninger, fabrikker og forsyninger for enorme mængder spildt vand.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#58728A", margin: 0 }}>
                I dag overvåger vores sensorer vand i hele Danmark, kører på vores eget IoT-net og holder i op til fem år på ét batteri. Ingen WiFi, ingen kabler, ingen undskyldninger.
              </p>
            </div>
            <div style={{ position: "relative", background: "repeating-linear-gradient(135deg,#EAF3FB,#EAF3FB 12px,#E2EEF8 12px,#E2EEF8 24px)", borderRadius: 20, minHeight: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 13, color: "#7E99B2" }}>[ teambillede — Boeslunde HQ ]</div>
            </div>
          </div>
        </section>

        <section style={{ background: "#fff", borderTop: "1px solid #E2ECF4", borderBottom: "1px solid #E2ECF4" }}>
          <div className="ds-grid-4" style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, textAlign: "center" }}>
            {STATS.map((s) => (
              <div key={s.l}>
                <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 34, fontWeight: 600, color: "#0E63C7" }}>{s.v}</div>
                <div style={{ fontSize: 14, color: "#58728A", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px 40px" }}>
          <h2 className="ds-h2" style={{ fontSize: 34, lineHeight: 1.12, letterSpacing: "-0.03em", fontWeight: 800, margin: "0 0 40px", maxWidth: 520 }}>Det, vi tror på.</h2>
          <div className="ds-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ background: "#fff", border: "1px solid #E2ECF4", borderRadius: 18, padding: 32 }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: v.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>{v.icon}</div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 9px" }}>{v.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "#58728A", margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 32px 100px", textAlign: "center" }}>
          <h2 className="ds-h2" style={{ fontSize: 34, lineHeight: 1.12, letterSpacing: "-0.03em", fontWeight: 800, margin: "0 0 14px" }}>Vil du være med?</h2>
          <p style={{ fontSize: 17, color: "#58728A", maxWidth: 480, margin: "0 auto 28px" }}>Vi leder altid efter folk, der brænder for vand og data. Eller book en demo og se platformen.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/kontakt" style={{ background: "#0E63C7", color: "#fff", padding: "15px 28px", borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: "none", boxShadow: "0 10px 26px rgba(14,99,199,0.3)" }}>Book en demo</Link>
            <Link to="/tjenester" style={{ background: "#fff", color: "#0B2740", border: "1px solid #CFE1F0", padding: "15px 28px", borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: "none" }}>Se produktet →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
