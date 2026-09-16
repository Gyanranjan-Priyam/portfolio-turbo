import { skillCategories } from "@/data/skillCategories";
import { BlurFade } from "@/components/ui/blur-fade";

export function SkillsSection() {
  return (
    <section id="skills" className="py-8">
      <BlurFade delay={0.04} inView>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground font-sans">
          Stack
        </h2>
      </BlurFade>

      <BlurFade delay={0.08} inView>
        <div className="-mx-4 sm:-mx-6 border-t border-border/70">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] border-b border-border/70"
            >
              {/* Left Column: Number & Category Title */}
              <div className="px-4 sm:px-6 py-3.5 sm:py-4 md:border-r md:border-dashed md:border-border/70 flex items-center gap-3 font-mono text-xs sm:text-sm select-none">
                <span className="text-muted-foreground/60">{cat.number}</span>
                <span className="font-medium text-foreground">{cat.title}</span>
              </div>

              {/* Right Column: Pill Badges */}
              <div className="px-4 sm:px-6 py-3 sm:py-3.5 flex flex-wrap items-center gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/70 bg-card/60 hover:bg-muted hover:border-foreground/30 text-xs sm:text-[13px] font-mono text-foreground transition-all duration-150 select-none"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
