import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BlurFade } from "@/components/ui/blur-fade";

export function AboutSection() {
  return (
    <section id="about" className="py-8">
      <BlurFade delay={0.04} inView>
        <h2 className="mb-4 text-3xl font-bold font-sans">
          About
        </h2>
      </BlurFade>
      <BlurFade delay={0.08} inView>
        <p className="text-[15px] leading-relaxed text-muted-foreground font-mono">
          I&apos;m an electrical engineering student with a passion for
          technology and web development. Alongside my core studies I am also a
          software developer focused on building seamless, efficient, and
          user-centric digital experiences across both front-end and back-end
          technologies.
        </p>
      </BlurFade>

      <BlurFade delay={0.12} inView>
        <h2 className="mt-4 mb-2 text-2xl font-semibold font-sans">
          Hobbies &amp; Interests
        </h2>
      </BlurFade>
      <BlurFade delay={0.16} inView>
        <TooltipProvider delayDuration={150}>
          <div className="text-[15px] leading-relaxed text-muted-foreground font-mono">
            My hobbies include{" "}
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="font-semibold text-foreground underline decoration-dotted decoration-muted-foreground/50 underline-offset-4 cursor-pointer hover:text-foreground/80 transition-colors">
                  reading books
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs text-xs">
                I enjoy reading a wide range of books that help me expand my imagination, improve my thinking, and gain new perspectives.
              </TooltipContent>
            </Tooltip>{" "}
            ,{" "}
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="font-semibold text-foreground underline decoration-dotted decoration-muted-foreground/50 underline-offset-4 cursor-pointer hover:text-foreground/80 transition-colors">
                  web development
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs text-xs">
                I love building websites, learning new web technologies, and improving my skills through hands-on projects.
              </TooltipContent>
            </Tooltip>
            , and{" "}
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="font-semibold text-foreground underline decoration-dotted decoration-muted-foreground/50 underline-offset-4 cursor-pointer hover:text-foreground/80 transition-colors">
                  open source contributions
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs text-xs">
                I actively contribute to open source projects, collaborating with other developers to improve software and share knowledge. Currently I have 10+ contributions on Google Gemini CLI project.
              </TooltipContent>
            </Tooltip>
            . I also have a strong interest in{" "}
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="font-semibold text-foreground underline decoration-dotted decoration-muted-foreground/50 underline-offset-4 cursor-pointer hover:text-foreground/80 transition-colors">
                  researching
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs text-xs">
                I am passionate about exploring new topics, learning about emerging fields, and conducting research to expand my understanding.
              </TooltipContent>
            </Tooltip>
            , aiming to delve deeper into various subjects.
          </div>
        </TooltipProvider>
      </BlurFade>
    </section>
  );
}
