import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export interface ReferenceOgProps {
  title: string;
  subtitle?: string;
  topRightLines?: string[];
  bottomLeftLines?: string[];
}

let cachedLogoDataUri: string | null = null;
function getLogoDataUri(): string {
  if (!cachedLogoDataUri) {
    try {
      const logoPath = path.join(process.cwd(), "public/mono-logo-black.png");
      const buffer = fs.readFileSync(logoPath);
      cachedLogoDataUri = `data:image/png;base64,${buffer.toString("base64")}`;
    } catch {
      cachedLogoDataUri = "";
    }
  }
  return cachedLogoDataUri;
}

let cachedGeistMonoRegular: Buffer | null = null;
let cachedGeistMonoSemiBold: Buffer | null = null;
function getGeistMonoFonts() {
  if (!cachedGeistMonoRegular) {
    try {
      cachedGeistMonoRegular = fs.readFileSync(
        path.join(process.cwd(), "public/fonts/GeistMono-Regular.ttf")
      );
      cachedGeistMonoSemiBold = fs.readFileSync(
        path.join(process.cwd(), "public/fonts/GeistMono-SemiBold.ttf")
      );
    } catch (e) {
      console.error("Failed to load Geist Mono font", e);
    }
  }
  return {
    regular: cachedGeistMonoRegular,
    semiBold: cachedGeistMonoSemiBold,
  };
}

function createOctagonPoints(cx: number, cy: number, r: number): string {
  const points: string[] = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4 - Math.PI / 8;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return points.join(" ");
}

export function renderReferenceOgImage({
  title,
  subtitle,
  topRightLines = [
    "// SPEC · LIVE RUN",
    "→ PROPOSED 240 ACTIONS",
    "→ APPROVED 218 · REJECTED 22",
    "→ EVERY YES = 1 TRAINING SIGNAL",
    "→ MODEL UPDATED 218×",
    "// LEARNING · NEVER FORGETS",
  ],
  bottomLeftLines = [
    "// AGENT · MEMORY",
    "→ READ 5 YRS OF ARCHITECTURE",
    "→ PRODUCTION FULL CONTEXT",
    "→ 0 KNOWLEDGE LOST",
    "→ AUTHOR: GYANRANJAN PRIYAM",
    "// DOESN'T QUIT",
  ],
}: ReferenceOgProps) {
  let line1 = title;
  let line2 = subtitle || "";

  if (!subtitle && title.length > 22 && title.includes(" ")) {
    const words = title.split(" ");
    const mid = Math.ceil(words.length / 2);
    line1 = words.slice(0, mid).join(" ");
    line2 = words.slice(mid).join(" ");
  }

  const totalLen = (line1 + line2).length;
  const titleFontSize = totalLen > 42 ? 52 : totalLen > 26 ? 60 : 68;

  const logoDataUri = getLogoDataUri();
  const { regular, semiBold } = getGeistMonoFonts();

  const fontConfigs = [];
  if (regular) {
    fontConfigs.push({
      name: "Geist Mono",
      data: regular,
      weight: 400 as const,
      style: "normal" as const,
    });
  }
  if (semiBold) {
    fontConfigs.push({
      name: "Geist Mono",
      data: semiBold,
      weight: 600 as const,
      style: "normal" as const,
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "630px",
          width: "1200px",
          display: "flex",
          position: "relative",
          backgroundColor: "#dbe0e3",
          overflow: "hidden",
          fontFamily: '"Geist Mono", monospace',
        }}
      >
        {/* Background Atmosphere */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1200px",
            height: "630px",
            background:
              "linear-gradient(135deg, #d3d8db 0%, #e6e9eb 42%, #dee3e6 100%)",
          }}
        />

        {/* Ambient warm amber glow on left */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            left: "-50px",
            width: "740px",
            height: "620px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(254, 240, 138, 0.42) 0%, rgba(251, 191, 36, 0.16) 42%, transparent 72%)",
          }}
        />

        {/* Ambient cool cyan/lavender glow on right */}
        <div
          style={{
            position: "absolute",
            bottom: "-90px",
            right: "-50px",
            width: "800px",
            height: "660px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(165, 243, 252, 0.55) 0%, rgba(199, 210, 254, 0.35) 46%, transparent 72%)",
          }}
        />

        {/* SVG Canvas for geometric wireframe */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          fill="none"
          style={{ position: "absolute", top: 0, left: 0, width: "1200px", height: "630px" }}
        >
          {/* Radial vertex rays radiating from center (600, 315) */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const angle = (i * Math.PI) / 4 - Math.PI / 8;
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const x1 = 600 + 130 * cos;
            const y1 = 315 + 130 * sin;
            const x2 = 600 + 640 * cos;
            const y2 = 315 + 640 * sin;
            return (
              <line
                key={`ray-${i}`}
                x1={x1.toFixed(1)}
                y1={y1.toFixed(1)}
                x2={x2.toFixed(1)}
                y2={y2.toFixed(1)}
                stroke="rgba(255,255,255,0.34)"
                strokeWidth="0.8"
              />
            );
          })}

          {/* Concentric Wireframe Octagons Centered at (600, 315) */}
          <polygon
            points={createOctagonPoints(600, 315, 130)}
            stroke="rgba(255,255,255,0.72)"
            strokeWidth="1.2"
            fill="none"
          />
          <polygon
            points={createOctagonPoints(600, 315, 235)}
            stroke="rgba(255,255,255,0.62)"
            strokeWidth="1.2"
            fill="none"
          />
          <polygon
            points={createOctagonPoints(600, 315, 355)}
            stroke="rgba(255,255,255,0.48)"
            strokeWidth="1.1"
            fill="none"
          />
          <polygon
            points={createOctagonPoints(600, 315, 495)}
            stroke="rgba(255,255,255,0.36)"
            strokeWidth="1"
            fill="none"
          />
          <polygon
            points={createOctagonPoints(600, 315, 650)}
            stroke="rgba(255,255,255,0.24)"
            strokeWidth="1"
            fill="none"
          />

          {/* Center Vertical Axis Line with gap for emblem */}
          <line
            x1="600"
            y1="30"
            x2="600"
            y2="175"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.8"
          />
          <line
            x1="600"
            y1="455"
            x2="600"
            y2="600"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.8"
          />
        </svg>

        {/* Top Right Geist Mono Dossier */}
        <div
          style={{
            position: "absolute",
            top: "44px",
            right: "52px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "5px",
            fontFamily: '"Geist Mono", monospace',
            fontSize: "11px",
            letterSpacing: "0.06em",
            color: "rgba(30, 41, 59, 0.52)",
            textTransform: "uppercase",
            zIndex: 10,
          }}
        >
          {topRightLines.map((line, i) => (
            <span
              key={i}
              style={{
                color:
                  line.startsWith("//")
                    ? "rgba(30, 41, 59, 0.72)"
                    : "rgba(45, 55, 72, 0.52)",
              }}
            >
              {line}
            </span>
          ))}
        </div>

        {/* Bottom Left Geist Mono Dossier */}
        <div
          style={{
            position: "absolute",
            bottom: "44px",
            left: "52px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "5px",
            fontFamily: '"Geist Mono", monospace',
            fontSize: "11px",
            letterSpacing: "0.06em",
            color: "rgba(30, 41, 59, 0.52)",
            textTransform: "uppercase",
            zIndex: 10,
          }}
        >
          {bottomLeftLines.map((line, i) => (
            <span
              key={i}
              style={{
                color:
                  line.startsWith("//")
                    ? "rgba(30, 41, 59, 0.72)"
                    : "rgba(45, 55, 72, 0.52)",
              }}
            >
              {line}
            </span>
          ))}
        </div>

        {/* Center Layout: Logo + Headings in Geist Mono */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1200px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 100px",
            zIndex: 20,
          }}
        >
          {/* Top Center Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            {logoDataUri ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logoDataUri}
                alt="Logo"
                width="64"
                height="64"
                style={{
                  width: "64px",
                  height: "64px",
                }}
              />
            ) : null}
          </div>

          {/* Centered Heading in Geist Mono */}
          <h1
            style={{
              fontSize: `${titleFontSize}px`,
              fontWeight: 600,
              lineHeight: 1.15,
              color: "#0c0e12",
              margin: 0,
              textAlign: "center",
              letterSpacing: "-0.03em",
              maxWidth: "1050px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: '"Geist Mono", monospace',
            }}
          >
            <span>{line1}</span>
            {line2 && (
              <span
                style={{
                  fontSize: `${Math.round(titleFontSize * 0.84)}px`,
                  fontWeight: 400,
                  color: "#282d37",
                  marginTop: "10px",
                  fontFamily: '"Geist Mono", monospace',
                }}
              >
                {line2}
              </span>
            )}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: fontConfigs.length > 0 ? fontConfigs : undefined,
    }
  );
}
