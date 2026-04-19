# Aether

Aether is a cinematic editorial-style web experience built with Next.js App Router.
It presents an imagined weather archive through animated sections, atmospheric visuals,
and structured content blocks.

## Highlights

- Scroll-led hero composition with layered motion effects
- Modular landing sections (hero, manifesto, catalogue, instruments, dispatch, closing)
- Strong visual system with custom fonts and palette tokens
- Type-safe implementation with TypeScript and modern React
- Tailwind CSS v4 setup with utility composition helpers

## Tech Stack

- Framework: Next.js 16 (App Router)
- Runtime: React 19
- Language: TypeScript
- Styling: Tailwind CSS v4
- Animation: Framer Motion, Lenis
- Iconography: Lucide React
- Tooling: ESLint, PostCSS
- Package Manager: pnpm (lockfile included)

## Project Structure

The key folders are:

- src/app: App Router entrypoints and global layout
- src/components: All landing page UI sections and shared presentation components
- src/data: Static content sources for atmosphere, dispatch, and instrument content
- src/lib: Utility helpers such as class merging
- public: Static assets and icons

Main page composition is defined in src/app/page.tsx and assembled from independent
section components in src/components.

## Getting Started

### 1) Prerequisites

- Node.js 20+ (recommended)
- pnpm 9+ (recommended)

If pnpm is not installed:

```bash
npm install -g pnpm
```

### 2) Install Dependencies

```bash
pnpm install
```

### 3) Run Development Server

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

Run these from the project root:

```bash
pnpm dev     # Start local development server
pnpm build   # Create production build
pnpm start   # Run production server from build output
pnpm lint    # Run ESLint checks
```

## How the Page Is Built

The landing page is intentionally section-driven:

1. Hero: cinematic opening scene and scroll-reactive motion
2. Ticker: ambient narrative continuity
3. Manifesto: conceptual framing of the archive
4. Catalogue: featured atmosphere entries
5. Instruments: pseudo-scientific tooling section
6. Dispatch: field updates and editorial notes
7. Closing and Footer: final call and site sign-off

This approach keeps content and presentation modular and easy to iterate.

## Styling and Motion Notes

- Global styles and design tokens are configured in src/app/globals.css
- Font loading and base metadata are defined in src/app/layout.tsx
- Motion-heavy sections use Framer Motion for composable transitions
- Smooth scroll behavior is handled through a dedicated component in src/components

## Deployment

### Recommended: Vercel

This project is a standard Next.js deployment target and works out-of-the-box on Vercel.

Steps:

1. Push your repository to GitHub
2. Import the repository in Vercel
3. Keep default Next.js build settings
4. Deploy

### Manual Production Run

```bash
pnpm install
pnpm build
pnpm start
```

## Quality Checklist Before Deploy

- Run lint: pnpm lint
- Run a production build locally: pnpm build
- Verify hero motion and section spacing at mobile and desktop widths
- Check metadata title and description in src/app/layout.tsx

## Customization Guide

- Update editorial content in src/data files
- Adjust section composition order in src/app/page.tsx
- Tune visual tokens and utility styles in src/app/globals.css
- Refine animation behavior in section components under src/components

## License

No license file is currently included. Add one if this project will be distributed publicly.
