import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MeteorShowerWrapper } from "@/components/three/MeteorShowerWrapper";

export const metadata: Metadata = {
  title: "Laiba Asif | Portfolio",
  description:
    "Laiba Asif's personal portfolio — a lava-themed showcase of projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="antialiased bg-lava-bg text-lava-text">
        <MeteorShowerWrapper />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
