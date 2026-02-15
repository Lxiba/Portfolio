"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

const educationData = [
  {
    id: "university",
    title: "Ontario Tech University",
    degree: "Bachelor of Engineering",
    years: "2022 — Present",
    details: [
      "4th-year Software Engineering and Management student",
    ],
    logo: "/assets/uoit logo.png",
  },
  {
    id: "highschool",
    title: "Sir Wilfrid Laurier C.I.",
    degree: "High School Diploma",
    years: "2018 — 2022",
    details: [
      "Graduated with Grade A",
    ],
    logo: "/assets/SWLCI HS.png",
  },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="relative z-10 py-28"
      style={{ background: "linear-gradient(180deg, #120303 0%, rgba(26,5,5,0.5) 20%, rgba(26,5,5,0.5) 80%, #0A0000 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-6">

        <ScrollReveal>
          <SectionHeading title="Education" />
        </ScrollReveal>

        <div className="relative mt-20">

          {/* CENTER TIMELINE */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-lava-accent to-transparent" />

          {/* MOBILE LINE */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-[2px] bg-lava-accent/40" />

          <div className="space-y-24">

            {educationData.map((edu, index) => {

              const isLeft = index % 2 === 0;

              return (
                <ScrollReveal key={edu.id} delay={index * 0.2}>

                  {/* DESKTOP */}
                  <div className="hidden md:flex items-center relative">

                    {/* LEFT SIDE */}
                    <div className="w-1/2 pr-10 flex justify-end">
                      {isLeft && (
                        <div className="w-[420px]">
                          <TimelineItem edu={edu} side="left" />
                        </div>
                      )}
                    </div>

                    {/* CENTER LOGO */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border-2 border-lava-accent bg-lava-bg overflow-hidden shadow-lg hover:scale-110 transition duration-300">
                        <Image
                          src={edu.logo}
                          alt={edu.title}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full p-1"
                        />
                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-1/2 pl-10 flex justify-start">
                      {!isLeft && (
                        <div className="w-[420px]">
                          <TimelineItem edu={edu} side="right" />
                        </div>
                      )}
                    </div>

                  </div>

                  {/* MOBILE */}
                  <div className="md:hidden flex gap-4 min-w-0">

                    <div className="relative z-10 w-10 h-10 shrink-0 rounded-full border-2 border-lava-accent bg-lava-bg overflow-hidden">
                      <Image
                        src={edu.logo}
                        alt={edu.title}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full p-1"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <TimelineItem edu={edu} side="right" mobile />
                    </div>

                  </div>

                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ edu, side, mobile = false }: any) {

  const isLeft = side === "left";

  return (
    <div className="relative group">

      {/* DATE OUTSIDE BOX */}
      {!mobile && (
        <div
          className={`
          absolute top-15 text-sm text-lava-text-secondary opacity-80
          ${isLeft ? "right-[-230px] text-left" : "left-[-215px] text-right"}
          group-hover:text-lava-accent transition duration-300
        `}
        >
          {edu.years}
        </div>
      )}

      {/* CARD */}
      <div
        className={`
        relative ${mobile ? 'w-full' : 'w-[420px]'}
        rounded-2xl overflow-hidden
        border border-lava-accent/30
        transition-all duration-500
        group-hover:border-lava-accent
        group-hover:shadow-[0_0_25px_rgba(140,0,0,0.6)]
        group-hover:scale-[1.03]
      `}
        style={{
          backgroundImage: "url('/assets/box-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* overlay */}
        <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition duration-500" />

        {/* content */}
        <div className={`relative z-10 ${mobile ? 'p-4' : 'p-6'}`}>

          <h3 className={`${mobile ? 'text-base' : 'text-lg'} font-bold text-lava-text mb-1`}>
            {edu.title}
          </h3>

          <p className={`text-lava-accent-secondary font-semibold ${mobile ? 'text-xs' : 'text-sm'} mb-3`}>
            {edu.degree}
          </p>

          <ul className="space-y-2">
            {edu.details.map((detail: string, i: number) => (
              <li
                key={i}
                className={`flex items-start gap-3 ${mobile ? 'text-xs' : 'text-sm'} text-lava-text-secondary`}
              >
                <span className="mt-[6px] w-2 h-2 shrink-0 rounded-full bg-[#800000]" />
                {detail}
              </li>
            ))}
          </ul>

          {/* MOBILE DATE */}
          {mobile && (
            <div className="mt-3 text-xs text-lava-text-secondary opacity-70">
              {edu.years}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
