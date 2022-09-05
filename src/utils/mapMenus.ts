import { mainStaticRoutes } from '@/router/modules';

import { RouteRecord } from 'vue-router';

let firstMenuPath = '';
export function mapMenusToRoutes(userMenus: any[]): RouteRecord[] {
  const routes: any[] = [];
  // 加载所有菜单路由
  const allRoutes: RouteRecord[] = [];
  const routeFiles = require.context(`../router/modules/main`, true, /\.ts$/);
  routeFiles.keys().forEach((key) => {
    const route = require(`../router/modules/main` + key.split('.')[1]).default;
    allRoutes.push(...route);
  });
  // 根据权限菜单获取routes
  const _filterPermissionRoutes = (routes: any[]) => {
    if (!routes || routes.length === 0 || !userMenus || userMenus.length === 0)
      return [];
    const routeList = routes.filter((route) => {
      let curRoute: any = {};
      userMenus.forEach((menu) => {
        if (menu.path === route.path) {
          curRoute = route;
          if (route.children && route.children.length > 0) {
            route.children = _filterPermissionRoutes(route.children);
          }
        }
      });
      if (Object.keys(curRoute).length > 0) return true;
    });
    return routeList;
  };
  const permissionRoutes: any[] = _filterPermissionRoutes(allRoutes);
  // 静态路由(白名单路由) 与 权限路由 集合
  Object.assign(routes, [...mainStaticRoutes, ...permissionRoutes]);
  routes.sort((a, b) => a.meta.sort - b.meta.sort);
  if (routes && routes.length > 0) {
    firstMenuPath = routes[0].redirect ?? routes[0].path;
  }
  return routes;
}

export { firstMenuPath };
