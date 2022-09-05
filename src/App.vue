<template>
  <div class="app">
    <a-config-provider :locale="locale">
      <router-view></router-view>
    </a-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
export default defineComponent({
  name: 'App',
  setup() {
    return {
      locale: zhCN
    };
  }
});
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
}
</style>
