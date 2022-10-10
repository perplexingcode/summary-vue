import { createRouter, createWebHistory } from 'vue-router';
import ExamplePage from '../views/ExamplePage';
import GetMints from '../views/GetMints.vue';

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
  {
    //△ Required param num
    path: '/get-mints/:num',
    //△ Optional param num
    //path: '/get-mints/:num?',
    //△ Caveat: If the route is a required param (eg. /:num), then there will be no / route registered and therefore no route function will be called, unless you change it to optional param (eg. /:num?)

    name: 'GetMints',
    component: GetMints,
    //△ Transform URL parameters (Props Function Mode)
    props: (route) => ({ number: parseInt(route.params.num) || 9 }),

    //△ No transformation version for a default value (Props Object Mode)
    // props: { num: 3 }

    // △ Props Function for complex logics
    // props: (route) => {
    //   let num = 0;
    //   //    ... some operations
    //   return { num };
    // },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
