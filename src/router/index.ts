import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Top from '../components/Top.vue';
import Death from '../views/Death.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Top',
    component: Top,
  },
  {
    path: '/correctjp',
    name: 'Correctjp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Correctjp.vue'),
  },
  {
    path: '/death',
    name: 'Death',
    component: Death,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
