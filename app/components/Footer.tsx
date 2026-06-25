import { Link } from "react-router";
import { DropMark } from "~/components/Visuals";

const linkStyle: React.CSSProperties = {
  color: "#9DB6CC",
  textDecoration: "none",
  cursor: "pointer",
  fontSize: 14,
};

const headStyle: React.CSSProperties = {
  color: "#fff",
  fontWeight: 600,
  marginBottom: 3,
  fontSize: 14,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0B2740", color: "#9DB6CC" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 32px 36px" }}>
        <div className="ds-grid-4" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <DropMark size={22} />
              <span style={{ fontWeight: 800, fontSize: 17, color: "#fff" }}>
                Define<span style={{ color: "#5FD3E6" }}>Smart</span>
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.55, maxWidth: 280, margin: "0 0 16px" }}>
              Live vandintelligens til bygninger, maskiner og forsyninger — fra define waters A/S.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
              <a href="tel:+4521221606" style={linkStyle}>+45 21 22 16 06</a>
              <a href="mailto:info@define-waters.dk" style={linkStyle}>info@define-waters.dk</a>
              <span style={{ fontSize: 14 }}>Boeslunde Byvej 76, 4242 Boeslunde</span>
            </div>
          </div>

          {/* Produkt */}
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <span style={headStyle}>Produkt</span>
            <Link to="/tjenester" style={linkStyle}>Platform</Link>
            <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
            <Link to="/priser" style={linkStyle}>Priser</Link>
          </div>

          {/* Virksomhed */}
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <span style={headStyle}>Virksomhed</span>
            <Link to="/om-os" style={linkStyle}>Om os</Link>
            <Link to="/kontakt" style={linkStyle}>Kontakt</Link>
          </div>

          {/* Juridisk */}
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <span style={headStyle}>Juridisk</span>
            <span style={linkStyle}>Privatliv</span>
            <span style={linkStyle}>Vilkår</span>
            <span style={linkStyle}>Sikkerhed</span>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: 40,
            paddingTop: 22,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span>© {year} define waters A/S</span>
          <span style={{ fontFamily: '"IBM Plex Mono", monospace' }}>Lavet med vand i tankerne 💧</span>
        </div>
      </div>
    </footer>
  );
}
