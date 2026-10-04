import { ImageResponse } from "next/og";

// Preview image shown when the site is shared on WhatsApp, Facebook,
// Instagram DMs, LinkedIn, X, etc.
export const alt = "Lucky Computers – Laptop & Computer Repair in Kukatpally, Hyderabad";
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
          padding: "72px 80px",
          background: "linear-gradient(135deg, #f8fafc 0%, #dbeafe 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: 6, color: "#2563eb" }}>
          FAST. RELIABLE. HONEST.
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 110, fontWeight: 900, lineHeight: 1, letterSpacing: -3 }}>
            LUCKY COMPUTERS
          </div>
          <div style={{ display: "flex", fontSize: 42, fontWeight: 600, marginTop: 24, color: "#334155" }}>
            Laptop &amp; Computer Repair · Refurbished Laptops
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30, fontWeight: 600 }}>
          <div style={{ display: "flex", color: "#475569" }}>Kukatpally, Hyderabad</div>
          <div
            style={{
              display: "flex",
              background: "#0f172a",
              color: "#ffffff",
              padding: "14px 30px",
              borderRadius: 999,
            }}
          >
            +91 96188 49601
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}