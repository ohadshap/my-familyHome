import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import mutations from './mutations';
import actions from './actions';
import vuexPersistenceObj from '@/statics/vuex-persistence';

// import constants from '@/statics/constants';

Vue.use(Vuex);

const vuexPersistenceConf = new VuexPersistence(vuexPersistenceObj);

const store = new Vuex.Store({
  state: {
    openDialogFunc: () => {}
  },
  getters: {
    getOpenDialogFunc: state => state.openDialogFunc
  },
  mutations,
  actions,
  plugins: [vuexPersistenceConf.plugin],
  strict: true
});

// if (process.env.NODE_ENV !== constants.production) {
window.store = store;
// }

export default store;
