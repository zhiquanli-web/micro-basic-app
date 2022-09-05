const globalConfig = {
  projectName: 'vue-admin-template'
};

const childAppConfig: any = {
  first: 'http://localhost:8010'
};

// 线上环境地址
if (!/localhost/.test(window.location.href)) {
  // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
  Object.keys(childAppConfig).forEach((key) => {
    childAppConfig[key] = window.location.origin;
  });
}

export { globalConfig };
export default childAppConfig;
