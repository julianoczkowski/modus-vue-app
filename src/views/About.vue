<template>
  <div class="about">
    <div class="hero-section">
      <div class="hero-logo">
        <img src="/vue-logo.svg" alt="Vue.js Logo" class="vue-logo-large" />
      </div>
      <h1 class="hero-title">About This Boilerplate</h1>
      <p class="hero-subtitle">
        A comprehensive starter template with built-in AI development tools,
        automated code quality checks, and complete Modus Design System
        integration.
      </p>
    </div>

    <div class="content-section">
      <!-- Always Applied Rules Section -->
      <div class="rules-section">
        <div class="section-header">
          <h2>Always Applied Rules</h2>
        </div>
        <p class="section-description">
          These development standards are automatically enforced in every
          project:
        </p>

        <div class="rules-list">
          <div class="rule-item">
            <i class="modus-icons">palette</i>
            <div class="rule-content">
              <h3>Color Usage</h3>
              <p>
                Enforces the 9 approved Modus colors and prevents hardcoded
                values
              </p>
            </div>
          </div>

          <div class="rule-item">
            <i class="modus-icons">components</i>
            <div class="rule-content">
              <h3>Modus Web Components</h3>
              <p>
                Guidelines for proper component implementation with MCP
                documentation
              </p>
            </div>
          </div>

          <div class="rule-item">
            <i class="modus-icons">code</i>
            <div class="rule-content">
              <h3>Vue Component Creation</h3>
              <p>
                Best practices for Vue 3 component architecture and CSS patterns
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Context-Specific Rules Section -->
      <div class="context-rules-section">
        <div class="section-header">
          <h2>Context-Specific Rules</h2>
        </div>

        <div class="rules-list">
          <div class="rule-item">
            <i class="modus-icons">star</i>
            <div class="rule-content">
              <h3>Modus Icons</h3>
              <p>Complete icon system with 500+ validated icon names</p>
            </div>
          </div>

          <div class="rule-item">
            <i class="modus-icons">bug_report</i>
            <div class="rule-content">
              <h3>Chrome DevTools Testing</h3>
              <p>
                Browser debugging integration via MCP for implementation testing
              </p>
            </div>
          </div>
        </div>

        <div class="location-note">
          <i class="modus-icons">folder_open</i>
          <span
            ><strong>Location:</strong> All rules are stored in
            <code>.cursor/rules/</code> and automatically guide your development
            workflow through AI assistants.</span
          >
        </div>
      </div>

      <!-- MCP Servers Section -->
      <div class="mcp-section">
        <div class="section-header">
          <h2>MCP Servers Included</h2>
        </div>
        <p class="section-description">
          Pre-configured AI development tools that supercharge your workflow:
        </p>

        <div class="mcp-list">
          <div class="mcp-item">
            <i class="modus-icons">server</i>
            <div class="mcp-content">
              <h3>Context7</h3>
              <p>Advanced context management for AI assistants</p>
            </div>
          </div>

          <div class="mcp-item">
            <i class="modus-icons">code</i>
            <div class="mcp-content">
              <h3>Chrome DevTools</h3>
              <p>Browser debugging integration via MCP</p>
            </div>
          </div>

          <div class="mcp-item">
            <i class="modus-icons">help</i>
            <div class="mcp-content">
              <h3>Modus Documentation</h3>
              <p>
                Direct access to complete Modus Web Components documentation
                through AI
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Development Standards Section -->
      <div class="standards-section">
        <div class="section-header">
          <h2>Development Rules & Standards</h2>
        </div>

        <div class="standards-list">
          <div class="standard-item">
            <i class="modus-icons">clipboard</i>
            <div class="standard-content">
              <h3>Cursor Rules</h3>
              <p>Pre-configured development patterns and best practices</p>
            </div>
          </div>

          <div class="standard-item">
            <i class="modus-icons">check_circle</i>
            <div class="standard-content">
              <h3>Code Quality</h3>
              <p>Automated linting, formatting, and type checking</p>
            </div>
          </div>

          <div class="standard-item">
            <i class="modus-icons">launch</i>
            <div class="standard-content">
              <h3>AI-Optimized Workflow</h3>
              <p>Seamless integration with modern AI coding assistants</p>
            </div>
          </div>
        </div>

        <div class="cursor-note">
          <i class="modus-icons">info</i>
          <span
            ><strong>Note:</strong> The <code>.cursor/</code> directory contains
            MCP server configurations and development rules that enhance your
            AI-assisted development experience.</span
          >
        </div>
      </div>

      <!-- What's Included Section -->
      <div class="included-section">
        <div class="section-header">
          <i class="modus-icons">list_bulleted</i>
          <h2>What's Included</h2>
        </div>
        <p class="section-description">
          Complete foundation for building Vue.js applications with Modus Web
          Components:
        </p>

        <div class="included-grid">
          <div class="included-column">
            <div class="included-item">
              <i class="modus-icons">check</i>
              <span
                ><strong>Vue 3 + TypeScript</strong> - Modern framework with
                full type safety</span
              >
            </div>
            <div class="included-item">
              <i class="modus-icons">check</i>
              <span
                ><strong>Modus 2 Web Components</strong> - Complete integration
                with the latest Modus design system</span
              >
            </div>
            <div class="included-item">
              <i class="modus-icons">check</i>
              <span
                ><strong>Standard Icon Usage</strong> - Official Modus icon
                implementation with CDN delivery</span
              >
            </div>
            <div class="included-item">
              <i class="modus-icons">check</i>
              <span
                ><strong>Theme Switching</strong> - Support for all Modus themes
                (Classic/Modern, Light/Dark)</span
              >
            </div>
            <div class="included-item">
              <i class="modus-icons">check</i>
              <span
                ><strong>Component Examples</strong> - Comprehensive demos of
                buttons, icons, alerts, and more</span
              >
            </div>
          </div>

          <div class="included-column">
            <div class="included-item">
              <i class="modus-icons">check</i>
              <span
                ><strong>Interactive Demos</strong> - Live component builder and
                event handling examples</span
              >
            </div>
            <div class="included-item">
              <i class="modus-icons">check</i>
              <span
                ><strong>Accessibility</strong> - WCAG 2.1 AA compliant with
                proper ARIA support</span
              >
            </div>
            <div class="included-item">
              <i class="modus-icons">check</i>
              <span
                ><strong>Performance Optimized</strong> - Code splitting, lazy
                loading, and optimized builds</span
              >
            </div>
            <div class="included-item">
              <i class="modus-icons">check</i>
              <span
                ><strong>Development Tools</strong> - ESLint, Prettier, and hot
                module replacement configured</span
              >
            </div>
            <div class="included-item">
              <i class="modus-icons">check</i>
              <span
                ><strong>Production Ready</strong> - Optimized build
                configuration and deployment setup</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No complex logic needed for this informational page
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-section {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-logo {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vue-logo-large {
  width: 120px;
  height: 120px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;
}

.vue-logo-large:hover {
  transform: scale(1.05);
}

.hero-title {
  font-size: 2.5rem;
  color: var(--modus-wc-color-base-content);
  margin-bottom: 1rem;
  font-weight: 600;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--modus-wc-color-base-content);
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.8;
}

.content-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* Section Headers */
.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.section-header i {
  font-size: 1.8rem;
  color: var(--modus-wc-color-info);
}

.section-header h2 {
  color: var(--modus-wc-color-base-content);
  font-size: 1.8rem;
  margin: 0;
  font-weight: 600;
}

.section-description {
  color: var(--modus-wc-color-base-content);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
}

/* Rules Lists */
.rules-list,
.mcp-list,
.standards-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rule-item,
.mcp-item,
.standard-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-left: 3px solid var(--modus-wc-color-info);
  background-color: var(--modus-wc-color-base-100);
  border-radius: 0 8px 8px 0;
}

.rule-item i,
.mcp-item i,
.standard-item i {
  font-size: 1.5rem;
  color: var(--modus-wc-color-base-content);
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.rule-content h3,
.mcp-content h3,
.standard-content h3 {
  color: var(--modus-wc-color-base-content);
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.rule-content p,
.mcp-content p,
.standard-content p {
  color: var(--modus-wc-color-base-content);
  margin: 0;
  line-height: 1.5;
  opacity: 0.8;
}

/* Notes */
.location-note,
.cursor-note {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: var(--modus-wc-color-base-200);
  border-radius: 8px;
}

.location-note i,
.cursor-note i {
  font-size: 1.2rem;
  color: var(--modus-wc-color-base-content);
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.location-note span,
.cursor-note span {
  color: var(--modus-wc-color-base-content);
  font-size: 0.9rem;
  line-height: 1.5;
}

.location-note code,
.cursor-note code {
  background-color: var(--modus-wc-color-base-300);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.85rem;
}

/* What's Included Grid */
.included-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.included-column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.included-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.included-item i {
  font-size: 1.2rem;
  color: var(--modus-wc-color-success);
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.included-item span {
  color: var(--modus-wc-color-base-content);
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .section-header i {
    font-size: 1.5rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .included-grid {
    grid-template-columns: 1fr;
  }

  .rule-item,
  .mcp-item,
  .standard-item {
    flex-direction: column;
    gap: 0.75rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
