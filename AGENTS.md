AGENTS.md

Purpose
-------
This file tells automated coding agents how to work productively in this repository. It complements `.github/copilot-instructions.md` and the local rule files in `.cursor/rules/` .

Quick orientation (read first)
- `package.json` — scripts, engine versions, and lint-staged config
- `vite.config.ts` — custom-element handling, aliases, build chunking
- `src/main.ts` — Modus web components registration and global CSS imports
- `.cursor/rules/*` — repository rules (color usage, web components guidance, icon rules, Vue conventions)
- `scripts/check-modus-colors.js` — color enforcement script

Essential workflows (run before making changes)
- Install deps: `npm install` (Node >= 20, npm >= 9)
- Dev server: `npm run dev` (Vite; opens on port 3000)
- Type check: `npm run type-check` (vue-tsc --noEmit)
- Color lint: `npm run lint:colors` (runs `scripts/check-modus-colors.js`)
- Build & preview: `npm run build` && `npm run preview`

Local rules & where they live
- `.cursor/rules/color-usage.mdc` — single-source of truth for allowed Modus colors; enforced by `scripts/check-modus-colors.js`.
- `.cursor/rules/modus-web-components.mdc` — guidance for registering and using Modus web components (`modus-wc-*`).
- `.cursor/rules/modus-icons.mdc` — permissible icon sets and naming conventions; helpers in `src/utils/icons.ts`.
- `.cursor/rules/vue-component-creation.mdc` — Vue 3 component patterns used across the repo.
- `.cursor/rules/chrome-devtools-testing.mdc` — devtools testing workflow referenced by README.
- `.cursor/rules/implementation-guides.mdc` — examples and implementation notes.

Agent editing contract (small, actionable)
- Inputs: when editing TypeScript, Vue templates, or build config, run `npm run type-check` and `npm run dev` (or `npm run build` + `npm run preview`) locally and fix any errors before committing.
- Output: ensure the dev server runs without template/type console errors and that no color-lint violations exist.
- Constraints: never introduce hardcoded hex/RGB/Tailwind color classes; prefer Modus CSS tokens. If a new color is required, update `.cursor/rules/color-usage.mdc` and `scripts/check-modus-colors.js`, and note it in the PR description.

Examples (copyable)
- Theme switching (persisted):

```ts
document.documentElement.setAttribute('data-theme', 'modus-classic-dark');
localStorage.setItem('modus-theme', 'modus-classic-dark');
```

- Preferred icon usage:

```vue
<ModusIcon name="settings" size="lg" :decorative="false" aria-label="Settings" />
<!-- or -->
<i class="modus-icons">settings</i>
```

Where to escalate to humans
- CI fails due to Node engine mismatch or environment-specific CDN blocking (icons/fonts).
- You need to bump a major version of any `@trimble-oss/*` package or change how Modus components are registered.

PR checklist for automated agents
- Run: `npm run type-check` and `npm run lint:colors` locally.
- Run dev server and confirm key pages render (http://localhost:3000).
- Update changelog/PR description describing any rule changes (especially color rule modifications).

References
- Cursor rules docs: https://cursor.com/docs/context/rules
- `.cursor/rules/*` in repo
- `.github/copilot-instructions.md`
- `README.md` (usage examples and troubleshooting)

