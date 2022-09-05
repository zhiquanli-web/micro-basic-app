<template>
  <div class="info-container">
    <a-space :size="8">
      <a-button type="text" shape @click="logout">
        <template #icon>
          <LoginOutlined style="color: #fff" />
        </template>
      </a-button>
      <span class="avatar" @click="showUserInfo">
        <a-avatar :src="userInfo.avatar">
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <span class="user-name">{{ userInfo.nickname }}</span>
      </span>
    </a-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, createVNode, reactive } from 'vue';
import { Modal, message } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import localCache from '@/utils/catch';

export default defineComponent({
  name: 'infoComp',
  setup() {
    // --- 属性 ---
    const userInfo = reactive({
      nickname: '超级管理员',
      avatar: 'http://minio-test.epshealth.com:7070/uurm/_public/userPic/1'
    });

    // --- 方法 ---
    const logout = () => {
      Modal.confirm({
        title: '提示',
        icon: createVNode(ExclamationCircleOutlined),
        content: '确定退出登录?',
        onOk() {
          localCache.clearCache();
          window.location.reload();
        }
      });
    };
    const showUserInfo = () => {
      message.info('个人信息');
    };

    return {
      userInfo,
      logout,
      showUserInfo
    };
  }
});
</script>

<style lang="scss" scoped>
.info-container {
  color: #fff;
  min-width: 192px;
  :deep(.ant-space) {
    height: 48px;
    line-height: 48px;
  }
  :deep(.ant-space-item) {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0px 10px;
    font-size: 18px;
    &:hover {
      background: #252a3d;
    }
    &:hover {
      background: #252a3d;
    }
    .avatar {
      .user-name {
        padding-left: 10px;
        font-size: 14px;
      }
    }
  }
}
</style>
