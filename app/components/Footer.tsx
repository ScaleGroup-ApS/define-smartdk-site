import { Link } from "react-router";

const NAV_LINKS = [
  { href: "/", label: "Forside" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/priser", label: "Priser" },
  { href: "/om-os", label: "Om Os" },
  { href: "/kontakt", label: "Kontakt" },
];

const linkStyle: React.CSSProperties = {
  fontFamily: '"DM Sans", system-ui, sans-serif',
  color: "rgba(245,250,255,0.65)",
  textDecoration: "none",
  fontSize: "0.9375rem",
};

const colHeadStyle: React.CSSProperties = {
  fontFamily: '"Space Grotesk", system-ui, sans-serif',
  fontWeight: 700,
  fontSize: "0.75rem",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  color: "#00B5CC",
  margin: "0 0 1rem 0",
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0A1628", color: "#F5FAFF", borderTop: "4px solid #0A1628" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: '"Space Grotesk", system-ui, sans-serif',
                fontWeight: 800,
                fontSize: "1.375rem",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              <span style={{ color: "#00B5CC" }}>define</span>{" "}
              <span style={{ color: "#F5FAFF" }}>waters A/S</span>
            </div>
            <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgba(245,250,255,0.65)", maxWidth: "340px", lineHeight: 1.65, fontSize: "0.9375rem", margin: "0 0 1.5rem" }}>
              Smart vandteknologi til industrien. Vi leverer præcise måle&shy;løsninger, intelligent overvågning og bæredygtig vandforvaltning.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B5CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginTop: 2, flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: "0.9rem", color: "rgba(245,250,255,0.65)" }}>
                  Boeslunde Byvej 76, 4242 Boeslunde
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B5CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+4521221606" style={{ ...linkStyle, color: "rgba(245,250,255,0.65)" }}>+45 21 22 16 06</a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B5CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" /><path d="M22 6l-10 7L2 6" />
                </svg>
                <a href="mailto:info@define-waters.dk" style={{ ...linkStyle, color: "rgba(245,250,255,0.65)" }}>info@define-waters.dk</a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={colHeadStyle}>Navigation</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link to={href} style={linkStyle}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={colHeadStyle}>Åbningstider</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem", color: "rgba(245,250,255,0.65)" }}>
              <div>Mandag – fredag</div>
              <div style={{ color: "#F5FAFF", fontWeight: 600 }}>08:00 – 17:00</div>
              <div style={{ marginTop: "0.75rem" }}>Lørdag – søndag</div>
              <div style={{ color: "#F5FAFF", fontWeight: 600 }}>Lukket</div>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <Link
                to="/kontakt"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.625rem 1.25rem",
                  background: "#0056A0",
                  border: "2px solid #F5FAFF",
                  boxShadow: "3px 3px 0px #00B5CC",
                  color: "#F5FAFF",
                  fontFamily: '"Space Grotesk", system-ui, sans-serif',
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                Kontakt os →
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "2px solid rgba(245,250,255,0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: "0.875rem", color: "rgba(245,250,255,0.35)", margin: 0 }}>
            © {year} define waters A/S. Alle rettigheder forbeholdes.
          </p>
          <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: "0.8125rem", color: "rgba(245,250,255,0.25)", margin: 0 }}>
            define-smart.dk
          </p>
        </div>
      </div>
    </footer>
  );
}
