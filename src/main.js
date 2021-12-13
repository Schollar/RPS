import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import cookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.prototype.$cookies = cookies
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
