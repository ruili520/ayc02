// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 注入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入共用的css文件
import '@/assets/css/common.css'
// 添加左右滑屏组件
// import VueTouch from 'vue-touch'

import aychttp from './config/axios'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(aychttp)
Vue.use(MintUI)
Vue.prototype.axios = axios
// Vue.use(VueTouch, {name: 'v-touch'})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
