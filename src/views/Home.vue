<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-09-24 09:28:20
 * @LastEditors: huangfu
 * @LastEditTime: 2020-09-29 18:06:48
-->
<template>
  <div class="home">
    <router-link to="/layout" tag="span">我的</router-link>
    <span @click="onChangePage('/vue')">vue</span>

    <div @click="loginOut">退出登录</div>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    loginOut(){
      this.$store.commit('user/changeToken', '');
      this.$router.push({name:"Login"})
    },
    onChangePage(url) {
      // console.log(url);
      this.routerGo(url, "payload");
    },
    routerGo(href = "/", title = null, stateObj = {}) {
      window.history.pushState(stateObj, title, href);
    },
  }
}
</script>

<style scoped  lang="scss" >
.home{
  div{
    text-align: center;
    font-size:20px;
    color:#ff6700;
    font-weight: 600;
    margin-bottom:20px;
  }
  span{
    font-size:16px;
    color:purple;
    font-weight: 600;
    margin: 0 10px;
  }
}
</style>