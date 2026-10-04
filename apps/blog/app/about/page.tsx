import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getAllPosts } from '@/lib/posts';
import { AUTHOR_PORTFOLIO, SITE_URL } from '@/lib/consts';

export const metadata: Metadata = {
  title: 'About — Gyanranjan Priyam',
  description:
    'Learn more about Gyanranjan Priyam - fullstack software engineer, architect, and tech writer.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  const posts = getAllPosts();
  return (
    <main id="layout" className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <div className="border-x border-border mx-auto max-w-3xl px-4 sm:px-6 bg-background flex-1 w-full flex flex-col">
        <div className="flex-1 w-full flex flex-col py-6 sm:py-8">
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground no-underline transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span>Back to all articles</span>
            </Link>
          </div>

          <div className="rounded-lg bg-card border border-border overflow-hidden">
            <div className="w-full h-56 sm:h-64 overflow-hidden bg-muted relative border-b border-border">
              <Image
                src="/blog-placeholder-about.jpg"
                alt="Gyanranjan Priyam"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="p-5 sm:p-7">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 font-mono text-[11px] font-medium rounded-md bg-muted text-muted-foreground border border-border">
                Author & Engineer
              </div>

              <h1 className="font-sans text-2xl sm:text-3xl font-bold my-3 tracking-tight text-foreground">
                Hi, I&apos;m Gyanranjan Priyam
              </h1>

              <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                A fullstack software engineer focused on building high-performance web systems, intuitive interfaces, and scalable distributed architectures.
              </p>

              <div className="prose w-full">
                <h2>About This Blog</h2>
                <p>
                  This space is dedicated to technical deep dives, architectural case studies, performance benchmarks, and real-world software engineering practices. I write about:
                </p>
                <ul>
                  <li><strong>Fullstack Frameworks</strong>: Next.js, React Server Components, Astro, TypeScript.</li>
                  <li><strong>Monorepo Systems</strong>: Turborepo, Bun workspaces, shared design systems.</li>
                  <li><strong>Motion & UI Engineering</strong>: Tailwind CSS, accessible components, micro-interactions.</li>
                  <li><strong>Databases & APIs</strong>: PostgreSQL, Prisma ORM, GraphQL, REST architecture.</li>
                </ul>

                <h2>Get in Touch</h2>
                <p>
                  Feel free to explore my full project portfolio or reach out for collaborations and technical discussions:
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8 pt-6 border-t border-border">
                <a
                  href={AUTHOR_PORTFOLIO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium text-xs no-underline transition-opacity hover:opacity-90 cursor-pointer"
                >
                  <span>Visit Main Portfolio</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
                <a
                  href="https://github.com/gyanranjan-priyam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-muted text-foreground font-medium text-xs border border-border hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors no-underline cursor-pointer"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer
        latestWriting={posts.slice(0, 2).map((p) => ({
          title: p.title,
          href: `/${p.slug}`,
        }))}
      />
    </main>
  );
}
