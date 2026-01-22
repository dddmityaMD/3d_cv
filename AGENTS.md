# Agent Guidelines for 3d_cv

Single-page CV site (RU/EN) with lightweight 3D constellation navigation.
Stack: Vite + React + TypeScript + TailwindCSS + three.js via @react-three/fiber + @react-three/drei.

## Build / Lint / Test

```bash
# Install
npm i

# Dev server (Vite, http://localhost:5173)
npm run dev

# Type-check + production build (tsc -b && vite build)
npm run build

# Preview production build
npm run preview

# Lint (ESLint flat config: eslint.config.js)
npm run lint

# Deploy to GitHub Pages (gh-pages -d dist)
npm run deploy
```

CI uses Node 20 and runs `npm ci`, `npm run lint`, `npm run build`:
`.github/workflows/ci-deploy.yml`.

### Tests

There is currently no test runner configured (no `test` script, no Vitest/Jest deps).
If/when Vitest is added, prefer these commands:

```bash
# Run all tests once
npx vitest run

# Run a single test file
npx vitest run src/components/Header.test.tsx

# Run a single test by name
npx vitest run -t "scroll" 
```

## Project Shape

- App entry: `src/main.tsx` renders `src/App.tsx`.
- All copy + section ids live in `src/content/data.ts` (keep RU/EN in sync).
- Sections: `src/sections/*` render `<section id={sectionIds.x}>...`.
- Shared UI: `src/components/*`.
- Small utilities/hooks: `src/lib/*`.

## Code Style & Conventions

### TypeScript

- Strict TS is enabled (`tsconfig.app.json`): no unused locals/params, strict mode.
- Avoid `any`; use `unknown`, discriminated unions, or narrow with runtime checks.
- Prefer `as const` + `satisfies` for static data (see `src/content/data.ts`).
- For tuple returns, use `as const` (see `src/lib/useLocalStorageState.ts`).

### Exports

- Prefer named exports for components and helpers.
- Default exports are acceptable for entrypoints and heavy/lazy components (e.g. `src/App.tsx`).

### Imports

- Order imports: external packages -> local files.
- Use `import type` for type-only imports; inline types are OK:
  `import { content, type Lang } from './content/data'`.
- Prefer combining imports from the same module (avoid two separate imports from `../content/data`).

### Formatting

- 2-space indentation; no tabs.
- Single quotes.
- Trailing commas in multi-line objects/arrays.
- Keep lines ~100 chars; wrap JSX props and long strings.
- No unused variables; prefix intentionally-unused with `_`.

### Naming

- Components: PascalCase file + export (`Header.tsx` -> `export function Header`).
- Hooks: `useX` (e.g. `usePrefersReducedMotion`).
- Helpers: camelCase (`scrollToId`).
- Types: PascalCase (`type SectionId = ...`).
- Event handlers: `onX` / `handleX`.

### React Components

- Use function components and hooks.
- Prefer `type Props = { ... }` for non-trivial props; inline prop types are fine for small leaf components.
- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<button type="button">`.
- Navigation is via `scrollToId()` (do not rely on default anchor jumps).

### Styling (Tailwind)

- Use theme tokens (CSS variables) via Tailwind colors: `bg-bg`, `text-fg`, `text-muted`, `border-border`, `text-accent`.
- Dark mode toggles `.dark` on `<html>` (see `src/index.css` and `src/App.tsx`).
- Use `clsx` for conditional class names.
- Avoid arbitrary values unless truly one-off; prefer theme scale.

### Error Handling

- Wrap browser I/O in try/catch (clipboard, localStorage parse).
- Guard browser globals when needed (`typeof window === 'undefined'`).
- Prefer early returns over deeply nested conditionals.
- Never crash on missing elements/data; use optional chaining + fallbacks.

### Accessibility & Motion

- Keep the skip link working (`src/App.tsx`).
- Use `aria-label` and `aria-pressed` for toggles.
- Respect `prefers-reduced-motion` via `usePrefersReducedMotion()`:
  disable smooth scroll and use `frameloop="demand"` for three-fiber.

### three.js / R3F

- Keep geometry/light counts low; no heavy textures/assets.
- Fixed camera; avoid controls that hijack scroll.
- Provide a non-WebGL fallback navigation (`src/components/FallbackNav.tsx`).

## Cursor / Copilot Rules

- No `.cursorrules`, `.cursor/rules/*`, or `.github/copilot-instructions.md` found in this repo.

## Notes for Agentic Changes

- Read the relevant files before editing; keep changes minimal and localized.
- After TS changes, run `npm run build` to catch type errors early.
- Preserve RU/EN parity in `src/content/data.ts` (labels, buttons, a11y copy).
- Commit messages: short, imperative, English.
