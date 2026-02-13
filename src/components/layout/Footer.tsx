import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-lava-card-border bg-lava-bg py-6">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 flex items-center justify-between">
        <p className="text-sm text-lava-text-secondary" style={{ fontFamily: "var(--font-heading)" }}>
          &copy; {new Date().getFullYear()} Laiba Asif
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:laiba.asif2222@gmail.com"
            className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
          >
            <Image src="/assets/gmail.png" alt="Email" width={24} height={24} className="object-contain" />
          </a>
          <a
            href="https://www.linkedin.com/in/laiba-asif-842584204/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
          >
            <Image src="/assets/LinkedIn logo.png" alt="LinkedIn" width={28} height={28} className="object-contain" />
          </a>
          <a
            href="https://github.com/Lxiba"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
          >
            <Image src="/assets/github.webp" alt="GitHub" width={24} height={24} className="object-contain" />
          </a>
        </div>
      </div>
    </footer>
  );
}
