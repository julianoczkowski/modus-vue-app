# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vue 3 boilerplate/starter template with Modus 2 Web Components integration, TypeScript support, and comprehensive development rules for building applications with the Modus Design System.

## Essential Commands

### Development
```bash
npm run dev              # Start dev server on port 3000 (auto-opens browser)
npm run build            # Type check + production build
npm run preview          # Preview production build
npm run type-check       # Run TypeScript type checking
npm run lint:colors      # Check for non-Modus color usage
```

### Pre-commit Hooks
- Husky runs `lint:colors` automatically on commit for staged `.vue`, `.ts`, `.js`, `.css`, `.scss` files
- Prevents commits with hardcoded colors or Tailwind color classes

## Core Architecture

### Modus Web Components Integration

**Critical Setup (src/main.ts:6-14):**
- Modus styles imported via `@trimble-oss/moduswebcomponents/modus-wc-styles.css`
- Icon fonts loaded from `@trimble-oss/modus-icons/dist/field-systems/fonts/modus-icons.css`
- Web components registered globally via `defineCustomElements()` from loader
- Vite configured (vite.config.ts:12) to treat `modus-wc-*` tags as custom elements

### Color System (CRITICAL - Auto-enforced)

**9 Approved Modus Colors ONLY:**

```css
/* Base Colors (theme-aware) */
var(--modus-wc-color-base-page)     /* #fff → #000 */
var(--modus-wc-color-base-100)      /* #f1f1f6 → #252a2e */
var(--modus-wc-color-base-200)      /* #cbcdd6 → #464b52 */
var(--modus-wc-color-base-300)      /* #b7b9c3 → #353a40 */
var(--modus-wc-color-base-content)  /* #171c1e → #cbcdd6 */

/* Semantic Colors (theme-independent) */
var(--modus-wc-color-info)          /* #0063a3 */
var(--modus-wc-color-success)       /* #1e8a44 */
var(--modus-wc-color-error)         /* #da212c */
var(--modus-wc-color-warning)       /* #fbad26 */
```

**NEVER use:**
- Hardcoded hex values (`#fff`, `#f1f1f6`, etc.)
- RGB/RGBA values
- Tailwind color classes (`red-500`, `bg-blue-400`, etc.)
- Custom color variables

Pre-commit hook (scripts/check-modus-colors.js) blocks violations automatically.

### Component Architecture

**Reusable Components:** `src/components/`
- ModusIcon.vue - Icon wrapper with TypeScript types

**Page Components:** `src/views/`
- Home.vue - Landing page
- ButtonDemo.vue - Demo page (can be removed)
- About.vue - About page

**Routing:** `src/router/index.ts`
- Uses Vue Router 4 with web history mode
- Routes defined as typed RouteRecordRaw[]

### Icon System

Standard Modus icon usage:
```vue
<i class="modus-icons">icon_name</i>
```

TypeScript types available in `src/types/modus.d.ts` for 500+ validated icon names.

Use ModusIcon component for accessibility features:
```vue
<ModusIcon name="settings" size="lg" :decorative="false" aria-label="Settings" />
```

### Theme System

4 available themes via `data-theme` attribute on `<html>`:
- `modus-classic-light` (default)
- `modus-classic-dark`
- `modus-modern-light`
- `modus-modern-dark`

All Modus CSS variables automatically adapt to current theme.

## Key Development Patterns

### Vue Component Creation

**Always use scoped styles:**
```vue
<template>
  <div class="component-name">
    <!-- content -->
  </div>
</template>

<script setup lang="ts">
interface Props {
  // typed props
}

withDefaults(defineProps<Props>(), {
  // defaults
});
</script>

<style scoped>
.component-name {
  background-color: var(--modus-wc-color-base-page);
  color: var(--modus-wc-color-base-content);
}
</style>
```

### Modus Web Component Usage

```vue
<modus-wc-button
  color="primary"           # or: secondary, tertiary, warning, danger
  variant="filled"          # or: outlined, borderless
  size="md"                 # or: xs, sm, lg
  @button-click="handler"
>
  <i class="modus-icons" style="margin-right: 8px">save_disk</i>
  Save
</modus-wc-button>
```

**Event Handling:**
Modus components emit CustomEvents. Handle with `@{event-name}` syntax.

### TypeScript Configuration

- `tsconfig.json` - App source config with path alias `@` → `src/`
- `tsconfig.node.json` - Vite config TypeScript
- Types for Modus components in `src/types/modus.d.ts`

### Build Configuration

Vite setup with:
- Vue plugin with custom element recognition for `modus-wc-*`
- Path alias: `@` resolves to `src/`
- Server: port 3000, auto-open browser
- Build: manual chunks (vendor: vue/vue-router, modus: web components)
- Sourcemaps enabled

## Development Rules (from .cursor/rules/)

### 1. Color Usage (alwaysApply: true)
- Only 9 Modus CSS variables allowed
- Pre-commit hook enforces compliance
- See `.cursor/rules/color-usage.mdc` for complete reference

### 2. Modus Web Components (alwaysApply: true)
- Reference: https://trimble-oss.github.io/modus-wc-2.0/main/
- Check component docs before implementation
- Test with all 4 themes
- See `.cursor/rules/modus-web-components.mdc`

### 3. Vue Component Creation (alwaysApply: true)
- Always use `<style scoped>`
- Place reusable components in `src/components/`
- Place pages in `src/views/`
- See `.cursor/rules/vue-component-creation.mdc`

### 4. Modus Icons (context-specific)
- 500+ icon names typed in `src/utils/icons.ts`
- See `.cursor/rules/modus-icons.mdc`

### 5. Chrome DevTools Testing (context-specific)
- Browser debugging via MCP
- See `.cursor/rules/chrome-devtools-testing.mdc`

## Important Notes

### Node.js Requirements
- **Node >= 20.0.0** required (Vite 7.x dependency)
- **npm >= 9.0.0** required

### MCP Server Configuration
`.cursor/mcp.json` configures:
- Context7 for advanced context management
- Chrome DevTools for browser debugging
- Modus Documentation for component reference

### Demo Content
ButtonDemo.vue is optional demo content and can be removed for production.

## Common Tasks

**Add new page:**
1. Create in `src/views/YourPage.vue`
2. Add route in `src/router/index.ts`
3. Use scoped styles with Modus variables only

**Add reusable component:**
1. Create in `src/components/YourComponent.vue`
2. Define TypeScript Props interface
3. Use slots for flexible content areas
4. Test with light/dark themes

**Theme switching:**
```typescript
document.documentElement.setAttribute('data-theme', 'modus-classic-dark');
localStorage.setItem('modus-theme', 'modus-classic-dark');
```

**Color violations:**
Run `npm run lint:colors` to check for hardcoded colors before commit.

## Resources

- [Modus Web Components Storybook](https://trimble-oss.github.io/modus-wc-2.0/main/)
- [Vue 3 Docs](https://vuejs.org/)
- [Vite Docs](https://vitejs.dev/)
- README.md has comprehensive usage examples and troubleshooting

## Architecture Decisions

1. **Why Vite:** Fast HMR, native ESM, optimized builds for Vue 3
2. **Why manual chunks:** Separate vendor and Modus bundles for better caching
3. **Why scoped styles:** Prevent style conflicts, component isolation
4. **Why color linting:** Enforce design system consistency, theme compatibility
5. **Why web components:** Standardized Modus design system across frameworks
