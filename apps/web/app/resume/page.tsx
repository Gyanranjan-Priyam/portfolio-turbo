import type { Metadata } from "next";
import {
  Mail,
  Linkedin,
  Github,
  Globe,
  ExternalLink,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionDivider } from "@/components/ui/section-divider";
import { ResumeToolbar } from "./resume-toolbar";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Resume — Gyanranjan Priyam",
  description:
    "Curriculum Vitae of Gyanranjan Priyam. Frontend Developer & Electrical Engineer specializing in React, Next.js, TypeScript, and modern web architectures.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume — Gyanranjan Priyam",
    description:
      "Curriculum Vitae of Gyanranjan Priyam. Frontend Developer & Electrical Engineer.",
    url: `${SITE_URL}/resume`,
    siteName: "Gyanranjan Priyam",
    locale: "en_US",
    type: "website",
  },
};

export default function ResumePage() {
  return (
    <div className="py-8 sm:py-12">
      {/* Top Action Toolbar / Page Header */}
      <ResumeToolbar />

      <SectionDivider className="mb-8 sm:mb-10 print:hidden" />

      {/* Resume Document Sheet */}
      <BlurFade delay={0.08}>
        <article className="resume-sheet relative mx-auto w-full max-w-4xl bg-card/50 border dark:bg-card/30 backdrop-blur-xs p-5 sm:p-8 md:p-12 shadow-xs text-foreground transition-all print:border-none print:shadow-none print:p-0 print:bg-transparent">
          
          {/* Header */}
          <header className="text-center mb-6 sm:mb-7 space-y-2.5">
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold font-sans tracking-tight text-foreground">
              Gyanranjan Priyam
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1.5 text-xs sm:text-[13.5px] font-mono font-medium text-muted-foreground">
              <a
                href="mailto:contact.gyanranjan@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors group"
              >
                <Mail className="size-3.5 text-foreground shrink-0 group-hover:scale-110 transition-transform" />
                <span className="underline-offset-2 hover:underline">
                  contact.gyanranjan@gmail.com
                </span>
              </a>

              <span className="text-border select-none hidden xs:inline">|</span>

              <a
                href="https://linkedin.com/in/gyanranjan-priyam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors group"
              >
                <Linkedin className="size-3.5 text-foreground shrink-0 group-hover:scale-110 transition-transform" />
                <span className="underline-offset-2 hover:underline">
                  gyanranjan-priyam
                </span>
              </a>

              <span className="text-border select-none hidden sm:inline">|</span>

              <a
                href="https://github.com/Gyanranjan-Priyam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors group"
              >
                <Github className="size-3.5 text-foreground shrink-0 group-hover:scale-110 transition-transform" />
                <span className="underline-offset-2 hover:underline">
                  Gyanranjan-Priyam
                </span>
              </a>

              <span className="text-border select-none hidden sm:inline">|</span>

              <a
                href="https://www.priyam.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors group"
              >
                <Globe className="size-3.5 text-foreground shrink-0 group-hover:scale-110 transition-transform" />
                <span className="underline-offset-2 hover:underline">
                  priyam.tech
                </span>
              </a>
            </div>
          </header>

          {/* Main Resume Content */}
          <div className="space-y-6 sm:space-y-7 font-mono text-xs sm:text-[13.5px] leading-relaxed">
            
            {/* 1. EDUCATION */}
            <section aria-labelledby="section-education">
              <div className="border-b border-foreground/80 dark:border-foreground/80 pb-0.5 mb-2.5">
                <h2
                  id="section-education"
                  className="font-sans font-bold text-sm sm:text-base tracking-wider uppercase text-foreground"
                >
                  EDUCATION
                </h2>
              </div>

              <div className="space-y-3">
                {/* College */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                    <span className="font-medium text-foreground">
                      Government College of Engineering, Kalahandi
                    </span>
                    <span className="text-muted-foreground font-medium sm:text-right shrink-0">
                      Kalahandi, Odisha
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4 text-muted-foreground">
                    <span className="italic">
                      Bachelor of Technology in Electrical Engineering – GPA: 8.3/10.0
                    </span>
                    <span className="italic sm:text-right shrink-0">
                      Sept. 2024 – Present
                    </span>
                  </div>
                </div>

                {/* School */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                    <span className="font-medium text-foreground">
                      Divine Higher Secondary School
                    </span>
                    <span className="text-muted-foreground font-medium sm:text-right shrink-0">
                      Nayagarh, Odisha
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4 text-muted-foreground">
                    <span className="italic">
                      Higher Secondary Certificate (Science) – 84.83%
                    </span>
                    <span className="italic sm:text-right shrink-0">
                      Aug. 2021 – July 2023
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. TECHNICAL SKILLS */}
            <section aria-labelledby="section-skills">
              <div className="border-b border-foreground/80 dark:border-foreground/80 pb-0.5 mb-2.5">
                <h2
                  id="section-skills"
                  className="font-sans font-bold text-sm sm:text-base tracking-wider uppercase text-foreground"
                >
                  TECHNICAL SKILLS
                </h2>
              </div>

              <div className="space-y-1 font-medium text-foreground/85">
                <p>
                  <span className="font-bold text-foreground">Languages:</span>{" "}
                  JavaScript (ES6+), TypeScript, Python, Dart, SQL
                </p>
                <p>
                  <span className="font-bold text-foreground">
                    Frameworks & Libraries:
                  </span>{" "}
                  Next.js, React, React Native, Express.js, Node.js, Flutter,
                  Tailwind CSS, Vite
                </p>
                <p>
                  <span className="font-bold text-foreground">
                    Databases & Cloud:
                  </span>{" "}
                  PostgreSQL, MongoDB, Supabase, AWS (EC2, S3, Lambda), Prisma
                  ORM
                </p>
                <p>
                  <span className="font-bold text-foreground">
                    Tools & Technologies:
                  </span>{" "}
                  Git, Linux, Docker, REST APIs, WebSocket, BetterAuth, Stripe,
                  Razorpay, CI/CD
                </p>
              </div>
            </section>

            {/* 3. PROJECTS */}
            <section aria-labelledby="section-projects">
              <div className="border-b border-foreground/80 dark:border-foreground/80 pb-0.5 mb-2.5">
                <h2
                  id="section-projects"
                  className="font-sans font-bold text-sm sm:text-base tracking-wider uppercase text-foreground"
                >
                  PROJECTS
                </h2>
              </div>

              <div className="space-y-4">
                {/* Project 1 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                      <span className="font-bold text-foreground">
                        TechFest Platform
                      </span>
                      <span className="text-muted-foreground/60">|</span>
                      <span className="italic text-muted-foreground">
                        Next.js, TypeScript, AWS, Prisma, PostgreSQL
                      </span>
                      <span className="text-muted-foreground/60">|</span>
                      <a
                        href="https://registration-insprano.vercel.app/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 hover:underline text-foreground inline-flex items-center font-medium gap-0.5"
                      >
                        <span>Demo</span>
                        <ExternalLink className="size-2.5 opacity-70" />
                      </a>
                      <span className="text-muted-foreground/60">|</span>
                      <a
                        href="https://github.com/Gyanranjan-Priyam/insprano-dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 hover:underline text-foreground font-medium inline-flex items-center gap-1"
                      >
                        <Github className="size-3" />
                        <span>Code</span>
                      </a>
                    </div>
                    <span className="text-muted-foreground sm:text-right font-medium shrink-0">
                      2024
                    </span>
                  </div>

                  <ul className="list-disc font-medium pl-4 sm:pl-5 space-y-0.5 text-foreground/80 marker:text-foreground/60">
                    <li>
                      Engineered scalable event management system processing
                      5,000+ registrations with real-time payment integration
                    </li>
                    <li>
                      Optimized database queries reducing response time by 60%
                      and implemented secure authentication workflows
                    </li>
                    <li>
                      Deployed on AWS with auto-scaling capabilities, handling
                      peak traffic of 10,000+ concurrent users
                    </li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                      <span className="font-bold text-foreground">
                        SAMS School LMS
                      </span>
                      <span className="text-muted-foreground/60">|</span>
                      <span className="italic text-muted-foreground">
                        Next.js, TypeScript, Prisma, Stripe API
                      </span>
                      <span className="text-muted-foreground/60">|</span>
                      <a
                        href="https://lms-gyanranjan.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 hover:underline font-medium text-foreground inline-flex items-center gap-0.5"
                      >
                        <span>Demo</span>
                        <ExternalLink className="size-2.5 opacity-70" />
                      </a>
                      <span className="text-muted-foreground/60">|</span>
                      <a
                        href="https://github.com/Gyanranjan-Priyam/lms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 hover:underline font-medium text-foreground inline-flex items-center gap-1"
                      >
                        <Github className="size-3" />
                        <span>Code</span>
                      </a>
                    </div>
                    <span className="text-muted-foreground font-medium sm:text-right shrink-0">
                      2024
                    </span>
                  </div>

                  <ul className="list-disc font-medium pl-4 sm:pl-5 space-y-0.5 text-foreground/80 marker:text-foreground/60">
                    <li>
                      Built full-stack learning management system with course
                      creation, student analytics, and role-based access control
                    </li>
                    <li>
                      Integrated Stripe payment gateway with secure checkout
                      flows, processing $50K+ in test transactions
                    </li>
                    <li>
                      Implemented server-side rendering and caching strategies,
                      achieving 95+ Lighthouse performance scores
                    </li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                      <span className="font-bold text-foreground">
                        College Management System
                      </span>
                      <span className="text-muted-foreground/60">|</span>
                      <span className="italic text-muted-foreground">
                        React, Node.js, MongoDB, TypeScript
                      </span>
                      <span className="text-muted-foreground/60">|</span>
                      <a
                        href="https://cms-gyanranjanpriyam.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 font-medium hover:underline text-foreground inline-flex items-center gap-0.5"
                      >
                        <span>Demo</span>
                        <ExternalLink className="size-2.5 opacity-70" />
                      </a>
                      <span className="text-muted-foreground/60">|</span>
                      <a
                        href="https://github.com/Gyanranjan-Priyam/cms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 font-medium hover:underline text-foreground inline-flex items-center gap-1"
                      >
                        <Github className="size-3" />
                        <span>Code</span>
                      </a>
                    </div>
                    <span className="text-muted-foreground font-medium sm:text-right shrink-0">
                      2024
                    </span>
                  </div>

                  <ul className="list-disc font-medium pl-4 sm:pl-5 space-y-0.5 text-foreground/80 marker:text-foreground/60">
                    <li>
                      Designed enterprise-grade system automating admissions,
                      academics, and certifications for 2,000+ students
                    </li>
                    <li>
                      Reduced administrative processing time by 70% through
                      workflow automation and data validation pipelines
                    </li>
                    <li>
                      Implemented comprehensive logging and monitoring system
                      ensuring data integrity across all modules
                    </li>
                  </ul>
                </div>

                {/* Project 4 */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                      <span className="font-bold text-foreground">
                        Inventory AI Management System
                      </span>
                      <span className="text-muted-foreground/60">|</span>
                      <span className="italic text-muted-foreground">
                        React, Node.js, MongoDB, Razorpay, AI Analytics
                      </span>
                      <span className="text-muted-foreground/60">|</span>
                      <a
                        href="https://ims-gyanranjanpriyam.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 hover:underline text-foreground font-medium inline-flex items-center gap-0.5"
                      >
                        <span>Demo</span>
                        <ExternalLink className="size-2.5 opacity-70" />
                      </a>
                      <span className="text-muted-foreground/60">|</span>
                      <a
                        href="https://github.com/Gyanranjan-Priyam/ims"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 hover:underline text-foreground font-medium inline-flex items-center gap-1"
                      >
                        <Github className="size-3" />
                        <span>Code</span>
                      </a>
                    </div>
                    <span className="text-muted-foreground font-medium sm:text-right shrink-0">
                      2024
                    </span>
                  </div>

                  <ul className="list-disc font-medium pl-4 sm:pl-5 space-y-0.5 text-foreground/80 marker:text-foreground/60">
                    <li>
                      Created intelligent inventory system with predictive
                      analytics reducing stock-outs by 45% across multi-store
                      setups
                    </li>
                    <li>
                      Built RESTful APIs with 99.5% uptime handling 1M+ daily
                      transactions with sub-200ms response times
                    </li>
                  </ul>
                </div>

              </div>
            </section>

            {/* 4. EXPERIENCE */}
            <section aria-labelledby="section-experience">
              <div className="border-b border-foreground/80 dark:border-foreground/80 pb-0.5 mb-2.5">
                <h2
                  id="section-experience"
                  className="font-sans font-bold text-sm sm:text-base tracking-wider uppercase text-foreground"
                >
                  EXPERIENCE
                </h2>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                    <span className="font-bold text-foreground">
                      Event Coordinator
                    </span>
                    <span className="text-muted-foreground font-medium sm:text-right shrink-0">
                      Oct. 2025 – Present
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4 text-muted-foreground">
                    <span className="italic">
                      CodeBreakers – GCE Kalahandi Technical Community
                    </span>
                    <span className="italic sm:text-right shrink-0">
                      Kalahandi, Odisha
                    </span>
                  </div>
                </div>

                <ul className="list-disc font-medium pl-4 sm:pl-5 space-y-0.5 text-foreground/80 marker:text-foreground/60">
                  <li>
                    Coordinating technical events, coding competitions, and
                    workshops for 500+ student developers
                  </li>
                  <li>
                    Mentoring junior developers on full-stack development,
                    competitive programming, and best coding practices
                  </li>
                  <li>
                    Led development of community website (
                    <a
                      href="https://www.codebreakersgcek.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-foreground"
                    >
                      codebreakersgcek.tech
                    </a>
                    ) using Next.js and AWS
                  </li>
                </ul>
              </div>
            </section>

            {/* 5. ACHIEVEMENTS & LEADERSHIP */}
            <section aria-labelledby="section-achievements">
              <div className="border-b border-foreground/80 dark:border-foreground/80 pb-0.5 mb-2.5">
                <h2
                  id="section-achievements"
                  className="font-sans font-bold text-sm sm:text-base tracking-wider uppercase text-foreground"
                >
                  ACHIEVEMENTS & LEADERSHIP
                </h2>
              </div>

              <ul className="list-disc font-medium pl-4 sm:pl-5 space-y-1.5 text-foreground/80 marker:text-foreground/60">
                <li>
                  Won multiple college-level coding competitions and hackathons,
                  securing top positions in algorithmic challenges
                </li>
                <li>
                  Achieved top ranks on competitive programming platforms
                  (CodeChef, LeetCode) demonstrating strong DSA proficiency
                </li>
                <li>
                  Active contributor to CodeBreakers coding club, organizing
                  internal contests and promoting software development culture
                </li>
                <li>
                  Mentored 20+ junior students in web development, system
                  design, and competitive programming fundamentals
                </li>
              </ul>
            </section>
          </div>
        </article>
      </BlurFade>

      {/* Print Stylesheet for flawless paper printing / PDF saving */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              body {
                background: #ffffff !important;
                color: #000000 !important;
              }
              header, footer, nav, #layout > header, #layout > footer, .print\\:hidden {
                display: none !important;
              }
              #layout, #layout > div {
                border: none !important;
                max-width: 100% !important;
                padding: 0 !important;
                margin: 0 !important;
              }
              .resume-sheet {
                border: none !important;
                box-shadow: none !important;
                padding: 0 !important;
                background: transparent !important;
                color: #000000 !important;
                max-width: 100% !important;
              }
              .resume-sheet * {
                color: #000000 !important;
                border-color: #000000 !important;
              }
              @page {
                size: A4;
                margin: 1.5cm 1.5cm 1.5cm 1.5cm;
              }
            }
          `,
        }}
      />
    </div>
  );
}

