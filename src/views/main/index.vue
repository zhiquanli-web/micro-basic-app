<template>
  <div class="main-container">
    <a-layout>
      <a-layout-header :style="{ height: '48px' }" class="header">
        <LayoutHeader />
      </a-layout-header>
      <a-layout class="content">
        <a-layout-sider width="200" style="background: #fff">
          <LayoutMenu />
        </a-layout-sider>
        <a-layout-content class="content-view">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LayoutHeader from '@/components/layout/header/index.vue';
import LayoutMenu from '@/components/layout/menu/index.vue';
export default defineComponent({
  name: 'mainView',
  components: {
    LayoutHeader,
    LayoutMenu
  },
  setup() {
    const isCollapse = ref(false);
    return {
      isCollapse
    };
  }
});
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  & > .ant-layout {
    height: 100%;
  }
  .header {
    background: #001529;
    box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
    transition: all 0.3s;
    padding: 0 16px;
  }
  .content {
    height: calc(100% - 48px);
    .content-view {
      padding: 20px 20px 0;
    }
    .ant-layout-content {
      border-radius: 14px;
    }
  }
}
</style>
