<template>
  <div class="menu-container">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @click="handleClick"
      mode="inline"
    >
      <template v-for="route in menuInfo" :key="route.path">
        <template v-if="!route.children || route.children.length === 0">
          <a-menu-item :key="route.path">
            <template #icon v-if="route.meta.icon">
              <component :is="route.meta.icon"></component>
            </template>
            {{ route.meta.title }}
          </a-menu-item>
        </template>
        <sub-menu :key="route.path" :route="route" v-else></sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SubMenu from './subMenu.vue';
export default defineComponent({
  name: 'navMenuView',
  components: {
    'sub-menu': SubMenu
  },
  setup() {
    // --- 属性 ---
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const menuInfo = computed(() => store.state.user.userMenus);
    const openKeys = ref<any[]>([]);

    const selectedKeys = ref<any[]>([]);

    watch(
      () => route.path,
      (path) => {
        selectedKeys.value = [route.path];
        const keyList: any = path.slice(1).split('/');
        if (keyList.length === 1) return [''];
        for (let index = 0; index < path.length; index++) {
          if (index !== 0 && path[index] === '/') {
            openKeys.value.push(path.substr(0, index));
          }
        }
        openKeys.value.shift();
      },
      {
        immediate: true
      }
    );

    // --- 方法 ---
    const handleClick = (e: Event) => {
      const path = (e as any).key;
      router.push({ path });
    };

    return {
      selectedKeys,
      openKeys,
      menuInfo,
      handleClick
    };
  }
});
</script>

<style lang="scss" scoped>
.menu-container {
  height: 100%;
  overflow: auto;
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
  .ant-menu {
    height: 100%;
  }
}
</style>
