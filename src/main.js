import Vue from 'vue';
import App from './App.vue';
import router from './router';
import util from './util/util';
import store from './store/store';
import i18n from './i18n';

import '@/assets/scss/style.scss';
import '@/statics/firebase-config';

Vue.config.productionTip = false;
Vue.config.strict = true;

Vue.prototype.$util = util;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
