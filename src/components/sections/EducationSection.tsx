"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const educationData = [
  {
    id: "university",
    title: "University of Placeholder",
    degree: "Bachelor of Science in Computer Science",
    years: "2022 — Present",
    details: "Focusing on software engineering, data structures, algorithms, and distributed systems. Active member of the coding club and hackathon participant.",
  },
  {
    id: "highschool",
    title: "Placeholder High School",
    degree: "High School Diploma",
    years: "2018 — 2022",
    details: "Graduated with honors. Developed a strong foundation in mathematics and sciences. First introduction to programming through AP Computer Science.",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="relative z-10 py-28 bg-lava-bg-secondary/40">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading title="Education" />
        </ScrollReveal>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-7 sm:left-9 top-0 bottom-0 w-0.5 timeline-line" />

          <div className="space-y-14">
            {educationData.map((edu, i) => (
              <ScrollReveal key={edu.id} delay={i * 0.2}>
                <div className="relative flex gap-7 sm:gap-9">
                  {/* Timeline dot */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-14 h-14 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full bg-lava-bg border-[3px] border-lava-accent flex items-center justify-center fire-shadow">
                      <span className="text-2xl">🎓</span>
                    </div>
                  </div>

                  {/* Card with box texture */}
                  <div className="flex-1 rounded-2xl overflow-hidden border border-lava-accent/30 hover:border-lava-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-lava-glow/30">
                    <div className="box-texture p-7 sm:p-8 relative">
                      <div className="absolute inset-0 bg-black/50" />
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3
                            className="text-lg sm:text-xl font-bold text-lava-text"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            {edu.title}
                          </h3>
                          <span className="text-xs font-semibold text-lava-accent px-3 py-1 rounded-full bg-lava-accent/10 border border-lava-accent/30 w-fit whitespace-nowrap">
                            {edu.years}
                          </span>
                        </div>
                        <p className="text-lava-accent-secondary font-semibold text-sm mb-2">{edu.degree}</p>
                        <p className="text-lava-text-secondary text-sm leading-relaxed">{edu.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
