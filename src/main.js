import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';
import 'nprogress/nprogress.css'
import GetMintsStore from './store/GetMintsStore'

// Create a global reative object for data storage
const GStore = reactive({ flashMessage: '' });

//○○○  Fix router objects empty issue
const app = createApp(App)
app.use(router)
  .provide('GStore', GStore)
  .provide('GetMintsStore', GetMintsStore)

router.isReady().then(() => {
  app.mount('#app');
})

