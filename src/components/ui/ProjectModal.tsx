"use client";

import { type Project } from "@/data/projects";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
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

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl overflow-hidden border border-lava-accent/30 shadow-2xl shadow-lava-glow/30"
          >
            <div className={`h-3 bg-gradient-to-r ${project.color}`} />

            <div className="p-8 sm:p-10 bg-lava-bg-secondary">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center
                           text-lava-text-secondary hover:text-lava-text hover:bg-lava-bg-tertiary transition-all text-lg"
                aria-label="Close modal"
              >
                ✕
              </button>

              <h2
                className="text-2xl font-bold text-lava-text mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {project.title}
              </h2>

              <p className="text-sm text-lava-accent font-medium mb-6">
                {project.techLine}
              </p>

              <div className="space-y-5">
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
