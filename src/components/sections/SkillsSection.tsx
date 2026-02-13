"use client";

import { skillCategories } from "@/data/skills";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-28 bg-lava-bg">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading title="Inventory" />
        </ScrollReveal>

        <div className="space-y-20">
          {skillCategories.map((category, ci) => {
            const isLeft = ci % 2 === 0;
            return (
              <ScrollReveal key={category.id} delay={ci * 0.1}>
                <div className={`flex flex-col ${isLeft ? "items-start" : "items-end"}`}>
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-8 tracking-wide ${
                      isLeft ? "text-left" : "text-right"
                    }`}
                    style={{
                      fontFamily: "var(--font-heading)",
                      background: "linear-gradient(135deg, #FF8C00, #FF4500, #CC3700)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {category.title}
                  </h3>

                  <div className={`flex flex-wrap gap-3 sm:gap-5 ${isLeft ? "justify-start" : "justify-end"}`}>
                    {category.skills.map((skill, si) => (
                      <ScrollReveal key={skill.name} delay={si * 0.04} direction="none">
                        <div
                          className="skill-icon-wrapper flex flex-col items-center gap-2 cursor-default"
                          style={{ animationDelay: `${si * 0.5}s` }}
                        >
                          <div className="fire-circle-border">
                            <i
                              className={`${skill.icon} text-4xl`}
                              style={{ color: skill.icon.includes("colored") ? undefined : "#FFF0E0" }}
                            />
                          </div>
                          <span className="skill-label text-xs font-medium text-lava-text-secondary whitespace-nowrap">
                            {skill.name}
                          </span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
