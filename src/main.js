import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router";
import axios from "axios";
import store from "./store/index";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiLockFill, FcLock } from "oh-vue-icons/icons";

export const API_URL = process.env.VUE_APP_API_URL || 'http://localhost/api/v1/';

addIcons(BiLockFill, FcLock);

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.component("v-icon", OhVueIcon);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
