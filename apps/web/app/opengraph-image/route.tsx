import { ImageResponse } from "next/og";

export const alt = "Gyanranjan Priyam — Full Stack Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET() {
  const skills = ["Next.js 16", "React 19", "TypeScript", "Node.js", "Tailwind CSS"];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#090a0f",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.22), transparent 55%), radial-gradient(circle at 50% 85%, rgba(59, 130, 246, 0.18), transparent 50%)",
          padding: "40px",
          position: "relative",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* Top vibrant accent stripe */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #6366f1 100%)",
          }}
        />

        {/* Central Glassmorphic Card (Optimized for WhatsApp 1:1 square & 16:9 banners) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "rgba(18, 20, 29, 0.85)",
            border: "1.5px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "28px",
            padding: "42px 56px",
            maxWidth: "760px",
            width: "100%",
            boxShadow: "0 24px 64px rgba(0, 0, 0, 0.6)",
          }}
        >
          {/* Avatar Icon + Available Badge Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "18px",
            }}
          >
            {/* GP Avatar Emblem */}
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "26px",
                fontWeight: 900,
                boxShadow: "0 8px 24px rgba(16, 185, 129, 0.4)",
              }}
            >
              GP
            </div>

            {/* Pulsing Status Pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(16, 185, 129, 0.14)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
                padding: "8px 16px",
                borderRadius: "9999px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 10px #10b981",
                }}
              />
              <span
                style={{
                  color: "#34d399",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                }}
              >
                AVAILABLE FOR WORK
              </span>
            </div>
          </div>

          {/* Primary Name */}
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 900,
              color: "#ffffff",
              margin: "0 0 8px 0",
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Gyanranjan Priyam
          </h1>

          {/* Subtitle / Role */}
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              background: "linear-gradient(90deg, #34d399 0%, #60a5fa 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
            }}
          >
            Full Stack Developer & Engineer
          </div>

          {/* Value proposition */}
          <p
            style={{
              fontSize: "16px",
              color: "#94a3b8",
              margin: "0 0 20px 0",
              lineHeight: 1.45,
              maxWidth: "560px",
            }}
          >
            Building high-performance web applications, scalable products, and AI solutions.
          </p>

          {/* Tech Stack Pills */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            {skills.map((skill) => (
              <div
                key={skill}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.07)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#f1f5f9",
                  padding: "5px 12px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Domain tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#64748b",
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "monospace",
            }}
          >
            <span>🌐</span>
            <span style={{ color: "#38bdf8" }}>https://www.priyam.tech</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
