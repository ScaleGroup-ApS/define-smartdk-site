import { Link } from "react-router";
import { useState } from "react";

const NAV_ITEMS = [
  { title: "Forside", url: "/" },
  { title: "Tjenester", url: "/tjenester" },
  { title: "Priser", url: "/priser" },
  { title: "Om Os", url: "/om-os" },
  { title: "Kontakt", url: "/kontakt" },
];

const S = {
  header: {
    backgroundColor: "#F5FAFF",
    borderBottom: "4px solid #0A1628",
    position: "sticky" as const,
    top: 0,
    zIndex: 50,
  },
  inner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1.5rem",
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontFamily: '"Space Grotesk", system-ui, sans-serif',
    fontWeight: 800,
    fontSize: "1.125rem",
    color: "#0A1628",
    textDecoration: "none",
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
  },
  logoAccent: {
    color: "#0056A0",
  },
  navLink: {
    fontFamily: '"DM Sans", system-ui, sans-serif',
    fontWeight: 600,
    fontSize: "0.9375rem",
    color: "#0A1628",
    textDecoration: "none",
  },
  hamburger: {
    background: "none",
    border: "2px solid #0A1628",
    padding: "0.5rem",
    cursor: "pointer",
    boxShadow: "3px 3px 0px #0A1628",
    lineHeight: 0,
  },
  mobileMenu: {
    borderTop: "2px solid #0A1628",
    backgroundColor: "#E8F3FF",
  },
  mobileInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem 1.5rem",
    display: "flex",
    flexDirection: "column" as const,
  },
  mobileLink: {
    display: "block",
    padding: "0.75rem 1rem",
    fontFamily: '"Space Grotesk", system-ui, sans-serif',
    fontWeight: 700,
    fontSize: "1rem",
    color: "#0A1628",
    textDecoration: "none",
    borderBottom: "1px solid rgba(10,22,40,0.12)",
  },
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={S.header}>
      <div style={S.inner}>
        <Link to="/" style={S.logo}>
          <span style={S.logoAccent}>define</span> waters A/S
        </Link>

        <nav
          aria-label="Primær navigation"
          style={{ alignItems: "center", gap: "2rem", display: "flex" }}
          className="hidden md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <Link key={item.url} to={item.url} style={S.navLink}>
              {item.title}
            </Link>
          ))}
        </nav>

        <Link
          to="/kontakt"
          className="nb-btn nb-btn-primary hidden md:inline-flex"
          style={{ padding: "0.625rem 1.5rem", fontSize: "0.875rem" }}
        >
          Kontakt os →
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label={mobileOpen ? "Luk menu" : "Åbn menu"}
          aria-expanded={mobileOpen}
          style={S.hamburger}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A1628" strokeWidth="2.5" aria-hidden="true">
            {mobileOpen
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden" style={S.mobileMenu}>
          <div style={S.mobileInner}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                onClick={() => setMobileOpen(false)}
                style={S.mobileLink}
              >
                {item.title}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="nb-btn nb-btn-primary"
              style={{ marginTop: "0.75rem" }}
            >
              Kontakt os →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
