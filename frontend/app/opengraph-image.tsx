import { ImageResponse } from "next/og";

export const alt = "Ardashev.dev — разработка и автоматизация";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#020817",
        color: "white",
        display: "flex",
        height: "100%",
        padding: "72px 80px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "rgba(52, 211, 153, 0.16)",
          borderRadius: 999,
          filter: "blur(70px)",
          height: 360,
          position: "absolute",
          right: -80,
          top: -100,
          width: 360,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", width: 970 }}>
        <div
          style={{
            color: "#6ee7b7",
            display: "flex",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Development & automation
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 70,
            fontWeight: 700,
            letterSpacing: "-0.045em",
            lineHeight: 1.05,
            marginTop: 28,
          }}
        >
          Боты, парсеры и CRM-системы для бизнеса
        </div>
        <div
          style={{
            color: "#cbd5e1",
            display: "flex",
            fontSize: 29,
            lineHeight: 1.45,
            marginTop: 30,
          }}
        >
          Telegram · Max · Python · API-интеграции
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            marginTop: 58,
          }}
        >
          Ardashev<span style={{ color: "#34d399" }}>.</span>dev
        </div>
      </div>
    </div>,
    size,
  );
}
