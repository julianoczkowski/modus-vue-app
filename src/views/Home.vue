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

    <div class="features-section">
      <div class="features-container">
        <div class="feature-item">
          <div class="feature-content">
            <i class="modus-icons feature-icon-small">coffee_cup</i>
            <div class="feature-text">
              <h4>Rich Components</h4>
              <p>40+ production-ready components</p>
            </div>
          </div>
          <router-link to="/button-demo" class="feature-link">
            <modus-wc-button color="primary"> Check Buttons </modus-wc-button>
          </router-link>
        </div>

        <div class="feature-item">
          <div class="feature-content">
            <i class="modus-icons feature-icon-small">palette</i>
            <div class="feature-text">
              <h4>Theme Support</h4>
              <p>Light & dark themes with variants</p>
            </div>
          </div>
          <modus-wc-button color="secondary" size="sm" @click="cycleTheme">
            <i class="modus-icons" style="margin-right: 6px">brightness</i>
            Try Themes
          </modus-wc-button>
        </div>
      </div>
    </div>

    <div class="video-section">
      <div class="video-header">
        <h2>About this Boilerplate</h2>
        <p>Watch this video to discover more about this boilerplate</p>
      </div>
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/aG7Eu7SkKZA?si=KDI-XcSlRNr70bS5"
          title="Boilerplate Video"
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

.features-section {
  margin-bottom: 2rem;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.feature-item {
  background-color: var(--modus-wc-color-base-100);
  border: 1px solid var(--modus-wc-color-base-200);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.feature-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
}

.feature-icon-small {
  font-size: 1.5rem;
  color: var(--modus-wc-color-base-content);
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.feature-text {
  flex: 1;
}

.feature-text h4 {
  color: var(--modus-wc-color-base-content);
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.feature-text p {
  color: var(--modus-wc-color-base-content);
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.8;
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

  .features-container {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .feature-item {
    padding: 1.25rem;
  }

  .feature-content {
    gap: 0.75rem;
  }

  .feature-icon-small {
    font-size: 1.25rem;
  }

  .feature-text h4 {
    font-size: 1rem;
  }

  .feature-text p {
    font-size: 0.85rem;
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
