<template>
  <div class="no-found">
    <h2>404!</h2>
    <h3>你要找的页面不见了哦~</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'noFoundView',
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.no-found {
  padding-top: 100px;
  text-align: center;
}
</style>
