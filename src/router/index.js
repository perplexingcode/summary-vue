import { createRouter, createWebHistory } from 'vue-router';
import ExamplePage from '../views/ExamplePage.vue';
import OpenGifts from '../views/OpenGifts.vue';

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
  {
    path: '/open-gifts/',
    name: 'OpenGifts',
    component: OpenGifts,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    // props: (route) => {
    //   let page = parseInt(route.query.page) || 1;
    //   return { page };
    // },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
