# Render Forum — Architecture & Spatial Design Studio

> A premium, production-quality portfolio website for an architecture and interior design studio. Built with modern web technologies to deliver a sophisticated, editorial experience that reflects the studio's design philosophy.

---

## 🏛️ Live Preview

> Run locally with `npm run dev` → [http://localhost:5173](http://localhost:5173)

---

## ✨ Features

### Design & Experience
- **Cinematic Studio Preloader** — Architectural shutter-split reveal with coordinate display and loading counter on first visit
- **Lenis Smooth Scrolling** — Buttery inertia momentum scrolling across all pages
- **Framer Motion Page Transitions** — Fluid, animated navigation between all routes
- **Scroll-Triggered Animations** — Sections reveal with directional clip-path animations via `ScrollReveal`
- **Infinite Architectural Ticker** — Scrolling typographic ribbon with design tenets between sections (light & dark variants)
- **Toggleable Blueprint Grid Overlay** — Floating `GRID: ON/OFF` button reveals a 12-column architectural alignment grid with datum markers, coordinates, and column references
- **Interactive CAD Comparison Slider** — Drag-to-reveal split slider comparing parametric 3D mesh study vs built architecture
- **Spatial Materiality Hotspots** — Interactive numbered pins on project images that reveal material specification cards (finish, application, provenance)

### Pages
| Route | Description |
|-------|-------------|
| `/` | Home — Hero, studio intro, featured project, editorial project grid, CAD slider, process, CTA |
| `/about` | About — Studio philosophy, values, team split layout |
| `/projects` | Projects — Grid view & Index/Directory view with cursor-tracking image preview |
| `/projects/:slug` | Project Detail — Full gallery, lightbox, material hotspots, prev/next navigation |
| `/expertise` | Expertise — Accordion services with staggered image grid |
| `/studio` | Studio — Philosophy, interlude images with pull quotes, process timeline |
| `/contact` | Contact — Info sidebar + validated contact form |
| `*` | 404 — Architectural not-found page |

### Project Directory (Index View)
The Projects page features a toggleable **Grid ↔ Index** view. In Index mode:
- Tabular ledger layout (REF, PROJECT, TYPOLOGY, LOCATION, YEAR)
- Hover any row → floating image preview card tracks the cursor
- Left accent bar on active row

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite 6](https://vitejs.dev/) |
| Routing | [React Router v6](https://reactrouter.com/) |
| Animation | [Framer Motion 11](https://www.framer-motion.com/) |
| Smooth Scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| Styling | Vanilla CSS with custom design tokens (no Tailwind) |
| Fonts | Cormorant Garamond (display) · DM Sans (body) · Inter (UI) |

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--color-black` | `#0a0a0a` | Backgrounds, hero overlays |
| `--color-charcoal` | `#1a1a1a` | Body text, dark sections |
| `--color-off-white` | `#fafaf8` | Page background |
| `--color-cream` | `#f5f4f0` | Section backgrounds |
| `--color-accent` | `#8b1a1a` | Brand red — CTAs, labels, markers |
| `--color-warm-gray` | `#8a8a82` | Muted text, secondary labels |

### Typography Scale
```
--font-display   : 'Cormorant Garamond' — editorial headings
--font-sans      : 'DM Sans'            — body copy
--font-ui        : 'Inter'              — labels, UI elements
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18`
- npm `>= 9`

### Installation

```bash
# Clone the repository
git clone https://github.com/iamshadankhan10/Freelance--Render-Forum.git

# Navigate into the project
cd Freelance--Render-Forum

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev       # Start development server with HMR
npm run build     # TypeScript check + production build
npm run preview   # Preview the production build locally
```

---

## 📁 Project Structure

```
render-forum/
├── public/
│   ├── img/                    # Client images (Building1–2, Interior1–3, Logo)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ArchitecturalGrid/  # Blueprint overlay toggle
│   │   ├── ArchitecturalTicker/# Infinite marquee ribbon
│   │   ├── ComparisonSlider/   # CAD vs built drag slider
│   │   ├── ContactForm/        # Validated contact form
│   │   ├── CustomCursor/       # (available, currently disabled)
│   │   ├── Footer/             # Site footer
│   │   ├── MaterialHotspots/   # Interactive spec pins
│   │   ├── Navbar/             # Fixed top navigation
│   │   ├── ProjectCard/        # Image card with hover overlay
│   │   ├── ProjectDirectory/   # Index/table view with preview
│   │   ├── ScrollReveal/       # Framer Motion scroll-trigger wrapper
│   │   ├── SectionLabel/       # Decorative section labels
│   │   ├── SmoothScroll/       # Lenis scroll provider
│   │   └── StudioPreloader/    # Initial load animation
│   ├── data/
│   │   ├── process.ts          # Process steps data
│   │   ├── projects.ts         # Project definitions & helpers
│   │   └── services.ts         # Services/expertise data
│   ├── pages/
│   │   ├── Home.tsx / .css
│   │   ├── About.tsx / .css
│   │   ├── Projects.tsx / .css
│   │   ├── ProjectDetail.tsx / .css
│   │   ├── Expertise.tsx / .css
│   │   ├── Studio.tsx / .css
│   │   ├── Contact.tsx / .css
│   │   └── NotFound.tsx / .css
│   ├── App.tsx                 # Router, layout, global providers
│   ├── main.tsx                # React entry point
│   └── index.css               # Global design tokens & utilities
├── index.html                  # SEO meta, OG tags, font preloads
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔧 Customization Guide

All placeholder content is marked with `// TODO:` comments for easy client handoff.

### Update Contact Details
→ [`src/components/Footer/Footer.tsx`](src/components/Footer/Footer.tsx)
→ [`src/pages/Contact.tsx`](src/pages/Contact.tsx)

### Update Projects
→ [`src/data/projects.ts`](src/data/projects.ts) — Add/edit project entries with `title`, `slug`, `category`, `coverImage`, `gallery`, etc.

### Update Services
→ [`src/data/services.ts`](src/data/services.ts)

### Replace Images
→ Drop images into `public/img/` and update references in `src/data/projects.ts`

### Connect Contact Form
→ [`src/components/ContactForm/ContactForm.tsx`](src/components/ContactForm/ContactForm.tsx) — Replace the `// TODO: API call` comment with your form endpoint (Formspree, EmailJS, etc.)

---

## 📐 Architecture Decisions

- **Vanilla CSS over Tailwind** — Full control over design tokens, no purging concerns, easier client handoff
- **Lazy-loaded pages** — Each route is code-split for fast initial load
- **`useLayoutEffect` scroll reset** — Prevents footer flash during page transitions by resetting scroll position synchronously before the browser paints
- **Lenis only on pointer devices** — Touch devices use native scroll for better mobile performance
- **Session-cached preloader** — Plays once per browser session, doesn't obstruct internal navigation
- **`data-cursor` attribute system** — Scalable way to attach cursor context to any element (ready for future cursor re-enable)

---

## 📄 License

This project is a **freelance deliverable** created for **Render Forum**. All design, code, and assets are proprietary. Not licensed for public reuse.

---

<div align="center">
  <p>Designed & Developed with precision</p>
  <p><strong>RENDER FORUM</strong> · Realistic Render, Reliable Results</p>
</div>
