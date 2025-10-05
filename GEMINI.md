# Project Overview

This is a Vue 3 boilerplate/starter template for building applications with the Modus Design System. It uses Vite for the build tooling, and includes TypeScript support, component examples, and modern development practices.

The project is pre-configured with AI development tools, including context management and development rules to ensure code quality and consistency.

## Building and Running

### Development

To run the development server:

```bash
npm run dev
```

This will start a hot-reloading development server, typically at http://localhost:3000.

### Building for Production

To build the application for production:

```bash
npm run build
```

This will create a `dist` directory with the optimized production build.

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

## Development Conventions

### Code Style and Linting

The project uses ESLint and Prettier for code linting and formatting. There are also specific rules for using Modus colors, which are enforced by a pre-commit hook.

### Modus Web Components

The project is set up to use Modus Web Components. When using these components in Vue templates, they should be prefixed with `modus-wc-`. The `vite.config.ts` file is configured to recognize and correctly handle these custom elements.

### TypeScript

The project uses TypeScript for type safety. Type definitions for Modus components are located in `src/types/modus.d.ts`.

### Icon System

The project uses Modus Icons, which are loaded from a CDN. The `ModusIcon.vue` component provides a convenient wrapper for using these icons.
