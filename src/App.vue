<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-09-24 09:28:20
 * @LastEditors: huangfu
 * @LastEditTime: 2020-11-10 10:01:35
-->
<template>
  <div id="app">
    <router-view />
    <div id="subView" class="sub-content-wrap" v-html="content"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'App',
  data() {
    return {
 
    }
  },
    computed: {
    ...mapState("microApp", ["content"]),
    // ...mapState("microApp", ["mircoAppLoading"])
  },
}
</script>