# 3d_cv

One-page CV website (RU/EN) with a lightweight 3D constellation navigation.

## Tech

- Vite + React + TypeScript
- TailwindCSS
- three.js via @react-three/fiber + @react-three/drei
- No backend, no routing (anchor scroll only)

## Local development

```bash
npm i
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo is deployed under the GitHub Pages base path: `/3d_cv/`.
Vite is configured accordingly in `vite.config.ts`.

```bash
npm i
npm run dev
npm run build
npm run deploy
```

`npm run deploy` publishes `dist/` via `gh-pages`.

## Content editing

All copy lives in `src/content/data.ts` as:

```ts
export const content = { ru: {...}, en: {...} }
```

## PDFs

The site expects two PDFs to exist in `public/cv/`:

- `public/cv/CV_Current.pdf`
- `public/cv/CV_Full_Nov2025.pdf`

If you don't have the real files yet, placeholders can be generated with:

```bash
node scripts/gen_placeholder_pdfs.mjs
```
