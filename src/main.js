import Vue from 'vue';
import App from './App.vue';
import router from './router';
import util from './util/util';
import store from './store/store';
import i18n from './i18n';
import SocialSharing from 'vue-social-sharing'
// import VueImgOrientationChanger from 'vue-img-orientation-changer'
// import { AutoRotate } from 'vue-jpeg-auto-rotation'
// import Croppa from 'vue-croppa'

import '@/assets/scss/style.scss';
import '@/statics/firebase-config';

Vue.config.productionTip = false;
Vue.config.strict = true;


Vue.prototype.$util = util;
// Vue.use(Croppa)
Vue.use(SocialSharing);
// Vue.use(AutoRotate);
// Vue.component('auto-rotate', { AutoRotate })
// Vue.use(VueImgOrientationChanger)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');


var meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width,height='+window.innerHeight+', initial-scale=1.0';
document.getElementsByTagName('head')[0].appendChild(meta);
