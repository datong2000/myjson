import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'
import router from '@/router/index'
import '@/style/normalize.css'
import axios from '@/axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')