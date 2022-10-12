import { createRouter, createWebHistory } from 'vue-router';
import GetMints from '../views/GetMints.vue';
import MintLayout from '../views/mints/MintLayout.vue';
import MintIntro from '../views/mints/MintIntro.vue';
import MintInfo from '../views/mints/MintInfo.vue';
import MintExamples from '../views/mints/MintExamples.vue';

const routes = [
  //Alias vs Redirect
  // Alias is more handy but can be penalized in SEO because Google might think you have duplicate contents.
  {
    path: '/',
    name: 'Home',
    //△ Alias = keep the url
    // alias: '/home'
  },
  //△ Redirect => changes url
  {
    path: '/home',
    redirect: '/'
  },

  //Redirect routes with params

  {
    path: '/mints/products/:id',
    name: 'MintProduct'
  },
  //
  {
    path: '/mints/product/:id',
    redirect: () => ({ name: 'MintProduct' })
  },
  // Id is a required param so it can be omitted, △ full form below: 
  // {
  //   path: '/mints/product/:id',
  //   redirect: url => ({ name: 'MintProduct', params: { id: url.params.id } })
  // },

  //Redirect nested routes with params
  // eg. /mints/proudcts/:id/product
  // △ Method 1:
  // {
  //   path: '/mints/product/:id',
  //   redirect: () => ({ name: 'MintProduct' }),
  //   children: [
  //     { path: 'brand', redirect: () => ({ name: 'MintBrand' }) },
  //     { path: 'flavour', redirect: () => ({ name: 'MintFlavour' }) }
  //   ]
  // },

  // △ Method 2:
  // {
  //   path: '/mints/product/:restOfUrl(.*)',
  //   redirect: (url) => ({ path: '/mints/products/' + url.params.restOfUrl })
  // },

  //

  {
    path: '/example',
    name: 'ExamplePage',
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
  {
    path: '/mints',
    name: 'MintLayout',
    redirect: '/mints/', //Default child
    component: MintLayout,
    props: (route) => ({ number: parseInt(route.params.num) || 9 }),
    children: [
      {
        path: '',
        name: 'MintIntro',
        component: MintIntro,
      },
      {
        path: 'info',
        name: 'MintInfo',
        component: MintInfo,
      },
      {
        path: 'examples',
        name: 'MintExamples',
        component: MintExamples,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
