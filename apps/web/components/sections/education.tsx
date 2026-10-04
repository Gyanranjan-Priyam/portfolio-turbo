import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { education, certifications } from "@/data/educationData";
import { BlurFade } from "@/components/ui/blur-fade";

export function EducationSection() {
  return (
    <section id="education" className="py-8">
      <BlurFade delay={0.04} inView>
        <h2 className="mb-6 text-3xl font-bold font-sans">
          Education
        </h2>
      </BlurFade>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <BlurFade key={i} delay={0.04 + i * 0.05} inView>
            <div className="flex items-center gap-4">
              <Avatar className="size-14 border bg-white p-1.5">
                <AvatarImage
                  src={edu.logo}
                  alt={edu.school}
                  className="object-contain"
                />
                <AvatarFallback className="text-xs font-bold font-mono">
                  {edu.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold leading-tight font-mono">
                  {edu.school}
                </p>
                <p className="text-sm text-muted-foreground font-mono">
                  {edu.degree}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  {edu.marks}
                </p>
              </div>
              <span className="shrink-0 text-sm text-muted-foreground text-right font-mono">
                {edu.period}
              </span>
            </div>
          </BlurFade>
        ))}
      </div>
      <div className="stripe-divider mt-8 -mx-4 sm:-mx-6 h-7 sm:h-8 border-y border-border" />

      <BlurFade delay={0.04} inView>
        <h2 className="mb-4 mt-8 text-3xl font-bold tracking-tight text-foreground font-sans">
          Certifications
        </h2>
      </BlurFade>

      <BlurFade delay={0.08} inView>
        <div className="-mx-4 sm:-mx-6 border-t border-border/70">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              className="grid grid-cols-[48px_1fr_auto] sm:grid-cols-[56px_1fr_auto] md:grid-cols-[64px_1fr_90px] border-b border-border/70"
            >
              {/* Column 1: SL No */}
              <div className="px-2 sm:px-4 py-3 sm:py-3.5 border-r border-border/70 flex items-center justify-center font-mono text-xs sm:text-sm select-none text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Column 2: Certificate Details (Title & Organization) */}
              <div className="px-3 sm:px-5 py-3 sm:py-3.5 flex flex-col justify-center min-w-0 md:border-r md:border-border/70">
                <p className="text-xs sm:text-sm font-medium font-mono text-foreground leading-snug">
                  {cert.name}
                </p>
                <span className="text-xs text-muted-foreground font-mono mt-0.5">
                  {cert.issuer}
                </span>
              </div>

              {/* Column 3: Year */}
              <div className="px-3 sm:px-5 py-3 sm:py-3.5 flex items-center justify-end font-mono text-xs sm:text-sm text-muted-foreground select-none shrink-0">
                {cert.year}
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
