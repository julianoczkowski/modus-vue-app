import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import ButtonDemo from "@/views/ButtonDemo.vue";
import About from "@/views/About.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/button-demo",
    name: "ButtonDemo",
    component: ButtonDemo,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

export default routes;
