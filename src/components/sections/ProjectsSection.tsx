"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { projects, type Project } from "@/data/projects";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectModal } from "@/components/ui/ProjectModal";
import Image from "next/image";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStart = useRef(0);
  const hasDragged = useRef(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const keepPlaying = () => { v.play(); };
    v.addEventListener("pause", keepPlaying);
    return () => v.removeEventListener("pause", keepPlaying);
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    dragStartX.current = e.pageX;
    scrollStart.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const dx = e.pageX - dragStartX.current;
    if (Math.abs(dx) > 5) hasDragged.current = true;
    trackRef.current.scrollLeft = scrollStart.current - dx;
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }, []);

  const handleCardClick = useCallback((project: Project) => {
    if (!hasDragged.current) setSelectedProject(project);
  }, []);

  const displayProjects = [...projects, ...projects];

  return (
    <section id="projects" className="relative z-10 py-28 overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/assets/lava-lake.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#0A0000] to-transparent z-[1] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0A0000] to-transparent z-[1] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[100vw]">
        <div className="px-6 sm:px-8">
          <ScrollReveal>
            <SectionHeading title="Projects"/>
          </ScrollReveal>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-20 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-20 bg-gradient-to-l from-black/70 to-transparent" />

          <div
            ref={trackRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className="overflow-x-auto no-scrollbar cursor-grab select-none"
          >
            <div className="animate-carousel flex gap-6 w-max px-12 sm:px-20 py-6">
              {displayProjects.map((project, i) => (
                <div
                  key={`${project.id}-${i}`}
                  onClick={() => handleCardClick(project)}
                  className="shrink-0 w-[240px] sm:w-[320px] group cursor-pointer"
                >
                  <div className="rounded-2xl overflow-hidden border border-lava-card-border
                                  hover:border-lava-accent/50 transition-all duration-300
                                  hover:shadow-xl hover:shadow-lava-glow/40
                                  group-hover:scale-[1.04] group-hover:-translate-y-2">
                    <div className={`h-40 sm:h-44 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-300" />
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={160}
                          height={160}
                          className="relative z-10 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300 max-h-[130px] sm:max-h-[148px] w-auto"
                        />
                      ) : (
                        <span className="relative text-5xl font-black text-white/20 select-none" style={{ fontFamily: "var(--font-heading)" }}>
                          {project.title.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div className="p-5 bg-lava-bg-secondary/95 backdrop-blur-sm">
                      <h3
                        className="text-base font-bold text-lava-text mb-1.5 group-hover:text-lava-accent transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs text-lava-text-secondary/70 line-clamp-1">
                        {project.techLine}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
