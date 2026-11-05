# Tech Stack Logos Directory (`/tech-logo`)

This directory contains SVG brand logos used by the **Tech Stack** section on the Services page (`/services`).

All logos are referenced by `TechStackGrid` in `apps/web/components/services/tech-stack-grid.tsx` via `/tech-logo/[slug].svg`.

---

## Complete Asset Inventory (30 Technologies)

### 1. Frontend
| Technology | File Name | Role / Subtitle Tag | Category |
| :--- | :--- | :--- | :--- |
| **Next.js** | `nextjs.svg` | Fullstack Framework | Frontend |
| **React** | `react.svg` | UI Architecture | Frontend |
| **Tailwind CSS** | `tailwindcss.svg` | Utility Design System | Frontend |
| **shadcn/ui** | `shadcn.svg` | Design Primitives | Frontend |
| **Radix UI** | `radix.svg` | Accessible Components | Frontend |
| **Base UI** | `baseui.svg` | Unstyled Primitives | Frontend |
| **Motion** | `motion.svg` | Interactions & Physics | Frontend |
| **GSAP** | `gsap.svg` | Timeline Animation | Frontend |
| **Expo** | `expo.svg` | Cross-Platform Mobile | Frontend |
| **TanStack** | `tanstack.svg` | Query & Table State | Frontend |

### 2. Backend & Database
| Technology | File Name | Role / Subtitle Tag | Category |
| :--- | :--- | :--- | :--- |
| **Node.js** | `nodejs.svg` | Backend Runtime | Backend |
| **Bun** | `bun.svg` | Fast Toolkit & Runtime | Backend |
| **Supabase** | `supabase.svg` | Postgres BaaS & Auth | Backend |
| **PostgreSQL** | `postgresql.svg` | Relational Database | Backend |
| **MongoDB** | `mongodb.svg` | Document Database | Backend |
| **Redis** | `redis.svg` | In-Memory Cache & Queue | Backend |
| **Prisma** | `prisma.svg` | Type-Safe ORM | Backend |
| **Nginx** | `nginx.svg` | Reverse Proxy & Edge | Backend |

### 3. Languages
| Technology | File Name | Role / Subtitle Tag | Category |
| :--- | :--- | :--- | :--- |
| **TypeScript** | `typescript.svg` | Typed Systems | Language |
| **JavaScript** | `javascript.svg` | Core Web Language | Language |
| **Python** | `python.svg` | Scripting & AI | Language |

### 4. DevOps & Cloud
| Technology | File Name | Role / Subtitle Tag | Category |
| :--- | :--- | :--- | :--- |
| **Docker** | `docker.svg` | Containerization | DevOps |
| **Vercel** | `vercel.svg` | Edge & Cloud Platform | DevOps |
| **Git** | `git.svg` | Version Control | DevOps |
| **GitHub** | `github.svg` | CI/CD & Actions | DevOps |

### 5. AI & Workflows
| Technology | File Name | Role / Subtitle Tag | Category |
| :--- | :--- | :--- | :--- |
| **Claude** | `claude.svg` | Anthropic Workflows | AI |
| **Gemini** | `gemini.svg` | Google Multimodal AI | AI |
| **ChatGPT** | `chatgpt.svg` | OpenAI Models & API | AI |

### 6. Payments & Billing
| Technology | File Name | Role / Subtitle Tag | Category |
| :--- | :--- | :--- | :--- |
| **Stripe** | `stripe.svg` | Cards & Billing | Payments |
| **Razorpay** | `razorpay.svg` | UPI & Netbanking | Payments |

---

## Customization Instructions
1. **Replace an icon**: To change any logo (for example to a multi-color SVG or high-resolution PNG), simply replace the corresponding file in `apps/web/public/tech-logo/` with the same name.
2. **Add a new tech**:
   - Add your SVG file to `apps/web/public/tech-logo/<slug>.svg`
   - Add an entry in `apps/web/components/services/tech-stack-grid.tsx` under `ALL_TECH_STACKS`.
3. **Automatic Fallback**: If an image file fails to load or is missing, `TechBoxLogo` will automatically fall back to rendering the vector icon from `TechIcon`.
