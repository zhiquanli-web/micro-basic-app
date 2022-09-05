import { RouteRecordRaw } from 'vue-router';

const mainStaticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/main/home',
    name: 'home',
    meta: { title: '首页', icon: 'HomeFilled', url: '/main/home', sort: 1 },
    component: () => import('@/views/main/home/index.vue')
  }
];

export { mainStaticRoutes };
