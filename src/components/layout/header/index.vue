<template>
  <div class="header-container">
    <div class="icon-title">
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        alt="log"
        height="28"
      />
      <span class="title">后台管理系统</span>
    </div>
    <Info />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Info from './info.vue';
export default defineComponent({
  name: 'headerComp',
  components: {
    Info
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  height: 48px;
  line-height: 48px;
  justify-content: space-between;
  .icon-title {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    min-width: 210px;
    .title {
      font-weight: bold;
      color: #fff;
      font-size: 18px;
      margin-left: 10px;
    }
  }
}
</style>
