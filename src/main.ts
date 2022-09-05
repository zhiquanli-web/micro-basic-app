import { createApp } from 'vue';
import microApp from '@micro-zoe/micro-app';
import 'normalize.css';
import '@/assets/styles/index.scss';
import 'ant-design-vue/dist/antd.css';

microApp.start();

import App from './App.vue';
import router from './router';
import store, { setupStore } from './store';
import { globalRegister } from '@/registers/index';
setupStore();

const app = createApp(App);
app.use(globalRegister).use(store).use(router);
app.mount('#app');
