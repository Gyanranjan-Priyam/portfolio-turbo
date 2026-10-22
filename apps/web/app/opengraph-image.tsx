import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const alt = "Gyanranjan Priyam — Full Stack Developer & Engineer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Load mono-logo-white.png as base64 data URL
function getLogoDataUrl(): string {
  try {
    const candidates = [
      path.join(process.cwd(), "public/logo.png"),
      path.join(process.cwd(), "apps/web/public/logo.png"),
    ];
    for (const p of candidates) {
      if (fs.existsSync(p)) {
        const buf = fs.readFileSync(p);
        return `data:image/png;base64,${buf.toString("base64")}`;
      }
    }
  } catch {
    // fallback
  }
  return "";
}

const LOGO_DATA_URL = getLogoDataUrl();

export default async function Image() {
  const line1 = "Full-Stack Developer";
  const line2 = "& Software Engineer";
    const brandParam = "GYANRANJAN";

  const subline =
    "Building scalable web applications, digital products & AI systems.";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#000000",
          overflow: "hidden",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        {/* Full canvas SVG for high-tech diagonal light streaks & lens flare */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          fill="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1200px",
            height: "630px",
          }}
        >
          <defs>
            {/* Ambient atmospheric haze behind the light streaks */}
            <radialGradient
              id="ambientHaze"
              cx="78%"
              cy="58%"
              r="48%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.14" />
              <stop offset="35%" stopColor="#ff5500" stopOpacity="0.06" />
              <stop offset="70%" stopColor="#ff3300" stopOpacity="0.015" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            {/* Hero Beam Gradient */}
            <linearGradient
              id="heroBeamGrad"
              x1="700"
              y1="630"
              x2="1220"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ff5500" stopOpacity="0" />
              <stop offset="15%" stopColor="#ff6a00" stopOpacity="0.4" />
              <stop offset="42%" stopColor="#ff8c00" stopOpacity="0.95" />
              <stop offset="58%" stopColor="#ffa726" stopOpacity="1" />
              <stop offset="85%" stopColor="#ff7000" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#ff4400" stopOpacity="0" />
            </linearGradient>

            {/* Inner White-Hot Filament */}
            <linearGradient
              id="heroWhiteGrad"
              x1="800"
              y1="500"
              x2="1100"
              y2="150"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="35%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="75%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Companion Beam Gradient */}
            <linearGradient
              id="companionGrad"
              x1="740"
              y1="630"
              x2="1260"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ff5500" stopOpacity="0" />
              <stop offset="25%" stopColor="#ff7000" stopOpacity="0.5" />
              <stop offset="55%" stopColor="#ff8c1a" stopOpacity="0.85" />
              <stop offset="85%" stopColor="#ff6600" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ff4400" stopOpacity="0" />
            </linearGradient>

            {/* Soft Ambient Streaks Gradient */}
            <linearGradient
              id="faintStreakGrad"
              x1="600"
              y1="630"
              x2="1400"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ff6a00" stopOpacity="0" />
              <stop offset="20%" stopColor="#ff7700" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#ff8811" stopOpacity="0.8" />
              <stop offset="90%" stopColor="#ff6600" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff5500" stopOpacity="0" />
            </linearGradient>

            {/* Lens Flare Radial Layers */}
            <radialGradient id="flareOuter" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff7700" stopOpacity="0.45" />
              <stop offset="30%" stopColor="#ff5500" stopOpacity="0.2" />
              <stop offset="70%" stopColor="#ff3300" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#ff3300" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="flareMid" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffcc66" stopOpacity="0.85" />
              <stop offset="25%" stopColor="#ffa01a" stopOpacity="0.6" />
              <stop offset="65%" stopColor="#ff5500" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ff5500" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="flareCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="25%" stopColor="#fff4d0" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#ffb338" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#ff7000" stopOpacity="0" />
            </radialGradient>

            {/* Anamorphic Horizontal Streak */}
            <linearGradient id="anamorphicStreak" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ff7700" stopOpacity="0" />
              <stop offset="25%" stopColor="#ffa726" stopOpacity="0.4" />
              <stop offset="45%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#ffa726" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff7700" stopOpacity="0" />
            </linearGradient>

            {/* Diagonal Streak Along Ray */}
            <linearGradient id="beamFlareStreak" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ff6600" stopOpacity="0" />
              <stop offset="30%" stopColor="#ffaa33" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#ffaa33" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ff6600" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background Ambient Glow */}
          <rect width="1200" height="630" fill="url(#ambientHaze)" />

          {/* Line 1: Lowest faint baseline ray (passes near headline accent) */}
          <line
            x1="590"
            y1="630"
            x2="1070"
            y2="0"
            stroke="url(#faintStreakGrad)"
            strokeWidth="1.2"
            opacity="0.32"
          />

          {/* Line 2: Thin subtle ray */}
          <line
            x1="640"
            y1="630"
            x2="1120"
            y2="0"
            stroke="url(#faintStreakGrad)"
            strokeWidth="1.4"
            opacity="0.42"
          />

          {/* Line 3: Fine ray */}
          <line
            x1="680"
            y1="630"
            x2="1160"
            y2="0"
            stroke="url(#faintStreakGrad)"
            strokeWidth="1.0"
            opacity="0.25"
          />

          {/* Line 4: THE HERO BEAM (with aura, mid bloom, core, and filament) */}
          {/* 4a. Outer Soft Aura */}
          <line
            x1="725"
            y1="630"
            x2="1205"
            y2="0"
            stroke="url(#heroBeamGrad)"
            strokeWidth="15"
            opacity="0.28"
          />
          {/* 4b. Mid Bloom */}
          <line
            x1="725"
            y1="630"
            x2="1205"
            y2="0"
            stroke="url(#heroBeamGrad)"
            strokeWidth="5"
            opacity="0.8"
          />
          {/* 4c. Intense Core */}
          <line
            x1="725"
            y1="630"
            x2="1205"
            y2="0"
            stroke="url(#heroBeamGrad)"
            strokeWidth="2.5"
            opacity="1"
          />
          {/* 4d. Inner White Filament */}
          <line
            x1="725"
            y1="630"
            x2="1205"
            y2="0"
            stroke="url(#heroWhiteGrad)"
            strokeWidth="1.2"
            opacity="0.95"
          />

          {/* Line 5: Companion Bright Beam */}
          <line
            x1="760"
            y1="630"
            x2="1240"
            y2="0"
            stroke="url(#companionGrad)"
            strokeWidth="2.2"
            opacity="0.75"
          />

          {/* Line 6: Medium Streak */}
          <line
            x1="805"
            y1="630"
            x2="1285"
            y2="0"
            stroke="url(#faintStreakGrad)"
            strokeWidth="1.8"
            opacity="0.5"
          />

          {/* Line 7: Thin Accent */}
          <line
            x1="855"
            y1="630"
            x2="1335"
            y2="0"
            stroke="url(#faintStreakGrad)"
            strokeWidth="1.2"
            opacity="0.38"
          />

          {/* Line 8: Fine Streak */}
          <line
            x1="910"
            y1="630"
            x2="1390"
            y2="0"
            stroke="url(#faintStreakGrad)"
            strokeWidth="1.0"
            opacity="0.28"
          />

          {/* Line 9: Distant Streak in Top Right */}
          <line
            x1="970"
            y1="630"
            x2="1450"
            y2="0"
            stroke="url(#faintStreakGrad)"
            strokeWidth="0.8"
            opacity="0.18"
          />

          {/* THE LENS FLARE / LIGHT BURST AT (935, 365) */}
          {/* 1. Outer Diffused Flare Halo */}
          <circle cx="935" cy="365" r="110" fill="url(#flareOuter)" />

          {/* 2. Mid Warm Bloom */}
          <circle cx="935" cy="365" r="46" fill="url(#flareMid)" />

          {/* 3. Intense Golden Core */}
          <circle cx="935" cy="365" r="18" fill="url(#flareCore)" />

          {/* 4. White-Hot Center Star */}
          <circle cx="935" cy="365" r="3.5" fill="#ffffff" />

          {/* 5. Horizontal Anamorphic Lens Flare Glint */}
          <ellipse
            cx="935"
            cy="365"
            rx="95"
            ry="3"
            fill="url(#anamorphicStreak)"
          />

          {/* 6. Flare Streak Along the Diagonal Beam Axis (-52.7 deg) */}
          <ellipse
            cx="935"
            cy="365"
            rx="135"
            ry="5.5"
            fill="url(#beamFlareStreak)"
            transform="rotate(-52.7 935 365)"
          />
        </svg>

        {/* Top-Left: Brand Identity (mono-logo-white + PRIYAM PORTFOLIO) */}
        <div
          style={{
            position: "absolute",
            top: "76px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {LOGO_DATA_URL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={LOGO_DATA_URL}
              width={42}
              height={42}
              alt="Logo"
              style={{
                objectFit: "contain",
                display: "flex",
              }}
            />
          ) : (
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
              <path
                d="M18 3.5L33.5 30.5H23.5L18 20.5L12.5 30.5H2.5L18 3.5Z"
                fill="#ffffff"
              />
            </svg>
          )}

          {/* Brand Logotype + Portfolio Tag */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <span
              style={{
                fontSize: "28px",
                fontWeight: 900,
                letterSpacing: "5px",
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              {brandParam}
            </span>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                color: "#ff8c00",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              PRIYAM
            </span>
          </div>
        </div>

        {/* Bottom-Left: Bold Developer Portfolio Headline with Signature Orange Period & Subtitle */}
        <div
          style={{
            position: "absolute",
            bottom: "76px",
            left: "80px",
            maxWidth: "720px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-2.2px",
              color: "#ffffff",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>{line1}</span>
            {line2 ? (
              <span
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <span>{line2}</span>
                {/* Signature Orange Accent Square Dot - aligned to text baseline */}
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#ff6b00",
                    borderRadius: "2px",
                    display: "flex",
                    marginLeft: "10px",
                    marginBottom: "22px",
                  }}
                />
              </span>
            ) : (
              <span
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <span>{line1}</span>
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#ff6b00",
                    borderRadius: "2px",
                    display: "flex",
                    marginLeft: "10px",
                    marginBottom: "22px",
                  }}
                />
              </span>
            )}
          </h1>

          {/* Subtitle: Developer Portfolio Descriptor */}
          {subline ? (
            <p
              style={{
                fontSize: "20px",
                fontWeight: 500,
                color: "#a1a1aa",
                margin: "18px 0 0 0",
                lineHeight: 1.45,
                letterSpacing: "-0.2px",
                maxWidth: "600px",
                display: "flex",
              }}
            >
              {subline}
            </p>
          ) : null}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

