import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { mainStaticRoutes } from './modules';
import localCache from '@/utils/catch';
import { tokenKey } from '@/common';
import { firstMenuPath } from '@/utils/mapMenus';
import { childsFirstRoutes } from './modules/childs/first';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "main" */ '@/views/main/index.vue'),
    children: [...mainStaticRoutes]
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  },
  ...childsFirstRoutes,
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/404.vue')
  }
];

console.log('BASE_URL', process.env.BASE_URL);

const router = createRouter({
  // 设置主应用基础路由为base(用于后续部署)，则子应用基础路由(baseroute)为/base/xxx
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  const token = localCache.getCache(tokenKey);
  const isToLogin = to.path === '/login';
  if (token) {
    isToLogin && router.push('/');
  } else {
    !isToLogin && router.push('/login');
  }
  if (to.path === '/main') {
    return firstMenuPath;
  }
});

export default router;
