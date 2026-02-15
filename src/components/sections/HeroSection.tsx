"use client";

import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 0.85;
    const onCanPlay = () => setLoaded(true);
    v.addEventListener("canplaythrough", onCanPlay);
    return () => v.removeEventListener("canplaythrough", onCanPlay);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 bg-lava-bg flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-lava-accent/30 border-t-lava-accent rounded-full animate-spin" />
        </div>
      )}

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ objectPosition: "center 30%" }}
      >
        <source src="/assets/volcano-eruption.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-lava-bg sm:from-black/30 sm:via-black/20" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black lava-text mb-5 tracking-wider"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Laiba Asif
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium lava-text-glow tracking-wide"
          style={{ fontFamily: "var(--font-heading)", color: "#FFD4B0" }}
        >
          Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-sm sm:text-base text-lava-text-secondary/70 mt-4 italic tracking-widest uppercase"
        >
          Welcome! Have a look around my portfolio
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-lava-text-secondary/30 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-lava-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
