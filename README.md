<div align="center">

# 🌋 Laiba Asif — Personal Portfolio

**A fiery, immersive portfolio built with Next.js, Three.js, and Tailwind CSS**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-FF4500?style=for-the-badge&logoColor=white)](https://laibasif.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.182-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)

</div>

---

## What Is This?

This is my personal portfolio — a fully hand-crafted, single-page application designed around a **lava and fire aesthetic**. Every section has been built with intention: volcano video backgrounds, GPU-rendered meteor particle systems, draggable project carousels, and smooth scroll-reveal animations that make the whole thing feel alive.

It's not just a portfolio. It's a demonstration of the kind of work I can do.

---

## Sections at a Glance

| Section | What It Does |
|---|---|
| **Hero** | Full-screen volcano eruption video backdrop with staggered entrance animations |
| **Introduction** | Profile, resume/LinkedIn/GitHub links, and an animated meteor icon list |
| **Education** | Alternating timeline layout (desktop) / stacked (mobile) with glowing cards |
| **Inventory** | Skill grid split into Programming, Frameworks & Libraries, and Tools — each icon wrapped in a fire-ring border |
| **Projects** | Horizontally draggable carousel of 10 projects with click-to-open modals and per-project detail panels |
| **Contact** | Lava-video backdrop, FormSubmit-powered contact form with success/error states |

---

## Features

- **3D Meteor Shower** — An instanced mesh particle system (50 meteors) rendered via `@react-three/fiber`, with per-particle lifecycle management, color lerping from `#FF4500` → `#8B0000`, and gravity simulation
- **Video Backgrounds** — Three distinct compressed video assets across Hero, Projects, and Contact, each with low-opacity overlays for readability
- **Draggable Project Carousel** — Horizontal scroll with drag-detection threshold; a clean drag vs. click distinction to open modals
- **Project Modals** — Portal-rendered overlays per project, animated with Motion (scale + fade), keyboard-dismissible via `Escape`
- **Scroll Reveal Animations** — A reusable `ScrollReveal` wrapper component supporting directional entry (up / down / left / right) with configurable delay and threshold
- **Responsive Education Timeline** — Completely different layouts for desktop (2-col alternating with center line) and mobile (single-col, left-aligned)
- **Glassmorphism Navbar** — Transparent on load, gains a frosted-glass background on scroll, with an animated hamburger menu for mobile

---

## Tech Stack

### Core
| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16 | App Router, SSR, image optimisation |
| [React](https://react.dev/) | 19 | UI component model |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | Type safety throughout |

### 3D & Animation
| Technology | Version | Purpose |
|---|---|---|
| [Three.js](https://threejs.org/) | 0.182 | 3D rendering engine |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | 9.5 | React renderer for Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | 10.7 | Three.js helper hooks & components |
| [Motion](https://motion.dev/) | 12.33 | Scroll-triggered animations & transitions |

### Styling
| Technology | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling with `@theme` syntax |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.4 | Safe class merging |
| [clsx](https://github.com/lukeed/clsx) | 2.1 | Conditional class construction |

### Integrations
| Technology | Purpose |
|---|---|
| [FormSubmit.co](https://formsubmit.co/) | Contact form backend (no server needed) |
| [Devicons](https://devicon.dev/) | Skill badge icons via CDN |
| [Google Fonts](https://fonts.google.com/) | Cinzel (headings) + Inter (body) |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: metadata, navbar, footer, fonts
│   ├── page.tsx            # Home page: all sections assembled in order
│   └── globals.css         # Theme variables, custom utilities, animations
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed nav with scroll-aware glass effect + mobile menu
│   │   └── Footer.tsx      # Social icon links (Gmail, LinkedIn, GitHub)
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx       # Volcano video + animated heading
│   │   ├── OverviewSection.tsx   # Profile, bio bullets, social CTAs
│   │   ├── EducationSection.tsx  # Responsive timeline layout
│   │   ├── SkillsSection.tsx     # Fire-ring icon grid with devicons
│   │   ├── ProjectsSection.tsx   # Draggable carousel + modal trigger
│   │   └── ContactSection.tsx    # Form with FormSubmit integration
│   │
│   ├── three/
│   │   ├── MeteorShower.tsx        # R3F instanced mesh particle system
│   │   ├── MeteorShowerCanvas.tsx  # Three.js Canvas + scene setup
│   │   └── MeteorShowerWrapper.tsx # Dynamic import wrapper (SSR-safe)
│   │
│   └── ui/
│       ├── ProjectModal.tsx   # Portal modal with motion animations
│       ├── ScrollReveal.tsx   # Scroll-triggered animation HOC
│       └── SectionHeading.tsx # Reusable gradient-underline section title
│
├── data/
│   ├── projects.ts   # All 10 projects: title, tech, description, links, color
│   └── skills.ts     # Skill categories and icon identifiers
│
└── lib/
    └── utils.ts      # cn() — clsx + tailwind-merge helper
```

---

## Projects Showcased

| # | Project | Stack |
|---|---|---|
| 1 | **SpeciSnap** | React, Vite, Google Gemini, FastAPI, PWA |
| 2 | **Eunoia** | Next.js, Google Gemini, Web Speech API |
| 3 | **ResumeTruth AI** | Next.js, TypeScript, Hugging Face API, pdf-lib |
| 4 | **Lava Portfolio** | Next.js, Three.js, Tailwind CSS, Motion |
| 5 | **PinhaanGlow** | React, Three.js, Zustand, Node.js, Supabase |
| 6 | **Nebula Plan** | React, Node.js, MySQL |
| 7 | **Bridger** | Django, Python, Bootstrap (AODA-compliant) |
| 8 | **CI/CD Pipeline** | Jenkins, Helm, Kubernetes, GCP |
| 9 | **ML Evaluation System** | Java, Python, NumPy, Pandas, Matplotlib, JUnit |
| 10 | **TaskLet** | HTML, CSS, JavaScript, MySQL, Bootstrap |

---

## Design System

The entire portfolio follows a **lava and fire** theme — dark reds, burnt oranges, and glowing embers against a near-black background.

```
Background:   #0A0000  (near-black)
Surface:      #1A0505 / #2A0A0A
Text:         #FFF0E0  (warm cream) / #FFD4B0 (warm orange)
Accent:       #FF4500  (orange-red) / #CC3700 / #8B0000 (deep red)
Highlight:    #FFD700  (gold) / #FF8C00
```

**Custom CSS utilities defined in `globals.css`:**
- `.lava-text` — gradient text with glow `drop-shadow`
- `.fire-shadow` — layered orange/red `box-shadow` glow
- `.fire-circle-border` — pulsing fire ring around skill icons
- `.glass` — `backdrop-blur` glassmorphism panel
- `.box-texture` — subtle background texture for cards
- `.animate-carousel` — infinite CSS scroll animation (40s loop)

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/personal-portfolio.git
cd personal-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Environment Variables

Create a `.env.local` at the root:

```env
# Optional — only needed if you switch to Web3Forms for the contact form
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
```

The contact form currently uses [FormSubmit.co](https://formsubmit.co/) and requires no API key.

---

## Deployment

This portfolio is deployed on **Vercel**. To deploy your own fork:

1. Push the repo to GitHub
2. Import it into [Vercel](https://vercel.com/)
3. Vercel auto-detects Next.js — no extra config needed
4. Add any environment variables in the Vercel dashboard

---

## Performance Notes

- Three.js canvas: `antialias: false`, `dpr` clamped to `[1, 1.5]` to stay smooth on high-DPI screens without burning GPU
- `MeteorShowerWrapper` uses `next/dynamic` with `ssr: false` to keep Three.js off the server render
- Video assets are pre-compressed and served from `/public/assets/`
- Next.js `<Image>` with `priority` used for above-the-fold images
- Scroll reveal uses `IntersectionObserver` under the hood (via Motion) — no scroll event listeners hammering the main thread

---

## License

This project is open source under the [MIT License](LICENSE). Feel free to use it as inspiration or a template — just please don't deploy it as-is with your name on it. Make it yours!

---

<div align="center">

Built by **Laiba Asif** — [LinkedIn](https://www.linkedin.com/in/laiba-asif-842584204/) · [GitHub](https://github.com/Lxiba)

</div>
