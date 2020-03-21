<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      style="-webkit-app-region: drag; height: 100vh"
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo" @click="()=> collapsed = !collapsed">
        <a-avatar style="backgroundColor:#87d068" icon="user" />
      </div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[0]">
        <a-menu-item v-for="(item, index) in menus" :key="index" @click="handleClick">
          <a-icon :type="item.icon" />
          <span>{{item.title}}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; -webkit-app-region: drag;">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
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
body {
  background-color: #f0f2f5;
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

#components-layout-demo-custom-trigger .logo {
  font-size: 1rem;
  color: #fff;
  margin: 2rem 25px;
  height: 32px;
}
</style>