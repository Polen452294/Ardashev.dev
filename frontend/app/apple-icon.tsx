import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#020817",
          color: "#6ee7b7",
          display: "flex",
          fontSize: 112,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-0.08em",
          width: "100%",
        }}
      >
        A<span style={{ color: "#34d399" }}>.</span>
      </div>
    ),
    size,
  );
}
