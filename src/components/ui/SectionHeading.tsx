"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-14 text-center", className)}>
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-lava-text mb-4 tracking-wide"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-lava-accent via-lava-orange to-lava-gold opacity-80" />
      {subtitle && (
        <p className="mt-5 text-lava-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
