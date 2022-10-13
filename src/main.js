import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';

// △ Create a global reative object for data storage
const GStore = reactive({ flashMessage: '' });


createApp(App).use(router).provide('GStore', GStore).mount('#app');
