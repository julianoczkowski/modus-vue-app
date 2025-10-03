# Contributing to Modus Vue Boilerplate

Thank you for your interest in contributing to the Modus Vue Boilerplate! This project aims to provide a production-ready Vue 3 starter template with Modus 2 Web Components integration. We welcome contributions from the community.

## 🤝 How to Contribute

### Reporting Issues

Before creating an issue, please:

1. **Search existing issues** to avoid duplicates
2. **Use the issue templates** when available
3. **Provide clear reproduction steps** for bugs
4. **Include environment details** (Node.js version, browser, OS)

### Suggesting Features

We welcome feature suggestions! Please:

1. **Check existing feature requests** first
2. **Explain the use case** and benefits
3. **Consider if it fits the boilerplate scope** (Vue 3 + Modus 2 integration)
4. **Provide implementation ideas** if possible

## 🛠️ Development Setup

### Prerequisites

- Node.js 20+ (required for Vite 7.x compatibility)
- npm or yarn
- Git

### Getting Started

1. **Fork the repository**

   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/modus-vue-app.git
   cd modus-vue-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📋 Development Guidelines

### Code Standards

This project follows strict development rules and standards:

#### 🎨 Color Usage

- **ONLY use the 9 approved Modus colors** defined in `.cursor/rules/color-usage.mdc`
- **Never use hardcoded hex values** or Tailwind color classes
- **Run color linting** before committing: `npm run lint:colors`

#### 🧩 Component Development

- **Follow Vue 3 Composition API** patterns
- **Use TypeScript** for all new code
- **Implement proper accessibility** (ARIA labels, keyboard navigation)
- **Test with all 4 Modus themes** (Classic/Modern, Light/Dark)

#### 🎭 Icon Usage

- **Use only valid Modus icon names** from the official list
- **Prefer the ModusIcon component** for consistency
- **Include proper accessibility** for functional icons

#### 🌐 Testing

- **Use Chrome DevTools MCP** for browser testing when available
- **Test responsive design** across mobile, tablet, and desktop
- **Verify accessibility compliance**

### File Organization

```
src/
├── components/          # Reusable Vue components
├── views/              # Page components
├── router/             # Vue Router configuration
├── types/              # TypeScript definitions
└── utils/              # Utility functions

.cursor/
├── rules/              # Development rules (DO NOT MODIFY)
└── mcp.json           # MCP server configuration
```

### Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Examples
feat: add new button variant demo
fix: resolve theme switching issue
docs: update installation instructions
style: fix color linting violations
refactor: improve component organization
test: add accessibility tests
```

### Pre-commit Checks

The project includes automated checks:

- **Color linting** - Ensures only Modus colors are used
- **TypeScript compilation** - Verifies type safety
- **Code formatting** - Maintains consistent style

## 🧪 Testing Your Changes

### Manual Testing Checklist

- [ ] **Development server starts** without errors
- [ ] **All demo pages load** correctly
- [ ] **Theme switching works** for all 4 themes
- [ ] **Icons display properly** with valid names
- [ ] **Colors follow Modus standards** (run `npm run lint:colors`)
- [ ] **Responsive design** works on mobile and desktop
- [ ] **Accessibility** - test with screen readers if possible
- [ ] **Build succeeds** (`npm run build`)

### Browser Testing

Test in modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Pull Request Process

### Before Submitting

1. **Ensure all tests pass** and linting is clean
2. **Update documentation** if needed
3. **Add examples** for new features
4. **Test thoroughly** across browsers and themes

### PR Guidelines

1. **Use descriptive titles** following conventional commits
2. **Fill out the PR template** completely
3. **Link related issues** using keywords (fixes #123)
4. **Include screenshots** for UI changes
5. **Request review** from maintainers

### PR Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## Testing

- [ ] Manual testing completed
- [ ] Color linting passes
- [ ] All themes tested
- [ ] Responsive design verified
- [ ] Accessibility checked

## Screenshots

(If applicable)

## Related Issues

Fixes #(issue number)
```

## 🎯 Areas for Contribution

### High Priority

- **New Modus component examples** - Showcase additional web components
- **Accessibility improvements** - Enhance ARIA support and keyboard navigation
- **Performance optimizations** - Code splitting, lazy loading improvements
- **Documentation enhancements** - Better examples and guides

### Medium Priority

- **Additional demo pages** - More comprehensive component showcases
- **Testing improvements** - Automated testing setup
- **Build optimizations** - Bundle size reduction
- **Developer experience** - Better error messages and debugging

### Low Priority

- **Code organization** - Refactoring for better maintainability
- **Utility functions** - Helper functions for common tasks
- **Example applications** - Real-world usage examples

## 🚫 What We Don't Accept

- **Breaking changes** without major version bump discussion
- **Non-Modus color usage** - Must follow the 9 approved colors
- **Accessibility regressions** - All changes must maintain WCAG 2.1 AA compliance
- **Hardcoded values** - Use Modus design tokens and CSS variables
- **Framework changes** - This is specifically a Vue 3 boilerplate
- **Dependency bloat** - New dependencies must be justified

## 📞 Getting Help

### Community Support

- **GitHub Discussions** - For questions and community help
- **Issues** - For bug reports and feature requests

### Development Questions

- **Check the rules** in `.cursor/rules/` for development standards
- **Review existing code** for patterns and examples
- **Ask in discussions** before starting major changes

## 🏆 Recognition

Contributors will be:

- **Listed in the README** contributors section
- **Credited in release notes** for significant contributions
- **Invited as collaborators** for consistent, high-quality contributions

## 📄 License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

**Thank you for helping make the Modus Vue Boilerplate better for everyone! 🚀**

_For questions about contributing, please open a GitHub Discussion or contact the maintainers._
