import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import "../assets/colors/colors.css"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "Charts",
    component: Home
  },
  {
    path: "/",
    name: "Help",
    component: Home
  },
  {
    path: "/",
    name: "Signups",
    component: Home
  },
  {
    path: "/",
    name: "Signups",
    component: Home
  },
  {
    path: "/",
    name: "investments",
    component: Home
  },
  {
    path: "/",
    name: "Revenue",
    component: Home
  },
  {
    path: "/",
    name: "Exits",
    component: Home
  },
  {
    path: "/",
    name: "Trades",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
