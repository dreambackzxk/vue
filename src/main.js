// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入全局样式表
import './assets/global.css'
//导入字体图标
import './assets/font/iconfont.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Validator from 'vue-validator'

import axios from 'axios'
axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/' 
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.use(Validator)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
