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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
