import { createRouter, createWebHistory } from 'vue-router';
import DataStx from '../views/DataStx.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/data',
    name: 'Data',
    component: DataStx,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
