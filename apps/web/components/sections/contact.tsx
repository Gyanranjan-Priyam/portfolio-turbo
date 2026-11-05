import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import Meet from "./Cal";

export function ContactSection() {
  return (
    <section id="contact" className="py-8">
      <BlurFade delay={0.04} inView>
        <h2 className="mb-4 text-3xl font-bold font-sans">
          Contact
        </h2>
      </BlurFade>
      <BlurFade delay={0.08} inView>
        <div className="space-y-3 font-mono font-medium text-sm leading-relaxed text-muted-foreground">
          <p>
            I&apos;m always open to discussing new opportunities, freelance
            projects, architectural consultations, or just exchanging thoughts about
            modern software engineering and emerging technologies.
          </p>
          <p>
            Feel free to reach out directly at{" "}
            <a
              href="mailto:hello@priyam.tech"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              hello@priyam.tech
            </a>{" "}
            or connect with me on{" "}
            <Link
              href="https://linkedin.com/in/gyanranjan-priyam"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              LinkedIn
            </Link>
            ,{" "}
            <Link
              href="https://x.com/gr_priyam"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              Twitter
            </Link>
            , or{" "}
            <Link
              href="https://github.com/gyanranjan-priyam"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            . Whether you have an idea to build, a challenge to solve, or want to schedule a quick 1-on-1 meet, I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </BlurFade>
      <BlurFade delay={0.12} inView>
        <div className="mt-5 flex justify-end">
          <Meet />
        </div>
      </BlurFade>
    </section>
  );
}
