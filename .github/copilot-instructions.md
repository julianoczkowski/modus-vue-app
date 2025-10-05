## Quick guide for AI coding agents — modus-vue-app

Purpose: get an AI agent productive quickly. Read the small set of files below, follow the local rules in `.cursor/rules/`, and run the lightweight checks before opening PRs.

1) Big-picture architecture
- Vue 3 + TypeScript app built with Vite. Entry: `src/main.ts` (registers Modus web components). See `vite.config.ts` for custom-element handling and chunking.
- Design system: Modus 2 Web Components. Components are used as native custom elements (`modus-wc-*`) not Vue wrappers.

2) Essential workflows (run before PR)
- Install: `npm install` (Node >= 20, npm >= 9).
- Dev: `npm run dev` (Vite, opens at port 3000).
- Type check: `npm run type-check` (vue-tsc --noEmit).
- Color lint: `npm run lint:colors` (runs `scripts/check-modus-colors.js`).
- Build/preview: `npm run build` && `npm run preview`.

3) Project-specific conventions
- Custom elements: treat `modus-wc-*` tags as web components. If you add other custom elements, update `vite.config.ts`'s `isCustomElement` predicate.
- Icon usage: Prefer `src/components/ModusIcon.vue` or `<i class="modus-icons">name</i>`. Validate names with helpers in `src/utils/icons.ts`.
- Colors & theming: Use Modus CSS tokens only. Theme switching uses `document.documentElement.setAttribute('data-theme', ...)` and persists to `localStorage`.

4) Local rule files (read these; they drive automated guidance)
Path: `.cursor/rules/`
- `color-usage.mdc` — enforces Modus color tokens (used by `scripts/check-modus-colors.js`).
- `modus-web-components.mdc` — guidance around correct Modus WC usage and registration.
- `modus-icons.mdc` — icon naming/usage rules and allowed icon sets.
- `vue-component-creation.mdc` — conventions for Vue 3 components in this repo.
- `chrome-devtools-testing.mdc` — instructions for DevTools-based testing workflows referenced in README.
- `implementation-guides.mdc` — implementation notes and examples (useful when adding pages or examples).

5) Files to read first
- `package.json`, `vite.config.ts`, `tsconfig.json`
- `src/main.ts`, `src/router/index.ts`
- `src/components/ModusIcon.vue`, `src/utils/icons.ts`, `src/types/modus.d.ts`
- `scripts/check-modus-colors.js` and `.cursor/rules/*` (the rule files above)
- Example pages: `src/views/Home.vue`, `src/views/ButtonDemo.vue`

6) Quick editing contract & PR checklist
- Always run: `npm run type-check` and `npm run lint:colors` locally for changed files.
- Verify dev server renders pages (http://localhost:3000) and no template/type errors appear in console.
- Preserve Modus tokens (no hardcoded hex or Tailwind classes). If you must add a color, update `scripts/check-modus-colors.js` rules and `.cursor/rules/color-usage.mdc` accordingly and explain in PR.

7) When to escalate to a human
- CI fails due to Node engine mismatch or blocked CDN for icons/fonts.
- You need to bump major versions of `@trimble-oss/*` packages or change how Modus components are registered.

References: `package.json`, `vite.config.ts`, `src/main.ts`, `src/components/ModusIcon.vue`, `src/utils/icons.ts`, `scripts/check-modus-colors.js`, `.cursor/rules/*`, `README.md`.

If a section needs more detail (examples for theme switching, event typing for Modus components, or automated PR checks), tell me which and I'll expand it.
