<template>
  <div class="home-container">
    <h2>icon图标的使用</h2>
    <h3 class="title">1. antd自带icon</h3>
    <section class="content">
      <LoginOutlined :style="{ 'font-size': '20px', color: '#f60' }" />
      <UserOutlined />
      <component :is="`LoginOutlined`" />
    </section>
    <h3 class="title">2. 自定义svg图标</h3>
    <section class="content">
      <icon-custom-logo width="30px" height="30px" />
    </section>
    <h3 class="title">3. iconify图集</h3>
    <section class="content">
      <icon-ph-alien />
      <icon-ph-anchor-bold />
      <icon-mdi-account-plus />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'homeView',
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped></style>
