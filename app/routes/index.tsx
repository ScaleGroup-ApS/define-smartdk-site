import type { Route } from "./+types/index";
import { Link } from "react-router";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { JsonLd } from "~/components/JsonLd";
import { buildMeta } from "~/lib/seo";
import { WaveCanvas, MiniFlowCanvas, CountUp, LiveFlow } from "~/components/Visuals";
import { DashboardPanels } from "~/components/DashboardPanels";

const SITE_URL = "https://define-smart.dk";

export function meta(_: Route.MetaArgs) {
  return [
    ...buildMeta({
      title: "Define Smart | Live vandintelligens — define waters A/S",
      description:
        "Define Smart forvandler vandmålere og maskiner til live intelligens: realtidsforbrug, automatisk lækagevarsling og forudsigelige filterskift. Plug-and-play på 2 minutter.",
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
  name: "Define Smart — Live vandintelligens",
  description:
    "Realtidsovervågning, lækagevarsling og forudsigeligt filterskift for vandmålere og maskiner.",
  url: SITE_URL,
};

const card: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #E2ECF4",
  borderRadius: 18,
  padding: 30,
};

export default function Index(_: Route.ComponentProps) {
  return (
    <div className="page">
      <Header />
      <JsonLd data={pageSchema} />

      <main>
        {/* Hero */}
        <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg,#F4F9FD 0%,#E7F2FB 100%)" }}>
          <WaveCanvas interactive />
          <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "96px 32px 120px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #D7E8F5", padding: "7px 14px", borderRadius: 100, fontSize: 13, fontWeight: 600, color: "#0A7F8C", marginBottom: 26, boxShadow: "0 4px 14px rgba(11,39,64,0.05)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#15B6CF", animation: "ds-pulse 1.8s ease-in-out infinite" }} />
              Live vandintelligens — uden WiFi, uden besvær
            </div>
            <h1 className="ds-h1" style={{ fontSize: 64, lineHeight: 1.04, letterSpacing: "-0.035em", fontWeight: 800, margin: "0 0 22px", maxWidth: 780, textWrap: "balance" }}>
              Kend hver dråbe,<br />før den koster dig.
            </h1>
            <p style={{ fontSize: 20, lineHeight: 1.5, color: "#3C566B", maxWidth: 580, margin: "0 0 36px" }}>
              Define Smart forvandler almindelige vandmålere og maskiner til live intelligens — realtidsforbrug, automatisk lækagevarsling og forudsigelige filterskift. Plug-and-play på 2 minutter, kører på sit eget net.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link to="/kontakt" style={{ background: "#0E63C7", color: "#fff", padding: "15px 28px", borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: "none", boxShadow: "0 10px 26px rgba(14,99,199,0.3)" }}>Book en demo</Link>
              <Link to="/dashboard" style={{ background: "#fff", color: "#0B2740", border: "1px solid #CFE1F0", padding: "15px 28px", borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: "none" }}>Se dashboardet →</Link>
            </div>
            <div style={{ display: "flex", gap: 40, marginTop: 64, flexWrap: "wrap" }}>
              {[
                { target: 1240000000, fmt: "liters" as const, label: "liter overvåget" },
                { target: 38, fmt: "percent" as const, label: "mindre vandspild i snit" },
                { target: 500, fmt: "plus" as const, label: "installationer" },
                { target: 60, fmt: "seconds" as const, label: "svartid på varsler" },
              ].map((s) => (
                <div key={s.label}>
                  <CountUp target={s.target} fmt={s.fmt} style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 30, fontWeight: 600, color: "#0E63C7" }} />
                  <div style={{ fontSize: 13, color: "#58728A", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust band */}
        <section style={{ background: "#fff", borderTop: "1px solid #E2ECF4", borderBottom: "1px solid #E2ECF4" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "30px 32px", display: "flex", alignItems: "center", gap: 36, flexWrap: "wrap", justifyContent: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#8499A9", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Betroet af serviceteams på 500+ installationer i hele Danmark
            </span>
            <div style={{ display: "flex", gap: 34, flexWrap: "wrap", alignItems: "center", opacity: 0.6 }}>
              {["NORDIQ", "Vantage Ejd.", "HydroCorp", "Meridian", "CIVIC VAND"].map((n) => (
                <span key={n} style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em", color: "#0B2740" }}>{n}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Define Smart */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 32px 40px" }}>
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#15B6CF", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 14 }}>Hvorfor Define Smart</div>
            <h2 className="ds-h2" style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 800, margin: 0 }}>Hver måler og maskine, der arbejder for jer.</h2>
          </div>
          <div className="ds-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            <div style={card}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: "linear-gradient(150deg,#E7F6FA,#D6ECFA)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <div style={{ width: 16, height: 16, border: "3px solid #0E63C7", borderRadius: "50%", borderRightColor: "transparent", animation: "spin 3s linear infinite" }} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 10px", letterSpacing: "-0.01em" }}>Realtidsovervågning</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "#58728A", margin: 0 }}>Se forbruget flyde på tværs af hver måler og maskine, sekund for sekund — ikke på næste måneds regning.</p>
            </div>
            <div style={card}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: "linear-gradient(150deg,#E7F6FA,#D9F2EC)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <div style={{ width: 18, height: 18, border: "3px solid #0A7F8C", borderRadius: 5, transform: "rotate(45deg)" }} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 10px", letterSpacing: "-0.01em" }}>Forudsigeligt filterskift</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "#58728A", margin: 0 }}>Vi beregner filterkapacitet ud fra type og vandets hårdhed, måler forbruget og planlægger næste skift efter faktisk brug.</p>
            </div>
            <div style={card}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: "linear-gradient(150deg,#FDECEC,#FBE3EC)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E0556B", animation: "ds-pulse 1.4s infinite" }} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 10px", letterSpacing: "-0.01em" }}>Lækage- &amp; anomalivarsling</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "#58728A", margin: 0 }}>Fang lækager og natlige udsving i det øjeblik de opstår. Regler I selv sætter, varsler der hvor I arbejder.</p>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px 40px" }}>
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#15B6CF", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 14 }}>Brancher</div>
            <h2 className="ds-h2" style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 800, margin: "0 0 14px" }}>Bygget til, hvor vand betyder mest.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "#58728A", margin: 0 }}>Samme platform — tilpasset jeres virkelighed. Se hvordan teams bruger Define Smart.</p>
          </div>
          <div className="ds-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22 }}>
            {[
              { icon: <div style={{ width: 18, height: 22, border: "3px solid #0E63C7", borderRadius: 3 }} />, bg: "linear-gradient(150deg,#E7F2FB,#D6ECFA)", title: "Erhvervsejendomme", desc: "Stop skjulte lækager, før de når lejernes regning. Fordel forbrug pr. lejer og dokumentér ESG-besparelser.", stat: "−32% vandspild" },
              { icon: <div style={{ width: 20, height: 20, border: "3px solid #0A7F8C", borderRadius: "50%", borderTopColor: "transparent", animation: "spin 3s linear infinite" }} />, bg: "linear-gradient(150deg,#E7F2FB,#D9F2EC)", title: "Industri & produktion", desc: "Overvåg køling, proces og rengøring i realtid. Fang udsving, før de stopper linjen.", stat: "<60s varsling" },
              { icon: <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#19C0D6" }} />, bg: "linear-gradient(150deg,#FDF1E7,#FBE9DA)", title: "HoReCa & kontor", desc: "Forudsig filterskift på kaffemaskiner og udskænkning. Færre nedbrud, gladere gæster, smartere serviceruter.", stat: "2 min montage" },
              { icon: <div style={{ width: 20, height: 20, background: "linear-gradient(150deg,#19C0D6,#0E63C7)", borderRadius: "50% 50% 50% 2px", transform: "rotate(45deg)" }} />, bg: "linear-gradient(150deg,#E7F2FB,#D6ECFA)", title: "Forsyning & kommune", desc: "Overvåg distribueret forbrug på tværs af målere og find tab i ledningsnettet hurtigt.", stat: "1/sek måling" },
            ].map((b) => (
              <div key={b.title} style={{ ...card, padding: 32, display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ flex: "none", width: 52, height: 52, borderRadius: 14, background: b.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>{b.icon}</div>
                <div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 8px" }}>{b.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: "#58728A", margin: "0 0 14px" }}>{b.desc}</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: '"IBM Plex Mono", monospace', fontSize: 14, fontWeight: 600, color: "#0A7F8C", background: "#E7F6FA", padding: "5px 11px", borderRadius: 8 }}>{b.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works (dark) */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
          <div style={{ background: "linear-gradient(160deg,#0B2740,#0A3A66)", borderRadius: 26, padding: 54, position: "relative", overflow: "hidden" }}>
            <WaveCanvas variant="dark" style={{ top: "auto", height: "55%", opacity: 0.9 }} />
            <div className="ds-split" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#5FD3E6", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 14 }}>Sådan virker det</div>
                <h2 style={{ fontSize: 36, lineHeight: 1.12, letterSpacing: "-0.03em", fontWeight: 800, color: "#fff", margin: "0 0 30px" }}>Fra måler til beslutning i tre trin.</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { n: "1", t: "Installér", d: "Plug-and-play flowmåler klikkes på enhver maskine på 2 minutter. Ingen VVS, ingen WiFi." },
                    { n: "2", t: "Forbind", d: "Data flyder til skyen på vores eget IoT-net. Intet at konfigurere, 5 års batteri." },
                    { n: "3", t: "Handl", d: "Dashboard, varsler og smarte arbejdsordrer planlægger service efter nærhed — så I kører smartere." },
                  ].map((s) => (
                    <div key={s.n} style={{ display: "flex", gap: 16 }}>
                      <div style={{ flex: "none", width: 34, height: 34, borderRadius: 10, background: "rgba(95,211,230,0.16)", color: "#5FD3E6", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: '"IBM Plex Mono", monospace', fontWeight: 600 }}>{s.n}</div>
                      <div>
                        <div style={{ color: "#fff", fontWeight: 600, fontSize: 17, marginBottom: 3 }}>{s.t}</div>
                        <div style={{ color: "#9DB6CC", fontSize: 15, lineHeight: 1.5 }}>{s.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 18, padding: 22, backdropFilter: "blur(6px)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>Live flow — Bygning B</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#5FD3E6", fontSize: 12, fontFamily: '"IBM Plex Mono", monospace' }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5FD3E6", animation: "ds-pulse 1.6s infinite" }} />LIVE
                  </span>
                </div>
                <MiniFlowCanvas />
                <div style={{ display: "flex", gap: 18, marginTop: 14 }}>
                  <div>
                    <LiveFlow unit={false} style={{ color: "#5FD3E6", fontFamily: '"IBM Plex Mono", monospace', fontSize: 22, fontWeight: 600 }} />
                    <div style={{ color: "#7E99B2", fontSize: 12 }}>L / min</div>
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontFamily: '"IBM Plex Mono", monospace', fontSize: 22, fontWeight: 600 }}>2.418</div>
                    <div style={{ color: "#7E99B2", fontSize: 12 }}>i dag (L)</div>
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontFamily: '"IBM Plex Mono", monospace', fontSize: 22, fontWeight: 600 }}>0</div>
                    <div style={{ color: "#7E99B2", fontSize: 12 }}>aktive lækager</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard / app showcase */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 32px 24px" }}>
          <div style={{ maxWidth: 640, marginBottom: 40 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#15B6CF", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 14 }}>Appen</div>
            <h2 className="ds-h2" style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 800, margin: "0 0 14px" }}>Og ja — der følger en app med.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "#58728A", margin: 0 }}>Hver måler, varsel og arbejdsordre samlet ét sted. Følg forbruget live på desktop og mobil — fra hele porteføljen ned til en enkelt ventil.</p>
          </div>

          {/* App window */}
          <div style={{ borderRadius: 18, border: "1px solid #E2ECF4", overflow: "hidden", boxShadow: "0 30px 60px rgba(11,39,64,0.12)", background: "#fff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderBottom: "1px solid #E2ECF4", background: "#fff" }}>
              <div style={{ display: "flex", gap: 7 }}>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#E0556B" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#E4B33C" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#3CB97A" }} />
              </div>
              <div className="ds-hide-sm" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 13, color: "#8499A9", background: "#F4F9FD", border: "1px solid #E2ECF4", borderRadius: 8, padding: "4px 14px" }}>app.define-smart.dk</span>
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#E4F6EF", color: "#0A8F5E", padding: "6px 11px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0A8F5E", animation: "ds-pulse 1.6s infinite" }} />Live
              </span>
            </div>
            <div style={{ background: "#EEF4FA", padding: 22 }}>
              <DashboardPanels />
            </div>
          </div>

          <div style={{ marginTop: 26, textAlign: "center" }}>
            <Link to="/dashboard" style={{ display: "inline-block", background: "#fff", color: "#0B2740", border: "1px solid #CFE1F0", padding: "14px 28px", borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: "none" }}>Udforsk hele dashboardet →</Link>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 32px 110px", textAlign: "center" }}>
          <h2 className="ds-h2" style={{ fontSize: 38, lineHeight: 1.12, letterSpacing: "-0.03em", fontWeight: 800, margin: "0 0 16px" }}>Få overblik over jeres vand.</h2>
          <p style={{ fontSize: 18, color: "#58728A", maxWidth: 540, margin: "0 auto 30px" }}>Book en 20-minutters demo, så viser vi live data fra en lokation som jeres.</p>
          <Link to="/kontakt" style={{ display: "inline-block", background: "#0E63C7", color: "#fff", padding: "16px 32px", borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: "none", boxShadow: "0 10px 26px rgba(14,99,199,0.3)" }}>Book en demo</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
