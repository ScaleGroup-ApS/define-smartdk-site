/**
 * DashboardPanels — the live KPI / chart / gauge / locations / alerts grid
 * shared between the full /dashboard route and the homepage app showcase.
 */
import { AreaChartCanvas, GaugeCanvas, LiveFlow } from "~/components/Visuals";

const KPIS = [
  { label: "Aktuelt flow", live: true, color: "#0B2740" },
  { label: "Forbrug i dag", value: "38,2k", unit: " L", color: "#0B2740" },
  { label: "Aktive lækager", value: "2", color: "#E0556B" },
  { label: "Filterskift < 7 dage", value: "3", color: "#C98A12" },
];

const LOCATIONS = [
  { name: "Bygning B — Aarhus C", status: "Normal", color: "#0A8F5E", pulse: false },
  { name: "Anlæg 4 — Rotterdam", status: "Lækage", color: "#E0556B", pulse: true },
  { name: "Storcenter Vest", status: "Højt forbrug", color: "#C98A12", pulse: false },
  { name: "Rådhus HQ", status: "Normal", color: "#0A8F5E", pulse: false },
];

const ALERTS = [
  { color: "#E0556B", title: "Løbende flow registreret", meta: "Anlæg 4 · 18 min siden" },
  { color: "#C98A12", title: "Filterskift forfalder snart", meta: "Storcenter Vest · 2 t siden" },
  { color: "#0A8F5E", title: "Lækage løst", meta: "Bygning B · 5 t siden" },
];

const cardBase: React.CSSProperties = { background: "#fff", border: "1px solid #E2ECF4", borderRadius: 16, padding: 20 };

export function DashboardPanels() {
  return (
    <>
      {/* KPI cards */}
      <div className="ds-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 16 }}>
        {KPIS.map((k) => (
          <div key={k.label} style={{ ...cardBase, padding: 18 }}>
            <div style={{ fontSize: 13, color: "#58728A", marginBottom: 8 }}>{k.label}</div>
            {k.live ? (
              <LiveFlow style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 27, fontWeight: 600, color: k.color }} />
            ) : (
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 27, fontWeight: 600, color: k.color }}>
                {k.value}
                {k.unit && <span style={{ fontSize: 14, color: "#94A8B8", fontWeight: 400 }}>{k.unit}</span>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chart + gauge */}
      <div className="ds-split" style={{ display: "grid", gridTemplateColumns: "1.55fr 1fr", gap: 16, marginBottom: 16 }}>
        <div style={cardBase}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <div style={{ fontWeight: 700, fontSize: 16 }}>Forbrug — seneste 24 timer</div>
            <div style={{ fontSize: 13, color: "#58728A", fontFamily: '"IBM Plex Mono", monospace' }}>L / min</div>
          </div>
          <AreaChartCanvas />
        </div>
        <div style={{ ...cardBase, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ alignSelf: "flex-start", fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Live flowrate</div>
          <GaugeCanvas style={{ marginTop: 10 }} />
          <div style={{ textAlign: "center", marginTop: -8 }}>
            <LiveFlow unit={false} style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 30, fontWeight: 600 }} />
            <div style={{ fontSize: 13, color: "#58728A" }}>af 400 L/min kapacitet</div>
          </div>
        </div>
      </div>

      {/* Locations + alerts */}
      <div className="ds-split" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
        <div style={cardBase}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 14 }}>Lokationer</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {LOCATIONS.map((l, i) => (
              <div key={l.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 0", borderBottom: i < LOCATIONS.length - 1 ? "1px solid #EDF3F8" : "none" }}>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{l.name}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, color: l.color, fontFamily: '"IBM Plex Mono", monospace' }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: l.color, animation: l.pulse ? "ds-pulse 1.4s infinite" : "none" }} />{l.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div style={cardBase}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 14 }}>Seneste varsler</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {ALERTS.map((a) => (
              <div key={a.title} style={{ display: "flex", gap: 11 }}>
                <span style={{ flex: "none", width: 8, height: 8, borderRadius: "50%", background: a.color, marginTop: 6 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{a.title}</div>
                  <div style={{ fontSize: 13, color: "#58728A" }}>{a.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
