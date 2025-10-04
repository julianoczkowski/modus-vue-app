<template>
  <div id="app">
    <!-- Theme switcher for demonstration -->
    <header class="app-header">
      <nav class="nav-container">
        <div class="nav-brand">
          <h2>Modus 2.0 Vue App</h2>
        </div>
        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/button-demo" class="nav-link"
            >Button Demo</router-link
          >
        </div>
        <div class="theme-controls">
          <select
            @change="changeTheme"
            v-model="currentTheme"
            class="theme-selector"
          >
            <option value="modus-classic-light">Classic Light</option>
            <option value="modus-classic-dark">Classic Dark</option>
            <option value="modus-modern-light">Modern Light</option>
            <option value="modus-modern-dark">Modern Dark</option>
          </select>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="/vue-logo.svg" alt="Vue.js Logo" class="vue-logo-small" />
          <span>&copy; 2025 Modus 2.0 Vue App - Built with Vue.js</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const currentTheme = ref("modus-classic-light");

const changeTheme = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const theme = target.value;
  currentTheme.value = theme;
  document.documentElement.setAttribute("data-theme", theme);

  // Store theme preference
  localStorage.setItem("modus-theme", theme);
};

onMounted(() => {
  // Load saved theme preference
  const savedTheme = localStorage.getItem("modus-theme");
  if (savedTheme) {
    currentTheme.value = savedTheme;
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
});
</script>

<style scoped>
.app-header {
  background-color: var(--modus-wc-color-base-page);
  border-bottom: 1px solid var(--modus-wc-color-base-200);
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

.nav-brand h1 {
  color: var(--modus-wc-color-base-content);
  margin: 0;
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: var(--modus-wc-color-base-content);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: var(--modus-wc-color-base-100);
  color: var(--modus-wc-color-base-content);
}

.theme-selector {
  padding: 0.5rem;
  border: 1px solid var(--modus-wc-color-base-200);
  border-radius: 4px;
  background-color: var(--modus-wc-color-base-page);
  color: var(--modus-wc-color-base-content);
}

.main-content {
  min-height: calc(100vh - 140px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.app-footer {
  background-color: var(--modus-wc-color-base-100);
  text-align: center;
  padding: 1rem;
  color: var(--modus-wc-color-base-content);
  border-top: 2px solid var(--modus-wc-color-base-200);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.vue-logo-small {
  width: 24px;
  height: 24px;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

/* Global styles */
:global(body) {
  margin: 0;
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, sans-serif;
  background-color: var(--modus-wc-color-base-page);
  color: var(--modus-wc-color-base-content);
}

:global(#app) {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
