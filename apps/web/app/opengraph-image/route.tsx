import { ImageResponse } from "next/og";


export const alt = "Gyanranjan Priyam — Full Stack Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET() {
  const skills = [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Node.js",
    "AI & LLMs",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#090a0f",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(16, 185, 129, 0.15), transparent 40%), radial-gradient(circle at 85% 85%, rgba(59, 130, 246, 0.15), transparent 40%)",
          padding: "54px 64px",
          position: "relative",
          fontFamily: "sans-serif",
          justifyContent: "space-between",
        }}
      >
        {/* Top vibrant border glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background:
              "linear-gradient(90deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)",
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Brand Logo & Name */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #10b981, #059669)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: 800,
                boxShadow: "0 8px 24px rgba(16, 185, 129, 0.35)",
              }}
            >
              GP
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "#f4f4f5",
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "-0.5px",
                }}
              >
                Gyanranjan Priyam
              </span>
              <span
                style={{
                  color: "#71717a",
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "monospace",
                }}
              >
                priyam.tech
              </span>
            </div>
          </div>

          {/* Status Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
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
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              AVAILABLE FOR WORK
            </span>
          </div>
        </div>

        {/* Center Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "950px",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          {/* Main Headline */}
          <div
            style={{
              fontSize: "58px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Full Stack Developer &
            <span
              style={{
                marginLeft: "12px",
                background: "linear-gradient(90deg, #34d399, #60a5fa)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Software Engineer
            </span>
          </div>

          {/* Bio / Value Prop */}
          <p
            style={{
              fontSize: "22px",
              color: "#a1a1aa",
              lineHeight: 1.45,
              margin: 0,
              maxWidth: "850px",
            }}
          >
            Building high-performance web applications, scalable digital products,
            and interactive user experiences at the intersection of web dev & AI.
          </p>

          {/* Tech Stack Pills */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "8px",
            }}
          >
            {skills.map((skill) => (
              <div
                key={skill}
                style={{
                  backgroundColor: "rgba(39, 39, 42, 0.75)",
                  border: "1px solid rgba(63, 63, 70, 0.6)",
                  color: "#e4e4e7",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer Info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(39, 39, 42, 0.8)",
            paddingTop: "20px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <span
              style={{
                color: "#a1a1aa",
                fontSize: "15px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              📍 India
            </span>
            <span style={{ color: "#52525b", fontSize: "14px" }}>•</span>
            <span
              style={{
                color: "#a1a1aa",
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: "monospace",
              }}
            >
              github.com/gyanranjan-priyam
            </span>
          </div>

          <div
            style={{
              color: "#34d399",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "monospace",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            https://www.priyam.tech ↗
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
