"use client";

import { skillCategories } from "@/data/skills";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-28 bg-lava-bg">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading title="Skills" />
        </ScrollReveal>

        <div className="space-y-20">
          {skillCategories.map((category, ci) => (
            <ScrollReveal key={category.id} delay={ci * 0.1}>
              <h3
                className="text-lg sm:text-xl font-semibold text-lava-text mb-8 text-center tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
                {category.skills.map((skill, si) => (
                  <ScrollReveal key={skill.name} delay={si * 0.04} direction="none">
                    <div
                      className="skill-bubble flex items-center gap-2.5 px-5 py-2.5 cursor-default"
                      style={{ animationDelay: `${si * 0.5}s` }}
                    >
                      <i
                        className={`${skill.icon} text-xl`}
                        style={{ color: skill.icon.includes("colored") ? undefined : "#FFF0E0" }}
                      />
                      <span className="text-sm font-medium text-lava-text whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
