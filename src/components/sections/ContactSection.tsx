"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative z-10 py-28 bg-lava-bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading title="Connect With Me" />
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start justify-center">
          {/* Left: Contact form */}
          <ScrollReveal direction="left" className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-lava-text mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-lava-bg border border-lava-card-border
                             text-lava-text placeholder:text-lava-text-secondary/30
                             focus:border-lava-accent focus:ring-1 focus:ring-lava-accent
                             outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-lava-text mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-lava-bg border border-lava-card-border
                             text-lava-text placeholder:text-lava-text-secondary/30
                             focus:border-lava-accent focus:ring-1 focus:ring-lava-accent
                             outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-lava-text mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-lava-bg border border-lava-card-border
                             text-lava-text placeholder:text-lava-text-secondary/30
                             focus:border-lava-accent focus:ring-1 focus:ring-lava-accent
                             outline-none transition-all resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-white text-sm tracking-wide
                           bg-gradient-to-r from-lava-accent to-lava-accent-secondary
                           hover:shadow-lg hover:shadow-lava-glow transition-all duration-300
                           hover:scale-[1.02] active:scale-[0.98]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {sent ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </ScrollReveal>

          {/* Right: Info */}
          <ScrollReveal direction="right" className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <div className="text-center space-y-8">
              <p className="text-lava-text-secondary text-base leading-relaxed max-w-sm mx-auto">
                Whether you have a project idea, a question, or just want to say hello — I&apos;d love to hear from you.
              </p>

              <div className="flex flex-col gap-5 items-center">
                <a
                  href="mailto:laiba@example.com"
                  className="flex items-center gap-3 text-lava-text hover:text-lava-accent transition-colors group"
                >
                  <span className="w-11 h-11 rounded-full bg-lava-accent/10 border border-lava-accent/30
                                   flex items-center justify-center group-hover:bg-lava-accent/20 transition-colors text-base">
                    @
                  </span>
                  <span className="text-sm">laiba@example.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/laiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lava-text hover:text-lava-accent transition-colors group"
                >
                  <span className="w-11 h-11 rounded-full bg-lava-accent/10 border border-lava-accent/30
                                   flex items-center justify-center group-hover:bg-lava-accent/20 transition-colors text-xs font-bold">
                    in
                  </span>
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/laiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lava-text hover:text-lava-accent transition-colors group"
                >
                  <span className="w-11 h-11 rounded-full bg-lava-accent/10 border border-lava-accent/30
                                   flex items-center justify-center group-hover:bg-lava-accent/20 transition-colors text-xs font-bold">
                    GH
                  </span>
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
