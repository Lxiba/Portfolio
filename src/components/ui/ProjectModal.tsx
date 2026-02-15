"use client";

import { type Project } from "@/data/projects";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  const modalContent = (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[85vh] sm:max-h-[90vh] rounded-2xl sm:rounded-3xl overflow-y-auto border border-lava-accent/30 shadow-2xl shadow-lava-glow/30 no-scrollbar"
          >
            <div className={`h-2 sm:h-3 bg-gradient-to-r ${project.color}`} />

            <div className="p-5 sm:p-8 md:p-10 bg-lava-bg-secondary">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center
                           text-lava-text-secondary hover:text-lava-text hover:bg-lava-bg-tertiary transition-all text-base sm:text-lg"
                aria-label="Close modal"
              >
                ✕
              </button>

              <h2
                className="text-xl sm:text-2xl font-bold text-lava-text mb-2 pr-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {project.title}
              </h2>

              <p className="text-xs sm:text-sm text-lava-accent font-medium mb-4 sm:mb-6">
                {project.techLine}
              </p>

              <div className="space-y-5">
                {project.demoVideo && (
                  <div>
                    <h4
                      className="text-xs font-bold text-lava-text uppercase tracking-widest mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Demo
                    </h4>
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full rounded-xl border border-lava-card-border"
                    >
                      <source src={project.demoVideo} type="video/mp4" />
                    </video>
                  </div>
                )}

                <div>
                  <h4
                    className="text-xs font-bold text-lava-text uppercase tracking-widest mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Purpose
                  </h4>
                  <p className="text-lava-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4
                    className="text-xs font-bold text-lava-text uppercase tracking-widest mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    How the Tech Was Used
                  </h4>
                  <p className="text-lava-text-secondary text-sm leading-relaxed">
                    {project.techUsage}
                  </p>
                </div>

                {/* Deploy / Live button */}
                {project.deployUrl && (
                  <div className="flex justify-end pt-2">
                    {project.deployUrl === "current" ? (
                      <span
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold
                                   text-lava-accent border border-lava-accent/40 bg-lava-accent/10"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        <span className="w-2 h-2 rounded-full bg-lava-accent animate-pulse" />
                        You are already here!
                      </span>
                    ) : (
                      <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white
                                   bg-gradient-to-r from-lava-accent to-lava-accent-secondary
                                   hover:shadow-lg hover:shadow-lava-glow transition-all duration-300 hover:scale-105"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Visit Live
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-6H21m0 0v7.5m0-7.5l-9 9" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}
