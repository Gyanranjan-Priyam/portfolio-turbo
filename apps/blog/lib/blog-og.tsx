import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export interface BlogOgProps {
  title: string;
  subtitle?: string;
  category?: string;
  readingTime?: string;
  date?: string;
  tags?: string[];
  topRightLines?: string[];
  bottomLeftLines?: string[];
}

let cachedBgDataUri: string | null = null;
function getBgDataUri(): string {
  if (cachedBgDataUri) return cachedBgDataUri;

  const candidates = [
    path.join(process.cwd(), "apps/blog/public/og-bg.png"),
    path.join(process.cwd(), "public/og-bg.png"),
  ];

  for (const p of candidates) {
    if (fs.existsSync(p)) {
      try {
        const buf = fs.readFileSync(p);
        cachedBgDataUri = `data:image/png;base64,${buf.toString("base64")}`;
        return cachedBgDataUri;
      } catch {
        // Continue to next candidate
      }
    }
  }

  return "";
}

let cachedBrandLogoDataUri: string | null = null;
function getBrandLogoDataUri(): string {
  if (cachedBrandLogoDataUri) return cachedBrandLogoDataUri;

  const candidates = [
    path.join(process.cwd(), "apps/blog/public/brand-logo.png"),
    path.join(process.cwd(), "public/brand-logo.png"),
    path.join(process.cwd(), "apps/web/public/brand-logo.png"),
  ];

  for (const p of candidates) {
    if (fs.existsSync(p)) {
      try {
        const buf = fs.readFileSync(p);
        cachedBrandLogoDataUri = `data:image/png;base64,${buf.toString("base64")}`;
        return cachedBrandLogoDataUri;
      } catch {
        // Continue
      }
    }
  }

  return "";
}

let cachedCabinetBold: Buffer | null = null;
let cachedSatoshiMedium: Buffer | null = null;
let cachedGeistMonoRegular: Buffer | null = null;
let cachedGeistMonoSemiBold: Buffer | null = null;

function loadFonts() {
  const fontSearchPaths = [
    path.join(process.cwd(), "apps/blog/public/fonts"),
    path.join(process.cwd(), "public/fonts"),
    path.join(process.cwd(), "apps/web/public/fonts"),
  ];

  function findFont(filename: string): Buffer | null {
    for (const dir of fontSearchPaths) {
      const p = path.join(dir, filename);
      if (fs.existsSync(p)) {
        try {
          return fs.readFileSync(p);
        } catch {
          // ignore
        }
      }
    }
    return null;
  }

  if (!cachedCabinetBold) {
    cachedCabinetBold = findFont("CabinetGrotesk_Bold.ttf");
  }
  if (!cachedSatoshiMedium) {
    cachedSatoshiMedium = findFont("Satoshi-Medium.ttf");
  }
  if (!cachedGeistMonoRegular) {
    cachedGeistMonoRegular = findFont("GeistMono-Regular.ttf");
  }
  if (!cachedGeistMonoSemiBold) {
    cachedGeistMonoSemiBold = findFont("GeistMono-SemiBold.ttf");
  }

  return {
    cabinetBold: cachedCabinetBold,
    satoshiMedium: cachedSatoshiMedium,
    geistMonoRegular: cachedGeistMonoRegular,
    geistMonoSemiBold: cachedGeistMonoSemiBold,
  };
}

export function renderBlogOgImage({
  title,
  subtitle,
  category,
  readingTime,
  tags = ["React 19", "Next.js 16", "TypeScript", "Architecture"],
  topRightLines = [
    "// BLOG · ARCHITECTURE",
    "→ FRONTEND & PERFORMANCE",
    "→ NEXT.JS 16 · REACT 19 · TS",
    "→ CASE STUDIES & DESIGN SYSTEMS",
    "// NEVER STOPS LEARNING",
  ],
  bottomLeftLines = [
    "// PUBLICATION · BLOG",
    "→ AUTHOR: GYANRANJAN PRIYAM",
    "→ ROLE: FRONTEND DEVELOPER",
    "→ DOMAIN: BLOGS.PRIYAM.TECH",
    "// ALWAYS BUILDING",
  ],
}: BlogOgProps) {
  const bgDataUri = getBgDataUri();
  const brandLogoDataUri = getBrandLogoDataUri();
  const { cabinetBold, satoshiMedium, geistMonoRegular, geistMonoSemiBold } =
    loadFonts();

  const fontConfigs = [];
  if (cabinetBold) {
    fontConfigs.push({
      name: "Cabinet Grotesk",
      data: cabinetBold,
      weight: 700 as const,
      style: "normal" as const,
    });
  }
  if (satoshiMedium) {
    fontConfigs.push({
      name: "Satoshi",
      data: satoshiMedium,
      weight: 500 as const,
      style: "normal" as const,
    });
  }
  if (geistMonoRegular) {
    fontConfigs.push({
      name: "Geist Mono",
      data: geistMonoRegular,
      weight: 400 as const,
      style: "normal" as const,
    });
  }
  if (geistMonoSemiBold) {
    fontConfigs.push({
      name: "Geist Mono",
      data: geistMonoSemiBold,
      weight: 600 as const,
      style: "normal" as const,
    });
  }

  // Calculate dynamic font sizes to guarantee title never overflows
  const titleLen = title.length;
  const titleFontSize =
    titleLen > 60
      ? "34px"
      : titleLen > 45
        ? "40px"
        : titleLen > 30
          ? "48px"
          : titleLen > 18
            ? "54px"
            : "60px";

  const subtitleFontSize = titleLen > 45 ? "16px" : "18px";

  const badgeText = category
    ? `${category.toUpperCase()}${readingTime ? ` · ${readingTime.toUpperCase()}` : ""}`
    : "THE PRIYAM'S BLOG · ENGINEERING ESSAYS";

  return new ImageResponse(
    (
      <div
        style={{
          height: "630px",
          width: "1200px",
          display: "flex",
          position: "relative",
          backgroundColor: "#22211e",
          overflow: "hidden",
          fontFamily: '"Geist Mono", monospace',
        }}
      >
        {/* Retro-tech Track Border Background (cleaned, no center text) */}
        {bgDataUri ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bgDataUri}
            alt="Retro-tech background"
            width="1200"
            height="630"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "1200px",
              height: "630px",
            }}
          />
        ) : null}

        {/* CENTER HERO BLUEPRINT CARD */}
        <div
          style={{
            position: "absolute",
            top: "105px",
            left: "110px",
            width: "980px",
            height: "420px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "rgba(22, 21, 18, 0.92)",
            borderRadius: "14px",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            padding: "26px 36px",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7)",
          }}
        >
          {/* Top-Left Plus */}
          <div
            style={{
              position: "absolute",
              top: "-6px",
              left: "-6px",
              display: "flex",
              width: "12px",
              height: "12px",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 11 11" fill="none">
              <path
                d="M5.5 0V11M0 5.5H11"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          {/* Top-Right Plus */}
          <div
            style={{
              position: "absolute",
              top: "-6px",
              right: "-6px",
              display: "flex",
              width: "12px",
              height: "12px",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 11 11" fill="none">
              <path
                d="M5.5 0V11M0 5.5H11"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          {/* Bottom-Left Plus */}
          <div
            style={{
              position: "absolute",
              bottom: "-6px",
              left: "-6px",
              display: "flex",
              width: "12px",
              height: "12px",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 11 11" fill="none">
              <path
                d="M5.5 0V11M0 5.5H11"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          {/* Bottom-Right Plus */}
          <div
            style={{
              position: "absolute",
              bottom: "-6px",
              right: "-6px",
              display: "flex",
              width: "12px",
              height: "12px",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 11 11" fill="none">
              <path
                d="M5.5 0V11M0 5.5H11"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* CARD HEADER: Blueprint Spec Row (No pill shape) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: '"Geist Mono", monospace',
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "rgba(226, 232, 240, 0.75)",
                textTransform: "uppercase",
              }}
            >
              <span>{topRightLines[0] || "// BLOG · SPECIFICATION"}</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontFamily: '"Geist Mono", monospace',
                fontSize: "11px",
                letterSpacing: "0.06em",
                color: "#38bdf8",
                textTransform: "uppercase",
              }}
            >
              <span>{topRightLines[1] || "→ FRONTEND & PERFORMANCE"}</span>
            </div>
          </div>

          {/* CARD BODY: Logo, Title & Subtitle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 20px",
            }}
          >
            {/* Logo above the title */}
            {brandLogoDataUri ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={brandLogoDataUri}
                alt="Brand Logo"
                width="64"
                height="64"
                style={{
                  width: "64px",
                  height: "64px",
                  marginBottom: "16px",
                }}
              />
            ) : null}

            <h1
              style={{
                fontFamily: '"Cabinet Grotesk", sans-serif',
                fontSize: titleFontSize,
                fontWeight: 800,
                color: "#ffffff",
                textAlign: "center",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                margin: 0,
                marginBottom: "12px",
                maxWidth: "880px",
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                style={{
                  fontFamily: '"Satoshi", sans-serif',
                  fontSize: subtitleFontSize,
                  fontWeight: 500,
                  color: "#cbd5e1",
                  textAlign: "center",
                  lineHeight: 1.4,
                  margin: 0,
                  maxWidth: "800px",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* CARD FOOTER: Author on Left, Tags on Right */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              paddingTop: "14px",
            }}
          >
            {/* Author Dossier */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: '"Geist Mono", monospace',
                fontSize: "11px",
                letterSpacing: "0.06em",
                color: "rgba(226, 232, 240, 0.75)",
                textTransform: "uppercase",
              }}
            >
              <span style={{ color: "rgba(255, 255, 255, 0.9)", fontWeight: 600 }}>
                GYANRANJAN PRIYAM
              </span>
              <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>·</span>
              <span>FRONTEND ARCHITECT</span>
            </div>

            {/* Tags on Right */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: '"Geist Mono", monospace',
                    fontSize: "10px",
                    fontWeight: 600,
                    padding: "3px 8px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    color: "#f1f5f9",
                    letterSpacing: "0.02em",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Technical Blueprint Status in bottom-left clear zone */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            left: "60px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontFamily: '"Geist Mono", monospace',
            fontSize: "10px",
            letterSpacing: "0.08em",
            color: "rgba(226, 232, 240, 0.55)",
            textTransform: "uppercase",
          }}
        >
          <span>// PUBLICATION SPEC: PRODUCTION DEPLOY</span>
          <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>·</span>
          <span>HTTP 200 OK</span>
          <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>·</span>
          <span>LATENCY &lt; 20MS</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: fontConfigs,
    }
  );
}
