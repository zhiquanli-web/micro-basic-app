import { RouteRecordRaw } from 'vue-router';

const childsFirstRoutes: Array<RouteRecordRaw> = [
  {
    path: '/first/:page*',
    name: 'first',
    meta: { title: '子应用1', icon: 'HomeFilled', url: '/first', sort: 4 },
    component: () => import('@/views/childs/first.vue')
  }
];

export { childsFirstRoutes };
