<template>
  <a-sub-menu :key="route.path">
    <template #icon v-if="route.meta.icon">
      <component :is="route.meta.icon"></component>
    </template>
    <template #title>{{ route.meta.title }}</template>
    <template v-for="item in route.children" :key="item.path">
      <template v-if="!item.children || item.children.length === 0">
        <a-menu-item :key="item.path">
          <template #icon v-if="item.meta.icon">
            <component :is="item.meta.icon"></component>
          </template>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :route="item" :key="item.path" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SubMenu',
  props: {
    route: {
      type: Object,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped></style>
