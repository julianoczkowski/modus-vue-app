<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-logo">
        <img src="/vue-logo.svg" alt="Vue.js Logo" class="vue-logo-large" />
      </div>
      <h1 class="hero-title">Welcome to Modus 2.0 Vue App</h1>
      <p class="hero-subtitle">
        A boilerplate for building Vue 3 applications with Modus. If you can see
        this page, example components, icons and theme switching you have
        successfully installed the boilerplate.
      </p>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">
          <i class="modus-icons">coffee_cup</i>
        </div>
        <h3>Rich Component Library</h3>
        <p>
          Access to 40+ production-ready components from the Modus Design System
        </p>
        <router-link to="/button-demo" class="feature-link">
          <modus-wc-button color="primary">
            <i class="modus-icons" style="margin-right: 8px">launch</i>
            Check Buttons
          </modus-wc-button>
        </router-link>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <i class="modus-icons">palette</i>
        </div>
        <h3>Theme Support</h3>
        <p>Built-in light and dark themes with modern and classic variants</p>
        <modus-wc-button color="secondary" @click="cycleTheme">
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
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <i class="modus-icons">code</i>
        </div>
        <h3>TypeScript Ready</h3>
        <p>Full TypeScript support with comprehensive type definitions</p>
      </div>
    </div>

    <div class="video-section">
      <div class="video-header">
        <h2>Learn More About Vue.js</h2>
        <p>Watch this video to discover more about Vue.js and its ecosystem</p>
      </div>
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/aG7Eu7SkKZA?si=KDI-XcSlRNr70bS5"
          title="Vue.js Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="video-iframe"
        ></iframe>
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
  background-color: var(--modus-wc-color-base-100);
  border: 1px solid var(--modus-wc-color-base-200);
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
  color: var(--modus-wc-color-base-content);
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
  background-color: var(--modus-wc-color-base-100);
  border-radius: 8px;
  padding: 2rem;
  margin-top: 3rem;
}

.quick-start h2 {
  color: var(--modus-wc-color-base-content);
  margin-bottom: 1rem;
}

.quick-start p {
  color: var(--modus-wc-color-base-content);
  margin-bottom: 1.5rem;
}

.code-example {
  background-color: var(--modus-wc-color-base-page);
  border: 1px solid var(--modus-wc-color-base-200);
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
  border: 1px solid var(--modus-wc-color-base-200);
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

/* Video Section Styles */
.video-section {
  margin-top: 4rem;
  margin-bottom: 3rem;
}

.video-header {
  text-align: center;
  margin-bottom: 2rem;
}

.video-header h2 {
  color: var(--modus-wc-color-base-content);
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.video-header p {
  color: var(--modus-wc-color-base-content);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--modus-wc-color-base-100);
  border: 1px solid var(--modus-wc-color-base-200);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  aspect-ratio: 16 / 9;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
}

/* Responsive video styles */
@media (max-width: 768px) {
  .video-section {
    margin-top: 3rem;
  }

  .video-header h2 {
    font-size: 1.6rem;
  }

  .video-header p {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .video-container {
    margin: 0 1rem;
    max-width: calc(100% - 2rem);
  }
}
</style>
