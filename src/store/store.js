import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import mutations from './mutations';
import actions from './actions';
import vuexPersistenceObj from '@/statics/vuex-persistence';

// import constants from '@/statics/constants';

Vue.use(Vuex);

const vuexPersistenceConf = new VuexPersistence({
  vuexPersistenceObj,
  reducer: state => ({
    user: state.user,
    home: state.home,
    homePic: state.homePic,
    openDialogFunc: state.openDialogFunc
  })
});

const store = new Vuex.Store({
  state: {
    user: null,
    openDialogFunc: () => {},
    home: null,
    homePic: null,
    homePics: null
  },
  getters: {
    getHome: state => state.home,
    getHomePic: state => state.homePic,
    getHomePics: state => state.homePics,
    getOpenDialogFunc: state => state.openDialogFunc,
    getUser: state => state.user,
    getEmail: state => state.user.email,
    getUserUid: state => (state.user ? state.user.uid : null),
    getIdToken: state => (state.user ? state.user.idToken : null)
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
