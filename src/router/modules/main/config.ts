import { RouteRecordRaw } from 'vue-router';
const configRoutes: Array<RouteRecordRaw> = [
  {
    path: '/main/config',
    name: 'config',
    meta: {
      title: '配置',
      icon: 'SettingOutlined',
      url: '/main/config',
      sort: 3
    },
    component: () => import('@/views/main/config/index.vue')
  }
];

export default configRoutes;
