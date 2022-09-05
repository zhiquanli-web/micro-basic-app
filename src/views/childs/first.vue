<template>
  <micro-app name="app1" :url="url" baseroute="/first"></micro-app>
</template>

<script lang="ts">
import childAppConfig from '@/config';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'childrenFirstView',
  setup() {
    const url = `${childAppConfig.first}/child/first/`;
    return {
      url
    };
  }
});
</script>

<style lang="scss" scoped></style>
