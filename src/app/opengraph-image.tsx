import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Billing System, Education ERP & Custom Software`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(700px 420px at 0% 0%, rgba(46,91,255,0.16), transparent), radial-gradient(700px 420px at 100% 0%, rgba(246,148,71,0.2), transparent), #fcfdff",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              paddingTop: 12,
              border: "1.5px solid rgba(15,23,42,0.15)",
              background: "#ffffff",
              color: "#151824",
            }}
          >
            <div style={{ fontSize: 32 }}>7</div>
            <div style={{ fontSize: 14, color: "#6E7687" }}>14</div>
          </div>
          <div style={{ color: "#151824", fontSize: 38 }}>
            Seven14 Tech Studio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#151824",
              fontSize: 80,
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Software that runs Indian businesses and institutes.
          </div>
          <div style={{ color: "#484E5E", fontSize: 30, maxWidth: 900, fontFamily: "sans-serif" }}>
            GST billing for shops and restaurants, an education ERP for schools and colleges,
            and custom websites and apps.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["Billing System", "Education ERP", "Websites", "Mobile Apps"].map((t) => (
            <div
              key={t}
              style={{
                color: "#484E5E",
                fontSize: 24,
                fontFamily: "sans-serif",
                padding: "10px 22px",
                borderRadius: 999,
                background: "#ffffff",
                border: "1px solid rgba(15,23,42,0.12)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
