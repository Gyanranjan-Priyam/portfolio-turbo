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
        <h2 className="mb-6 mt-8 text-3xl font-bold font-sans">
          Certifications
        </h2>
      </BlurFade>
      <div className="space-y-4">
        {certifications.map((cert, i) => (
          <BlurFade key={i} delay={0.04 + i * 0.05} inView>
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium font-mono">
                  {cert.name}
                </p>
                <p className="text-sm text-muted-foreground font-mono">
                  {cert.issuer}
                </p>
              </div>
              <span className="shrink-0 text-sm text-muted-foreground font-mono">
                {cert.year}
              </span>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
