import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Modern Billing. Smarter Operations. One Platform.`;
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
            "radial-gradient(900px 500px at 80% -10%, rgba(255,92,40,0.35), transparent), #0a0908",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
              background: "linear-gradient(135deg, #ff7e4d, #e8430f)",
              color: "white",
            }}
          >
            <div style={{ fontSize: 30, fontWeight: 800 }}>7</div>
            <div style={{ fontSize: 18, fontWeight: 700, opacity: 0.85 }}>14</div>
          </div>
          <div style={{ color: "#faf8f5", fontSize: 34, fontWeight: 700 }}>
            Seven14 Tech Studio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#faf8f5",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Run Billing, Inventory, CRM & Operations from one platform.
          </div>
          <div style={{ color: "#b3aaa0", fontSize: 30, maxWidth: 880 }}>
            The modern business operating system for restaurants, retail and
            multi-outlet businesses.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["Billing", "POS", "Inventory", "CRM", "Analytics"].map((t) => (
            <div
              key={t}
              style={{
                color: "#ffb799",
                fontSize: 24,
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255,92,40,0.4)",
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
