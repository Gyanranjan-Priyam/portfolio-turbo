import type { Metadata, Viewport } from "next";
import { Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SoundEffects } from "@/components/ui/sound";

const geistSans = localFont({
  src: [
    {
      path: "../public/fonts/CabinetGrotesk_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CabinetGrotesk_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/CabinetGrotesk_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/CabinetGrotesk_Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi_Variable.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi_Italic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});
import { BLOG_PAGE_KEYWORDS } from "@/lib/seo";
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  AUTHOR_NAME,
  AUTHOR_TWITTER,
  GLOBAL_SEO_KEYWORDS,
} from "@/lib/consts";

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | Priyam's Blog`,
  },
  description: SITE_DESCRIPTION,
  keywords: Array.from(new Set([...BLOG_PAGE_KEYWORDS, ...GLOBAL_SEO_KEYWORDS])),
  authors: [{ name: AUTHOR_NAME, url: "https://www.priyam.tech" }],
  creator: AUTHOR_NAME,
  publisher: "Priyam's Blog",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
      { url: "/favicon.ico" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": `${SITE_URL}/rss.xml`,
      "text/plain": `${SITE_URL}/llms.txt`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Priyam's Blog",
    images: [
      {
        url: `${SITE_URL}/android-chrome-512x512.png`,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: AUTHOR_TWITTER,
    creator: AUTHOR_TWITTER,
    images: [`${SITE_URL}/android-chrome-512x512.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Priyam's Blog",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "Priyam's Blog",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: "https://www.priyam.tech",
      sameAs: [
        "https://x.com/gr_priyam",
        "https://github.com/gyanranjan-priyam",
        "https://linkedin.com/in/gyanranjan-priyam",
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <head>
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
          title="LLMs Full Context"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
        <ThemeProvider>
          <SoundEffects>
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </SoundEffects>
        </ThemeProvider>
      </body>
    </html>
  );
}
