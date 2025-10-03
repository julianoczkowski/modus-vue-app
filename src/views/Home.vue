<template>
  <div class="home">
    <div class="hero-section">
      <h1 class="hero-title">Welcome to Modus Vue Components</h1>
      <p class="hero-subtitle">
        A comprehensive demonstration of Modus 2 Web Components integrated with
        Vue 3
      </p>

      <!-- Demo alert using Modus component -->
      <modus-wc-alert
        variant="success"
        alert-title="Setup Complete!"
        dismissible
      >
        Your Modus Vue application is ready to use. Explore the components and
        features below.
      </modus-wc-alert>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">
          <i class="modus-icons">components</i>
        </div>
        <h3>Rich Component Library</h3>
        <p>
          Access to 40+ production-ready components from the Modus Design System
        </p>
        <router-link to="/button-demo" class="feature-link">
          <modus-wc-button color="primary" variant="outlined">
            <i class="modus-icons" style="margin-right: 8px">launch</i>
            Explore Components
          </modus-wc-button>
        </router-link>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <i class="modus-icons">palette</i>
        </div>
        <h3>Theme Support</h3>
        <p>Built-in light and dark themes with modern and classic variants</p>
        <modus-wc-button
          color="secondary"
          variant="outlined"
          @click="cycleTheme"
        >
          <i class="modus-icons" style="margin-right: 8px">brightness</i>
          Try Themes
        </modus-wc-button>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <i class="modus-icons">accessibility</i>
        </div>
        <h3>Accessibility First</h3>
        <p>WCAG 2.1 AA compliant components with proper ARIA support</p>
        <modus-wc-button color="tertiary" variant="outlined">
          <i class="modus-icons" style="margin-right: 8px">check_circle</i>
          Learn More
        </modus-wc-button>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <i class="modus-icons">code</i>
        </div>
        <h3>TypeScript Ready</h3>
        <p>Full TypeScript support with comprehensive type definitions</p>
        <modus-wc-button color="warning" variant="outlined">
          <i class="modus-icons" style="margin-right: 8px">launch</i>
          View Docs
        </modus-wc-button>
      </div>
    </div>

    <div class="quick-start">
      <h2>Quick Start Example</h2>
      <p>
        Here's how easy it is to use Modus components in your Vue application:
      </p>

      <div class="code-example">
        <pre><code>&lt;template&gt;
  &lt;modus-wc-button color="primary" @click="handleClick"&gt;
    &lt;i class="modus-icons"&gt;save_disk&lt;/i&gt;
    Save Changes
  &lt;/modus-wc-button&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
const handleClick = () =&gt; {
  console.log('Button clicked!')
}
&lt;/script&gt;</code></pre>
      </div>

      <div class="example-result">
        <h3>Result:</h3>
        <modus-wc-button color="primary" @click="handleExampleClick">
          <i class="modus-icons" style="margin-right: 8px">save_disk</i>
          Save Changes
        </modus-wc-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const themes = [
  "modus-classic-light",
  "modus-classic-dark",
  "modus-modern-light",
  "modus-modern-dark",
];
let currentThemeIndex = 0;

const cycleTheme = () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  const newTheme = themes[currentThemeIndex];
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("modus-theme", newTheme);
};

const handleExampleClick = () => {
  console.log("Example button clicked!");
  // You could show a toast notification here
};
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 2.5rem;
  color: var(--modus-wc-color-primary);
  margin-bottom: 1rem;
  font-weight: 600;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--modus-wc-color-base-content);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.feature-card {
  background-color: var(--modus-wc-color-bg-2);
  border: 1px solid var(--modus-wc-color-border);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  color: var(--modus-wc-color-primary);
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: var(--modus-wc-color-base-content);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: var(--modus-wc-color-base-content);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.feature-link {
  text-decoration: none;
}

.quick-start {
  background-color: var(--modus-wc-color-bg-2);
  border-radius: 8px;
  padding: 2rem;
  margin-top: 3rem;
}

.quick-start h2 {
  color: var(--modus-wc-color-primary);
  margin-bottom: 1rem;
}

.quick-start p {
  color: var(--modus-wc-color-base-content);
  margin-bottom: 1.5rem;
}

.code-example {
  background-color: var(--modus-wc-color-base-page);
  border: 1px solid var(--modus-wc-color-border);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
}

.code-example pre {
  margin: 0;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 0.9rem;
  line-height: 1.4;
  color: var(--modus-wc-color-base-content);
}

.example-result {
  padding: 1rem;
  border: 1px solid var(--modus-wc-color-border);
  border-radius: 4px;
  background-color: var(--modus-wc-color-base-page);
}

.example-result h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--modus-wc-color-base-content);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    padding: 1.5rem;
  }
}
</style>
