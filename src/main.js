import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router";
import axios from "axios";
import store from "./store/index";

console.log(process.env.VUE_APP_API_URL);
// export const API_URL = 'http://localhost/api/v1/';
export const API_URL = process.env.VUE_APP_API_URL;

Vue.config.productionTip = false
Vue.prototype.axios = axios;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
