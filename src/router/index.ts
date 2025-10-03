import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import ButtonDemo from "@/views/ButtonDemo.vue";

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
];

export default routes;
