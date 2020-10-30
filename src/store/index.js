/*
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-09-24 09:28:20
 * @LastEditors: huangfu
 * @LastEditTime: 2020-09-29 11:20:14
 */
import Vue from 'vue'
import Vuex from 'vuex'
// vuex 持久化
import persistedState from 'vuex-persistedstate';

import microApp from './microApp';
import user from './user';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persistedState()],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    microApp,
    user
  }
})
