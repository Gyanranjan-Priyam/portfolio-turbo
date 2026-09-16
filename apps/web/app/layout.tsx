import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  IBM_Plex_Serif,
  Caveat,
} from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeSync } from "@/components/theme-sync";
import { LoaderWrapper } from "@/components/loader-wrapper";
import "./globals.css";
import "@/components/loader-component/styles/globals.scss";
import { Footer } from "@/components/sections/footer";
import { Separator } from "@/components/ui/separator";
import ClickSpark from "@/components/ClickSpark";
import { PwaRegister } from "@/components/pwa-register";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button";
import { Toaster } from "@/components/ui/sonner";
import { NavigationDock } from "@/components/sections/NavigationDock";
import { SITE_URL } from "@/lib/config";
import { Analytics } from "@vercel/analytics/next";

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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f0f4f1" />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="HFM9ucf4ebY4chd5hRuhqA"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}else if(t==='light'){document.documentElement.classList.remove('dark');}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}if(window.location.pathname==='/'&&!sessionStorage.getItem('loader-intro-shown')){document.documentElement.classList.add('loader-active');}})();`,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `html.loader-active main{opacity:0!important;pointer-events:none}`,
          }}
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSerif.variable} ${caveat.variable} font-sans antialiased`}
      >
        <ThemeSync />
        <PwaRegister />
        <ScrollIndicator />
        <ScrollToTopButton />
        <NavigationDock />
        <SmoothScroll>
          <LoaderWrapper />
          <ClickSpark>
            <main id="layout" className="min-h-screen bg-background text-foreground">
              <div className="border-dotted-side mx-auto max-w-3xl px-4 sm:px-6 bg-background min-h-screen flex flex-col">
                <div className="flex-1">
                  {children}
                </div>
                <Toaster />
                <Separator />
                <Footer />
              </div>
            </main>
          </ClickSpark>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
