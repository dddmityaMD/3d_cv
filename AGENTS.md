# Agent Guidelines for 3d_cv

This repo is a single-page CV website (RU/EN) with a lightweight 3D constellation navigation.
Stack: Vite + React + TypeScript + Tailwind + three.js (via @react-three/fiber + @react-three/drei).

## Build / Lint / Test

```bash
# Install deps
npm i

# Dev server (localhost:5173)
npm run dev

# Type-check + build to dist/
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Code Style & Conventions

### Imports

- Always use named exports from local files: `export function X`, `export const Y`.
- Import React hooks from `'react'`; `import type` for type-only imports.
- Group imports: React/lib → local files → external packages.
- Example:
  ```ts
  import { useState, useEffect } from 'react'
  import { Header } from '../components/Header'
  import type { Content } from '../content/data'
  import { scrollToId } from '../lib/scroll'
  ```

### Formatting

- 2-space indentation, no tabs.
- Trailing commas for multi-line arrays/objects (Prettier-style, but write manually).
- Single quotes for strings (except JSX attributes if preferred double quotes).
- Max line length ~100 chars; split for readability.
- No unused vars; remove or prefix with `_`.

### Types

- Use `as const` for frozen data structures.
- Type parameters for generic components, use `ReactNode` for children, `type Props = {}` patterns.
- Prefer explicit return types for exported functions.
- No `any`; use `unknown` or well-typed unions.
- Example:
  ```ts
  export type Lang = 'ru' | 'en'
  export const content = { ru: {...}, en: {...} } as const
  export type Content = (typeof content)[Lang]
  ```

### Naming

- Components: PascalCase (`Hero.tsx`, `ThreeConstellationNav.tsx`).
- Hooks/lib helpers: camelCase (`useLocalStorageState.ts`, `scrollToId`).
- Constants/objects: camelCase (`sectionIds`, `content`).
- Event handlers: `onX` or `handleX` (`onClick`, `handleSubmit`).
- File names match exports: `Header.tsx` → `export function Header`.

### Component Structure

```tsx
export function ComponentName({ prop, onChange }: Props) {
  const [state, setState] = useState<type>(initial)
  
  useEffect(() => {
  }, [])
  
  return (
    <section id="x" className="...">
      <div>...</div>
    </section>
  )
}
```

- Use `<section>` for top-level sections with proper `id` for anchor navigation.
- Semantic HTML: `<article>` for cards, `<nav>` for link groups, `<button type="button">` for actions.
- Class names: Tailwind utility-first; avoid long custom class strings.

### Error Handling

- Use try/catch for async I/O (clipboard, fetch, localStorage parse).
- Validate user input before dangerous operations (e.g., copy to clipboard).
- Fallback UI: if WebGL unavailable, show accessible text nav; if lazy load fails, show skeleton/error.
- Never crash on missing data; use optional chaining and fallback values:
  ```ts
  const value = obj?.nested?.prop ?? fallback
  ```

### TailwindCSS

- Use custom design tokens from theme: `bg-bg`, `fg`, `muted`, `card`, `border`, `accent`.
- Responsive: `sm:`, `md:` prefixes; mobile-first defaults.
- Dark mode: toggle `.dark` on `<html>`, CSS variables for colors.
- Avoid arbitrary values (`[260px]`) unless necessary; use scale (`h-[260px]` → define in theme if reused).

### Three.js / 3D

- Lazy-load with `React.lazy` + `Suspense` for first-paint performance.
- Keep geometry lightweight: spheres, lines; no textures or heavy assets.
- Limit point lights; use `ambientLight` for base fill.
- Respect `prefers-reduced-motion`: disable animation, use `frameloop="demand"`.
- Keyboard accessibility: fallback nav always visible; nodes must be clickable.
- Camera: fixed position; avoid camera controls that hijack scroll.

### Accessibility

- Skip link at top of page with `sr-only` focus style.
- Focus rings on interactive elements.
- `aria-label`, `aria-pressed` for togglers.
- `lang="ru"` default, switchable via localStorage.
- Color contrast: ensure text on bg passes WCAG AA (Tailwind tokens do this).

### Data / Content

- All copy lives in `src/content/data.ts` as `const content = { ru: {...}, en: {...} }`.
- Section IDs exported as `sectionIds` constant, referenced everywhere.
- No string literals in components; always use from `content[lang]`.

### Git & Deploy

- `vite.config.ts` sets `base: '/3d_cv/'` for GitHub Pages.
- `npm run deploy` publishes `dist/` via `gh-pages`.
- Add `.gitignore` entries: `node_modules`, `dist`, `.DS_Store`, etc.
- Commit messages: concise, imperative, English.

## Testing

- Currently no test framework; add Vitest if needed.
- Run single test: `npm run test src/components/Header.test.tsx`.
- Test critical paths: scroll navigation, language toggle, copy-to-clipboard.

## Notes for AI Agents

- Always read existing files before editing to understand context and conventions.
- Run `npm run build` after type changes; fix TS errors before committing.
- Check LSP diagnostics; address unused imports and missing properties.
- Preserve RU/EN parity: ensure both languages are updated together.
- Keep changes minimal and focused; avoid "refactor everything" unless explicitly requested.
