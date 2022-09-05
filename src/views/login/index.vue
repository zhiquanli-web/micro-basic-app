<template>
  <div class="login-container">
    <div class="content">
      <h2 class="title">后台管理系统</h2>
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ style: { width: '100px' } }"
        :wrapper-col="{ style: { width: '330px' } }"
        autocomplete="off"
        @finish="onFinish"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: '请输入用户名' }]"
        >
          <a-input size="large" v-model:value="formState.username" />
        </a-form-item>
        <a-form-item
          name="password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input-password size="large" v-model:value="formState.password" />
        </a-form-item>
        <a-form-item :wrapper-col="{ style: { width: '330px' } }">
          <a-button
            size="large"
            type="primary"
            html-type="submit"
            class="login-btn"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'loginView',
  setup() {
    // --- 属性 ---
    const store = useStore();
    const formState = reactive({
      username: '',
      password: ''
    });
    // --- 方法 ---
    const onFinish = (values: any) => {
      console.log('values', values);
      store.dispatch('user/loginAction', values);
    };
    return {
      formState,
      onFinish
    };
  }
});
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 220px 0 24px;
  background: #f0f2f5;
  background-position: center 110px;
  background-size: 100%;
  .content {
    width: 330px;
    .title {
      height: 44px;
      line-height: 44px;
      text-align: center;
      font-size: 32px;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
