
<template>
  <!-- <div class="layout"> -->
  <Layout layout>
    <Sider
      ref="side1"
      hide-trigger
      collapsible
      :collapsed-width="78"
      v-model="isCollapsed"
    >
      <Menu
        active-name="1-2"
        theme="dark"
        width="auto"
        :class="menuitemClasses"
      >
        <div v-if="isCollapsed" class="logo_text">圣坤</div>
        <div v-else class="logo_text">皇甫圣坤</div>
        <MenuItem name="1-1">
          <Icon type="ios-navigate"></Icon>
          <router-link to="/" tag="span">Home</router-link>
        </MenuItem>
        <MenuItem name="1-2">
          <Icon type="ios-search"></Icon>
          <router-link to="/about" tag="span">About</router-link>
        </MenuItem>
        <MenuItem name="1-3" >
          <Icon type="ios-settings"></Icon>
          <span >林俊杰</span>
        </MenuItem>
        <MenuItem name="1-4" >
          <Icon type="ios-settings"></Icon>
          <span >张艺兴</span>
        </MenuItem>
        <MenuItem name="1-5" >
          <Icon type="ios-settings"></Icon>
          <span >vue</span>
        </MenuItem>
      </Menu>
    </Sider>
    <Layout>
      <Header :style="{ padding: 0 }" class="layout-header-bar">
        <Icon
          @click.native="collapsedSider"
          :class="rotateIcon"
          :style="{ margin: '0 20px' }"
          type="md-menu"
          size="24"
        ></Icon>
      </Header>
      <Content
        :style="{ margin: '20px', background: '#fff', minHeight: '260px' }"
      >
        <router-view />
      </Content>
    </Layout>
  </Layout>
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false,
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },

  },
};
</script>
<style scoped>
.logo_text{
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: #d7dde4;
  border-bottom: 1px solid #aaa;
}
.layout {
  height: 100vh;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<style lang="scss">
.ivu-layout {
  height: 100vh;
}
</style>
