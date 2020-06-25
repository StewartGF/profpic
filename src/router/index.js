import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../components/Landing.vue";
import Instagram from "../components/Instagram.vue";
import Tumblr from "../components/Tumblr.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Landing,
  },
  {
    path: "/instagram",
    name: "Instagram",
    component: Instagram,
  },
  {
    path: "/tumblr",
    name: "Tumblr",
    component: Tumblr,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
