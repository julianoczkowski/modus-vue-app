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
          <router-link to="/about" class="nav-link">About</router-link>
        </div>
        <div class="theme-controls">
          <modus-wc-dropdown-menu
            ref="themeDropdown"
            button-size="md"
            button-variant="primary"
            menu-placement="bottom-end"
            @menuVisibilityChange="handleMenuVisibility"
            class="theme-dropdown"
          >
            <div slot="button" class="theme-button-content">
              <span class="theme-label">{{ getCurrentThemeLabel() }}</span>
              <i class="modus-icons theme-arrow">expand_more</i>
            </div>
            <div slot="menu">
              <modus-wc-menu-item
                v-for="option in themeOptions"
                :key="option.value"
                :label="option.label"
                :value="option.value"
                :selected="currentTheme === option.value"
                @itemSelect="handleThemeSelect"
              />
            </div>
          </modus-wc-dropdown-menu>
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
        <div class="footer-links">
          <a
            href="https://github.com/julianoczkowski/modus-vue-app"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link"
          >
            <img
              src="/github-mark.svg"
              alt="GitHub"
              class="github-icon github-icon-light"
            />
            <img
              src="/github-mark-white.svg"
              alt="GitHub"
              class="github-icon github-icon-dark"
            />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const currentTheme = ref("modus-classic-light");
const themeDropdown = ref<HTMLElement | null>(null);

// Theme options for the Modus dropdown component
const themeOptions = [
  { label: "Classic Light", value: "modus-classic-light" },
  { label: "Classic Dark", value: "modus-classic-dark" },
  { label: "Modern Light", value: "modus-modern-light" },
  { label: "Modern Dark", value: "modus-modern-dark" },
];

// Get the label for the current theme
const getCurrentThemeLabel = () => {
  const theme = themeOptions.find(
    (option) => option.value === currentTheme.value
  );
  return theme ? theme.label : "Theme";
};

// Handle theme selection from dropdown menu
const handleThemeSelect = (event: CustomEvent) => {
  const selectedValue = event.detail.value;
  if (selectedValue && selectedValue !== currentTheme.value) {
    currentTheme.value = selectedValue;
    document.documentElement.setAttribute("data-theme", selectedValue);
    localStorage.setItem("modus-theme", selectedValue);

    // Close the dropdown
    if (themeDropdown.value) {
      (themeDropdown.value as any).menuVisible = false;
    }
  }
};

// Handle dropdown menu visibility changes
const handleMenuVisibility = (event: CustomEvent) => {
  // Optional: Add any logic when menu opens/closes
  console.log("Menu visibility:", event.detail.isVisible);
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

.theme-controls {
  display: flex;
  align-items: center;
}

.theme-dropdown {
  min-width: 140px;
}

.theme-button-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 120px;
}

.theme-label {
  flex: 1;
  text-align: left;
  white-space: nowrap;
}

.theme-arrow {
  margin-left: 8px;
  font-size: 18px;
  flex-shrink: 0;
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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
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

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-link {
  color: var(--modus-wc-color-base-content);
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--modus-wc-color-base-content);
}

.github-icon {
  width: 20px;
  height: 20px;
  margin-right: 6px;
}

/* Theme-based icon switching */
.github-icon-light {
  display: block;
}

.github-icon-dark {
  display: none;
}

/* Dark theme icon switching */
[data-theme="modus-classic-dark"] .github-icon-light,
[data-theme="modus-modern-dark"] .github-icon-light {
  display: none;
}

[data-theme="modus-classic-dark"] .github-icon-dark,
[data-theme="modus-modern-dark"] .github-icon-dark {
  display: block;
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

/* Responsive footer */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }

  .footer-logo {
    justify-content: center;
  }

  .footer-links {
    justify-content: center;
  }
}
</style>
