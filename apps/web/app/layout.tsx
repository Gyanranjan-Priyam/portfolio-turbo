import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif, Caveat } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeSync } from "@/components/theme-sync";
import { LoaderWrapper } from "@/components/loader-wrapper";
import "./globals.css";
import "@/components/loader-component/styles/globals.scss";
import { Footer } from "@/components/sections/footer";
import { Separator } from "@/components/ui/separator";
import ClickSpark from "@/components/ClickSpark";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button";
import { Toaster } from "@/components/ui/sonner";
import { NavigationDock } from "@/components/sections/NavigationDock";
import { SITE_URL } from "@/lib/config";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { NavMain } from "@/components/navbar/nav-main";

const OG_IMAGE = `${SITE_URL}/opengraph-image`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gyanranjan Priyam — Full Stack Developer Portfolio",
    template: "%s — Gyanranjan Priyam",
  },
  description:
    "Full Stack Developer working at the intersection of web development, app development, and AI/ML to build scalable digital products people actually use.",
  keywords: [
    "Gyanranjan Priyam",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Software Engineer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "GSAP Animation",
    "Web Applications",
    "Responsive Design",
    "AI/ML",
    "Next.js",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Gyanranjan Priyam", url: SITE_URL }],
  creator: "Gyanranjan Priyam",
  publisher: "Gyanranjan Priyam",
  formatDetection: { telephone: false },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Gyanranjan Priyam",
    title: "Gyanranjan Priyam — Full Stack Developer Portfolio",
    description:
      "Full Stack Developer working at the intersection of web development, app development, and AI/ML to build scalable digital products people actually use.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Gyanranjan Priyam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gyanranjan Priyam — Full Stack Developer Portfolio",
    description:
      "Full Stack Developer working at the intersection of web development, app development, and AI/ML to build scalable digital products people actually use.",
    creator: "@gr_priyam",
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#333333" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#f0f4f1",
    "geo.region": "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gyanranjan Priyam",
    url: SITE_URL,
    jobTitle: "Full Stack Developer & AI Engineer",
    image: `${SITE_URL}/logo.png`,
    sameAs: [
      "https://github.com/gyanranjan-priyam",
      "https://linkedin.com/in/gyanranjan-priyam",
      "https://x.com/gr_priyam",
      "https://instagram.com/gyanranjanpriyam",
    ],
    knowsAbout: [
      "Full Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "Node.js",
      "Artificial Intelligence",
      "Machine Learning Integration",
      "Web Performance Optimization",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Government College of Engineering, Kalahandi",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gyanranjan Priyam — Portfolio",
    url: SITE_URL,
    description:
      "Full Stack Developer working at the intersection of web development, app development, and AI/ML.",
    author: {
      "@type": "Person",
      name: "Gyanranjan Priyam",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f0f4f1" />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="HFM9ucf4ebY4chd5hRuhqA"
          strategy="lazyOnload"
        />
        <Script
          id="theme-loader-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}else if(t==='light'){document.documentElement.classList.remove('dark');}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}if(window.location.pathname==='/'&&!sessionStorage.getItem('loader-intro-shown')){document.documentElement.classList.add('loader-active');}})();`,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `html.loader-active main{opacity:0!important;pointer-events:none}`,
          }}
        />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLMs.txt"
        />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms-full.txt"
          title="Full LLM Context"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
          suppressHydrationWarning
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSerif.variable} ${caveat.variable} font-sans antialiased`}
      >
        <ThemeSync />
        <ScrollIndicator />
        <ScrollToTopButton />
        <NavigationDock />
        <SmoothScroll>
          <LoaderWrapper />
          <ClickSpark>
            <main
              id="layout"
              className="min-h-screen bg-background text-foreground flex flex-col"
            >
              <NavMain />

              <div className="border-x border-border mx-auto max-w-3xl px-4 sm:px-6 bg-background flex-1 w-full flex flex-col">
                <div className="flex-1">{children}</div>
                <Toaster />
              </div>

              <Footer />
            </main>
          </ClickSpark>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
