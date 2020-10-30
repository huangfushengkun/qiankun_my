/*
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-09-29 11:16:55
 * @LastEditors: huangfu
 * @LastEditTime: 2020-09-29 17:25:20
 */
export default {
  namespaced: true,
  state: {
    token:'1224dd55'

  },
  getters: {
    
  },
  mutations: {
    changeToken(state, token) {
      state.token = token;
    }
  }
 
}