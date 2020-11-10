/*
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-09-24 09:28:20
 * @LastEditors: huangfu
 * @LastEditTime: 2020-11-10 10:02:14
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.config.productionTip = false

import { registerMicroApps,
  //  setDefaultMountApp, 
   start } from 'qiankun'


function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

let app = null;
function render({ appContent, loading }) {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  } else {
    store.commit('microApp/changeCenter', appContent);
    store.commit('microApp/changeLoading', loading);
  }
}

 //第一次调用初始主应用
 render({}) 

 let msg = {
  data:'修炼爱情的辛酸,学会放好以前的渴望'
}

let apps = [
  // {
  //   name: 'linjunjie', 
  //   entry: '//localhost:215', 
  //   container:'#subView', 
  //   // render:renderUtil.render, 
  //   activeRule: genActiveRule('/star'),
  //   props:msg
  // },
  {
    name: 'vueApp', 
    entry: '//192.168.1.15:20000', 
    container:'#subView', 
    // render:renderUtil.render, 
    activeRule: genActiveRule('/vue'),
    props:msg
  }
]


   //注册的子应用 参数为数组
   registerMicroApps(apps,{
    beforeLoad: [
      app => {
        console.log(app)
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  });

  // setDefaultMountApp('/star/linjunjie')


start({ 
  sandbox :{strictStyleIsolation: true},
  excludeAssetFilter: (assetUrl) => { 
    console.log(assetUrl);
    return true
  }
})


