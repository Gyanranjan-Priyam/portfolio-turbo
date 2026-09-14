<div align="center">

# Gyanranjan Priyam — Monorepo (Portfolio & Blog)

A high-performance monorepo powered by **Turborepo**, featuring a **Next.js 16** portfolio and a standalone **Astro v7** technical blog engine.

🔗 **[priyam.tech](https://www.priyam.tech)** — Main Portfolio  
🔗 **[blogs.priyam.tech](https://blogs.priyam.tech)** — Engineering Blog

</div>

---

## 🏗️ Architecture

```
portfolio-turbo/
├── apps/
│   ├── web/           # Next.js 16 Portfolio & Projects Showcase
│   └── blog/          # Astro v7 Content Collections Markdown/MDX Blog
├── package.json       # Turborepo Workspace Config
├── turbo.json         # Turbo pipeline configuration
└── bun.lock           # Bun lockfile
```

---

## 🚀 Tech Stack

### `apps/web` (Portfolio)
- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI & Styling**: React 19, Tailwind CSS 4, Radix UI, Framer Motion, GSAP, Lenis
- **Features**: Interactive Showcase, Dynamic OG Images, Offline PWA, Structured Schema.org JSON-LD

### `apps/blog` (Technical Blog)
- **Framework**: Astro v7 (Static Site Generation / SSG)
- **Content**: MDX, Content Collections, Shiki syntax highlighting
- **Features**: Offline PWA & Byte Runner game, RSS feed, sitemap index, auto-redirects from `/blogs`

---

## 🛠️ Getting Started

### Prerequisites
- [Bun](https://bun.sh/) 1.0+ (recommended) or [Node.js](https://nodejs.org/) 20+

### Installation

```bash
# Clone the repository
git clone https://github.com/Gyanranjan-Priyam/portfolio-turbo.git
cd portfolio-turbo

# Install dependencies across all workspaces
bun install
```

### Local Development

```bash
# Run both web & blog apps concurrently with Turborepo
bun run dev

# Run only web (http://localhost:3000)
bun run dev:web

# Run only blog (http://localhost:4321)
bun run dev:blog
```

### Production Build

```bash
# Build all workspaces
bun run build
```

---

## 🌐 Vercel Deployment Guide

This Turborepo is optimized for deployment on [Vercel](https://vercel.com):

### 1. Deploying Portfolio (`apps/web`)
- Create a new project on Vercel from this Git repository.
- Set **Root Directory**: `apps/web`
- Framework Preset: **Next.js**
- Build Command: `next build` (or leave default)

### 2. Deploying Blog (`apps/blog`)
- Create a second project on Vercel from this same Git repository.
- Set **Root Directory**: `apps/blog`
- Framework Preset: **Astro**
- Build Command: `astro build` (or leave default)
- Custom Domain: `blogs.priyam.tech` (or your domain of choice)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

<div align="center">
  Built with ❤️ by <a href="https://www.priyam.tech">Gyanranjan Priyam</a>
</div>
