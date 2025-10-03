# Pull Request

## 📝 Description

<!-- Provide a brief description of the changes in this PR -->

## 🔗 Related Issue

<!-- Link to the issue this PR addresses -->

Fixes #(issue number)

## 🎯 Type of Change

<!-- Mark the relevant option with an "x" -->

- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ New feature (non-breaking change that adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 🎨 Style/UI changes
- [ ] ♻️ Code refactoring (no functional changes)
- [ ] ⚡ Performance improvement
- [ ] 🧪 Adding or updating tests
- [ ] 🔧 Build/CI changes
- [ ] 🏗️ Infrastructure changes

## 🧪 Testing

<!-- Describe the tests you ran and provide instructions for reviewers -->

### Manual Testing Checklist

- [ ] **Development server starts** without errors (`npm run dev`)
- [ ] **All demo pages load** correctly
- [ ] **Theme switching works** for all 4 themes (Classic/Modern, Light/Dark)
- [ ] **Icons display properly** with valid names
- [ ] **Colors follow Modus standards** (`npm run lint:colors` passes)
- [ ] **Responsive design** works on mobile and desktop
- [ ] **Accessibility** - tested with keyboard navigation
- [ ] **Build succeeds** (`npm run build`)
- [ ] **TypeScript compilation** passes (`npm run type-check`)

### Browser Testing

Tested in the following browsers:

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Component-Specific Testing (if applicable)

- [ ] **Modus Web Components** render correctly
- [ ] **Vue components** work as expected
- [ ] **Event handling** functions properly
- [ ] **Props and attributes** are properly typed
- [ ] **Accessibility attributes** are present (ARIA labels, roles)

## 📸 Screenshots

<!-- Add screenshots for UI changes -->

### Before

<!-- Screenshot of the current state -->

### After

<!-- Screenshot of the changes -->

## 🎨 Design System Compliance

<!-- Confirm compliance with Modus Design System -->

- [ ] **Uses only approved Modus colors** (9 total: 5 base + 4 semantic)
- [ ] **Uses valid Modus icon names** from the official list
- [ ] **Follows Vue component creation rules** (scoped CSS, TypeScript interfaces)
- [ ] **Maintains theme compatibility** across all 4 Modus themes
- [ ] **Follows accessibility guidelines** (WCAG 2.1 AA compliance)

## 📋 Code Quality

<!-- Confirm code quality standards -->

- [ ] **Code follows project conventions** and style guide
- [ ] **TypeScript strict mode** compliance
- [ ] **ESLint rules** pass without warnings
- [ ] **No hardcoded values** - uses Modus design tokens
- [ ] **Proper error handling** implemented
- [ ] **Code is well-documented** with comments where needed

## 🔄 Breaking Changes

<!-- If this PR introduces breaking changes, describe them here -->

- [ ] This PR introduces breaking changes
- [ ] Migration guide provided (if applicable)
- [ ] Version bump required

**Breaking changes description:**

<!-- Describe any breaking changes and how to migrate -->

## 📚 Documentation

<!-- Confirm documentation updates -->

- [ ] **README.md** updated (if needed)
- [ ] **Code comments** added for complex logic
- [ ] **TypeScript definitions** updated (if needed)
- [ ] **Examples** provided for new features
- [ ] **Development rules** updated (if needed)

## 🔍 Review Checklist

<!-- For reviewers -->

### Code Review

- [ ] Code follows project patterns and conventions
- [ ] Logic is sound and handles edge cases
- [ ] Performance considerations addressed
- [ ] Security considerations addressed
- [ ] No code duplication or unnecessary complexity

### Design System Review

- [ ] Uses approved Modus colors and components
- [ ] Maintains visual consistency
- [ ] Responsive design implemented correctly
- [ ] Accessibility standards met

### Testing Review

- [ ] Adequate test coverage (manual or automated)
- [ ] Edge cases considered and tested
- [ ] Cross-browser compatibility verified
- [ ] Performance impact assessed

## 💬 Additional Notes

<!-- Add any additional context, concerns, or notes for reviewers -->

## 📝 Reviewer Instructions

<!-- Specific instructions for reviewers -->

1. **Pull and test locally:**

   ```bash
   git checkout [branch-name]
   npm install
   npm run dev
   ```

2. **Test the specific changes:**

   - Navigate to affected pages/components
   - Test functionality described in this PR
   - Verify no regressions in existing features

3. **Check compliance:**
   - Run `npm run lint:colors` to verify color usage
   - Test theme switching if UI changes were made
   - Verify accessibility with keyboard navigation

---

**By submitting this PR, I confirm that:**

- [ ] I have read and followed the [Contributing Guidelines](CONTRIBUTING.md)
- [ ] I have tested my changes thoroughly
- [ ] I have considered the impact on existing users
- [ ] I am willing to address feedback and make necessary changes
