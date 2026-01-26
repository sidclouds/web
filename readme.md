# sidcloud Studio Web

Anime?cyber + soft?dark neumorphism website for sidcloud Studio. Built with React + Vite + TypeScript, TailwindCSS, framer?motion, and full i18n (zh?CN + en?US).

## Tech Stack
- React 18 + Vite + TypeScript (strict)
- TailwindCSS (custom theme)
- react-router-dom
- framer-motion
- lucide-react
- prism-react-renderer
- react-helmet-async
- i18next + react-i18next + i18next-browser-languagedetector

## Features
- Soft dark / glassmorphism / neumorphism visual direction
- Multi-language UI + data (zh-CN / en-US)
- Data-driven founder + projects + toolboxes
- AI Toolbox & Dev Toolbox with search/filter, code snippets, copy toast
- SEO meta (title/description/OG)
- Live2D desk pet widget integration

## Getting Started
```bash
npm install
npm run dev
```

## Scripts
- `npm run dev` 每 start dev server
- `npm run build` 每 production build
- `npm run preview` 每 preview build
- `npm run lint` 每 eslint
- `npm run format` 每 prettier

## Project Structure
```
src/
  components/     reusable UI
  data/           site content + toolbox + founder + visuals
  i18n/           i18n setup + translations
  pages/          routes
  App.tsx         routes and transitions
  main.tsx        app bootstrap
  index.css       global styles
```

## Data-driven Content
Update the following files to keep content aligned:
- `src/data/founder.ts`
- `src/data/projects.ts`
- `src/data/toolbox.ts`
- `src/data/updates.ts`
- `src/data/visuals.ts`

Translations live in `src/i18n/translations.ts`.

## Live2D Desk Pet
Integrated via live2d-widget autoload. Config in:
- `src/components/Live2DWidget.tsx`

If you want to change model or behavior, adjust `modelId` and options there.

---

? sidcloud Studio
