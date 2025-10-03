# Modus Color Linting

This directory contains scripts for enforcing Modus Design System color usage in the codebase.

## check-modus-colors.js

A comprehensive linting script that detects non-Modus color patterns and suggests proper alternatives.

### What it detects:

- Tailwind color classes (`red-400`, `blue-500`, etc.)
- Hardcoded hex colors (`#ff0000`, `#ffffff`, etc.)
- Basic RGB/RGBA values
- Background, text, and border color violations

### What it suggests:

- Proper Modus CSS custom properties
- Design system compliant alternatives
- Links to official documentation

### Usage:

```bash
# Manual check
npm run lint:colors

# Automatic check on commit (pre-commit hook)
git commit -m "your changes"
```

The script runs automatically before each commit to ensure design system consistency.
