<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider id="sidebar" v-model="collapsed">
      <div class="logo">
        <a-badge count="20" :numberStyle="{backgroundColor: '#52c41a'} ">
          <a-avatar shape="square" icon="user" />
        </a-badge>
        <span class="username">{{user.lastname}} {{user.fristname}}</span>
      </div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[0]">
        <a-menu-item v-for="(item, index) in menus" :key="index" @click="handleClick">
          <a-icon :type="item.icon" />
          <span>{{item.title}}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px', minHeight: '100vh' }">
      <a-layout-header style="background: #fff; padding: 0; -webkit-app-region: drag;">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      user: this.$store.state.user,
      collapsed: false,
      menus: [
        {
          title: "アカウント",
          icon: "user",
          path: "/account"
        },
        {
          title: "教室",
          icon: "video-camera",
          path: "/classroom"
        },
        {
          title: "提出",
          icon: "upload",
          path: "/submit"
        }
      ]
    };
  },
  methods: {
    handleClick(item) {
      this.$router.push(this.menus[item.key].path);
    }
  }
};
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

body {
  background-color: #f0f2f5;
}

#sidebar {
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  -webkit-app-region: drag;
  -webkit-user-select: none;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#sidebar .logo {
  font-size: 1rem;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 20px;
  height: 32px;
}
#sidebar .username {
  width: 100px;
  color: white;
  margin-left: 1rem;
  font-size: 1rem;
}
</style>