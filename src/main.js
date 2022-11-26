import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import router from './router'
// 全局使用element-ui
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)



Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router, //挂载使用
  render: h => h(App),
}).$mount('#app')
