"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/laiba.asif2222@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Contact from ${form.name}`,
        }),
      });

      if (res.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-28 overflow-hidden">
      {/* Flame dance video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/assets/Flame dance.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Top gradient fade — blends from Projects section */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#0A0000] to-transparent z-[1] pointer-events-none" />
      {/* Bottom gradient fade — blends into Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0A0000] to-transparent z-[1] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading title="Connect With Me" />
        </ScrollReveal>

        <div className="flex justify-center">
          <ScrollReveal direction="left" className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-lava-text mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Your Name 👤
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-lava-bg/80 border border-lava-card-border
                             text-lava-text placeholder:text-lava-text-secondary/30
                             focus:border-lava-accent focus:ring-1 focus:ring-lava-accent
                             outline-none transition-all"
                  style={{ fontFamily: "var(--font-body)" }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-lava-text mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Email Address 📧
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-lava-bg/80 border border-lava-card-border
                             text-lava-text placeholder:text-lava-text-secondary/30
                             focus:border-lava-accent focus:ring-1 focus:ring-lava-accent
                             outline-none transition-all"
                  style={{ fontFamily: "var(--font-body)" }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-lava-text mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Message 💬
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-lava-bg/80 border border-lava-card-border
                             text-lava-text placeholder:text-lava-text-secondary/30
                             focus:border-lava-accent focus:ring-1 focus:ring-lava-accent
                             outline-none transition-all resize-none"
                  style={{ fontFamily: "var(--font-body)" }}
                  placeholder="I enjoyed your portfolio! Let's connect."
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3.5 rounded-xl font-semibold text-white text-sm tracking-wide
                           bg-gradient-to-r from-lava-accent to-lava-accent-secondary
                           hover:shadow-lg hover:shadow-lava-glow transition-all duration-300
                           hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {sending ? "Sending..." : sent ? "Message Sent! \u2728" : "Send Message \uD83D\uDD25"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
