import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Default",
    component: () => import("@/components/layout/Landing.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home/index.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/About/index.vue"),
      },
    ],
  },
  {
    path: "/catchAll(.*)",
    component: () => import("@/views/NotFound/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
