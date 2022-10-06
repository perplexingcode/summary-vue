import { createRouter, createWebHistory } from 'vue-router';
import ExamplePage from '../views/ExamplePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/example',
    name: 'ExamplePage',
    component: ExamplePage,
    // component: () => import('../views/ExamplePage.vue'), //deferred import for better performance, the view is then compiled to separate files (x.js & x.js.map in /dist/js).
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
