import { createApp } from 'vue';
import 'normalize.css';
import '@/assets/styles/index.scss';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue';
import router from './router';
import store, { setupStore } from './store';
import { globalRegister } from '@/registers/index';
setupStore();

const app = createApp(App);
app.use(globalRegister).use(store).use(router);
app.mount('#app');
