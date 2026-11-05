import { SITE_URL } from "@/lib/config";

export const revalidate = 3600;

export async function GET() {
  const content = `# Engineering & Web Development Services — Gyanranjan Priyam

> Professional web development, frontend architecture, and SaaS product engineering services by Gyanranjan Priyam. High-performance, scalable digital products built with Next.js, React, and TypeScript.

- Canonical URL: ${SITE_URL}/services
- Contact Email: hello@priyam.tech / contact.gyanranjan@gmail.com
- Location: India (Serving clients worldwide)
- Schedule a Consultation: ${SITE_URL}/services

---

## Service Tiers

### 1. Website Development
- **Pricing**: Starting at ₹12,000 / $299
- **Timeline**: 4–7 business days
- **Deliverables**:
  - Responsive, mobile-first design across all device breakpoints
  - Technical SEO, metadata architecture & Core Web Vitals optimization
  - Production deployment, custom domain setup & 30 days warranty support
- **Booking**: https://cal.com/gyanranjanpriyam/web-dev

### 2. Frontend Engineering
- **Pricing**: Starting at ₹20,000 / $499
- **Timeline**: 2–3 weeks
- **Deliverables**:
  - Pixel-perfect UI implementation from Figma / design systems
  - Performance and accessibility (WCAG) focused component architecture
  - Reusable, type-safe component libraries with Tailwind CSS, shadcn/ui, Radix UI
  - State management (TanStack Query, Zustand) and smooth animations (Framer Motion, GSAP)
- **Booking**: https://cal.com/gyanranjanpriyam/frontend-engineering

### 3. SaaS Development
- **Pricing**: Starting at ₹50,000 / $1,499
- **Timeline**: 3–5 weeks
- **Deliverables**:
  - End-to-end MVP to production-ready scalable web application
  - Authentication, session management, roles & permissions (RBAC)
  - Database schema design & migrations (PostgreSQL, Supabase, Prisma ORM)
  - Subscription billing & payment gateway integration (Stripe, Razorpay)
  - Admin management dashboard, transactional notifications & monitoring
- **Booking**: https://cal.com/gyanranjanpriyam/saas-design

### 4. Custom Idea & Design (Bespoke Product Architecture)
- **Pricing**: Custom quote based on scope
- **Deliverables**:
  - Custom UI/UX design, technical specification & system architecture
  - Multi-tenant architectures, AI workflows (Gemini, Claude, OpenAI), background workers
  - Flexible milestone sprints, code reviews & dedicated warranty support
- **Booking**: https://cal.com/gyanranjanpriyam/meet

---

## Add-on Services
- **API Integration**: From ₹5,000 / $129 (Third-party REST/GraphQL APIs, webhooks, microservices)
- **Payment Gateway Integration**: From ₹8,000 / $199 (Stripe, Razorpay, global checkout & subscriptions)
- **Authentication & RBAC**: From ₹5,000 / $129 (OAuth, magic links, session management, multi-role access)
- **Admin Dashboard**: From ₹15,000 / $399 (Custom analytics, data tables, metrics, audit logs)
- **Maintenance & Support**: From ₹2,999 / $79 / mo (Bug fixes, security updates, dependency upgrades, backups)

---

## Process (How It Works)
1. **Share your idea**: Discovery call to discuss goals, scope, and technical requirements.
2. **Plan and estimate**: Milestone roadmap, timeline, and fixed transparent quote.
3. **Build and iterate**: Continuous deployment, sprint demos, and collaborative feedback.
4. **Deliver and support**: Production launch, code handoff, and post-launch warranty support.

---

## Technology Stack
- **Languages**: TypeScript, JavaScript, Python
- **Frontend**: Next.js, React, Tailwind CSS, shadcn/ui, Radix UI, Base UI, Framer Motion, GSAP, Expo, TanStack
- **Backend & Database**: Node.js, Bun, Supabase, PostgreSQL, MongoDB, Redis, Prisma ORM, Nginx
- **DevOps & Cloud**: Docker, Vercel, Git, GitHub Actions
- **AI Integrations**: Claude (Anthropic), Gemini (Google), ChatGPT (OpenAI)
- **Payments**: Stripe, Razorpay
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

