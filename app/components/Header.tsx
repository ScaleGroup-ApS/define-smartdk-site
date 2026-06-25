import { Link } from "react-router";
import { useState } from "react";
import { DropMark } from "~/components/Visuals";

const NAV_ITEMS = [
  { title: "Produkt", url: "/tjenester" },
  { title: "Om os", url: "/om-os" },
  { title: "Priser", url: "/priser" },
  { title: "Kontakt", url: "/kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(244,249,253,0.82)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid #E2ECF4",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "#0B2740" }}>
          <DropMark />
          <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: "-0.02em" }}>
            Define<span style={{ color: "#0E63C7" }}>Smart</span>
          </span>
        </Link>

        <div className="hidden md:flex" style={{ alignItems: "center", gap: 30, fontSize: 15, fontWeight: 500 }}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              style={{ color: "#3C566B", textDecoration: "none", transition: "color .15s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#0E63C7")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#3C566B")}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex" style={{ alignItems: "center", gap: 14 }}>
          <Link to="/kontakt" style={{ fontSize: 15, fontWeight: 600, color: "#0B2740", textDecoration: "none" }}>
            Log ind
          </Link>
          <Link
            to="/kontakt"
            style={{
              background: "#0E63C7",
              color: "#fff",
              padding: "11px 19px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              boxShadow: "0 6px 16px rgba(14,99,199,0.28)",
            }}
          >
            Book en demo
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label={open ? "Luk menu" : "Åbn menu"}
          aria-expanded={open}
          style={{
            background: "#fff",
            border: "1px solid #D7E8F5",
            borderRadius: 10,
            padding: 9,
            cursor: "pointer",
            lineHeight: 0,
            color: "#0B2740",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden" style={{ borderTop: "1px solid #E2ECF4", background: "rgba(244,249,253,0.98)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 24px 20px", display: "flex", flexDirection: "column" }}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                onClick={() => setOpen(false)}
                style={{
                  padding: "12px 6px",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#0B2740",
                  textDecoration: "none",
                  borderBottom: "1px solid #E8F1F8",
                }}
              >
                {item.title}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 14,
                textAlign: "center",
                background: "#0E63C7",
                color: "#fff",
                padding: "13px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Book en demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
