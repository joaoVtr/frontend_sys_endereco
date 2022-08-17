import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/cep",
    name: "cep",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/search/CepView.vue"),
  },
  {
    path: "/logradouro",
    name: "logradouro",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/search/LogradouroView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
