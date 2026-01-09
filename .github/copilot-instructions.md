<!-- Repo-specific Copilot instructions for AI coding agents -->
# Copilot / AI Agent Instructions — Next.js TypeScript portfolio

Purpose: help an AI coding agent be productive in this repository (Next.js 13 app router, TypeScript).

- Repo layout: uses the Next 13+ App Router under `src/app` (see [src/app/layout.tsx](src/app/layout.tsx#L1)).
- Code is TypeScript-first and uses path alias `@/*` to map to `./src/*` (see [tsconfig.json](tsconfig.json#L1)).
- Styling: Tailwind is installed (`tailwindcss` in devDependencies) and there is a global stylesheet at `src/app/globals.css`.
- Static assets: images live under `public/images/*` and are referenced directly (use `/images/...`).
- Components: organized under `src/components/*`. Many components have a sibling `.css` file (e.g. `src/components/aboutMe/AboutMe.tsx` + `AboutMe.css`) — preserve that pattern when adding styles.

Key commands (from [package.json](package.json#L1)):
- `npm run dev` — local development (`next dev`).
- `npm run build` — production build (`next build`).
- `npm run start` — run built app (`next start`).
- `npm run lint` — runs `eslint`.

Dependencies & platform notes:
- Next version: `next` 15.x (app router). Expect Next 13+ app-router conventions (server components, `metadata`, `layout.tsx`).
- React 19 and TypeScript 5 are used; be mindful of modern React APIs and edge cases with server vs client components.
- `next.config.ts` allows external images from `img.youtube.com` (see [next.config.ts](next.config.ts#L1)). When adding new image domains, update `next.config.ts`.

Conventions and patterns to follow (observed in code):
- Use path alias `@/` for imports, e.g. `import Header from "@/components/header/Header";` (keep imports consistent).
- UI components are small, colocated with their CSS; prefer local component files and keep exports default when the component file is singular.
- Global layout and shared UI live in `src/app/layout.tsx` — add global wrappers or providers there.
- Client-only code (e.g., `react-hot-toast`, event handlers, browser APIs) should be placed in client components or wrapped with `'use client'` when necessary.
- Avoid changing global layout behavior without confirming effects across pages (announcement banner, header, footer are inserted in `layout.tsx`).

Files to inspect for context when changing functionality:
- Entry & layout: `src/app/layout.tsx` (global wrappers, analytics, Toaster)
- Component collections: `src/components/*` (UI, subfolders per feature)
- Data files used as local fixtures: `src/app/blogs/blogsData.ts`, `src/app/roadmap/TechData.ts`, `src/components/brandPartners/brandPartnersList.ts` — update these rather than inventing new global data stores.

Testing & CI:
- There are no test scripts in `package.json`; do not assume unit tests exist. If adding tests, document the chosen runner and add scripts.

Linting & formatting:
- ESLint is configured with `eslint-config-next` (see `devDependencies`). Run `npm run lint` to surface issues.

PR & commit guidance for AI agents:
- Keep changes small and focused; prefer editing or adding files under `src/components` or `src/app` rather than large-wide refactors.
- When introducing new dependencies, update `package.json` and ensure dev vs prod dependency placement is correct.
- Update `next.config.ts` for image domain changes and `tsconfig.json` only when adding new path aliases.

Limitations & notes for agents:
- No environment files are present in the repo — do not add secrets or assume `.env` exists; reference GitHub secrets for runtime configs.
- No automated tests are present — request human review for behavior changes and UI regressions.

If unsure, check these files first: `package.json`, `next.config.ts`, `tsconfig.json`, `src/app/layout.tsx`, and the specific component folder under `src/components` you intend to modify.

If this instruction is missing something important for your task, ask the human reviewer to point to the relevant file or workflow.
