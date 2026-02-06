export function Footer() {
  return (
    <footer className="relative z-10 border-t border-lava-card-border bg-lava-bg py-10">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-sm text-lava-text-secondary" style={{ fontFamily: "var(--font-heading)" }}>
          &copy; {new Date().getFullYear()} Laiba Asif
        </p>
        <p className="text-xs text-lava-text-secondary/50">
          Built with lava &middot; Next.js &middot; Three.js &middot; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
