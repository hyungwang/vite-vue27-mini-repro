import VueRouter from "vue-router";
import Vue from "vue";
import IndexPage from "./../pages/index.vue";
import AboutPage from "./../pages/about.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: "/",
  routes: [
    {
      // component: () => import("./../pages/index.vue"),
      component: IndexPage,
      path: "/",
      name: "main",
    },
    {
      path: "/about",
      name: "about",
      // component: () => import("./../pages/about.vue"),
      component: AboutPage,
    },
  ],
});

export default router;
