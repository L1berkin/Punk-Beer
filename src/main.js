import Vue from 'vue';
import axios from '../core/utils/axios';
import App from './App.vue';
import router from './router';
import Api from '../core/Api';

Api.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
