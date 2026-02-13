"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

const overviewPoints = [
  "I'm a Software Engineering student who enjoys building things that actually work and scale.",
  "Have experience working across full-stack development, systems programming, DevOps, and cloud tools.",
  "I’m detail-oriented, adaptable, and comfortable picking up new tools and technologies quickly.",
  "I like building meaningful projects and having a mini victory every time my code runs on the first try.",
];

export function OverviewSection() {
  return (
    <section id="overview" className="relative z-10 py-28 bg-lava-bg">
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#120303] pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading title="Introduction" />
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">
          <ScrollReveal direction="left" className="flex flex-col items-center shrink-0">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden fire-shadow bg-lava-bg-tertiary border-2 border-lava-accent/30 flex items-center justify-center">
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
                href="https://www.linkedin.com/in/laiba-asif-842584204/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-white
                           border border-blue-500 hover:border-blue-400
                           hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105
                           bg-blue-600"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Lxiba"
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

          <ScrollReveal direction="right" className="flex-1 max-w-2xl">
            <ul className="space-y-8">
              {overviewPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-5">
                  <Image
                    src="/assets/meteor.png"
                    alt=""
                    width={30}
                    height={30}
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
