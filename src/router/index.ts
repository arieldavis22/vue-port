import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// Lazy Loading
const HomeView = () => import("../views/HomeView.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
