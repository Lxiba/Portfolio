"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

const overviewPoints = [
  "Passionate full-stack Software Engineer with a love for building scalable, user-centric applications",
  "Experienced in both frontend and backend technologies, from React to Node.js to cloud infrastructure",
  "Keen interest in system design, distributed systems, and writing clean, maintainable code",
  "Always exploring new technologies — currently diving deeper into WebGL, AI/ML, and DevOps automation",
  "Strong believer in continuous learning, collaboration, and shipping code that makes a real impact",
];

export function OverviewSection() {
  return (
    <section id="overview" className="relative z-10 py-28 bg-lava-bg">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading title="About Me" />
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">
          {/* Left: Profile image + buttons */}
          <ScrollReveal direction="left" className="flex flex-col items-center shrink-0">
            <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-2xl overflow-hidden fire-shadow bg-lava-bg-tertiary border-2 border-lava-accent/30 flex items-center justify-center">
              <div className="text-6xl text-lava-accent/40 select-none">👤</div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-white
                           bg-gradient-to-r from-lava-accent to-lava-accent-secondary
                           hover:shadow-lg hover:shadow-lava-glow transition-all duration-300 hover:scale-105"
              >
                Resume
              </a>
              <a
                href="https://linkedin.com/in/laiba"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-lava-text
                           border border-lava-accent/40 hover:border-lava-accent
                           hover:shadow-lg hover:shadow-lava-glow transition-all duration-300 hover:scale-105
                           bg-lava-bg-secondary/50"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/laiba"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-lava-text
                           border border-lava-accent/40 hover:border-lava-accent
                           hover:shadow-lg hover:shadow-lava-glow transition-all duration-300 hover:scale-105
                           bg-lava-bg-secondary/50"
              >
                GitHub
              </a>
            </div>
          </ScrollReveal>

          {/* Right: Overview points with meteor bullets */}
          <ScrollReveal direction="right" className="flex-1 max-w-2xl">
            <ul className="space-y-6">
              {overviewPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Image
                    src="/assets/meteor.png"
                    alt=""
                    width={28}
                    height={28}
                    className="shrink-0 mt-1 animate-float"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                  <p className="text-lava-text-secondary text-base leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
