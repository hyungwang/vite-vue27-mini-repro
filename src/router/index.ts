import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      component: () => import("../pages/index.vue"),
      path: "/",
      name: "main"
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/about.vue")
    }
  ]
});

export default router;
