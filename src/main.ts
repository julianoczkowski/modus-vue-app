import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router/index";

// Import Modus styles and icons
import "@trimble-oss/moduswebcomponents/modus-wc-styles.css";
import "@trimble-oss/modus-icons/dist/field-systems/fonts/modus-icons.css";

// Import and register Modus Web Components
import { defineCustomElements } from "@trimble-oss/moduswebcomponents/loader";

// Register all Modus Web Components
defineCustomElements();

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create and mount the Vue app
const app = createApp(App);
app.use(router);
app.mount("#app");
