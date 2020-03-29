// import constants from '@/statics/constants';
import appServices from '@/services/app-services';
import util from '../util/util';
import firebase from 'firebase/app';

export default {
  getHome,
  createHome,
  updateHome,
  logout,
  login,
  cleanState
};

async function getHome(context, homeId) {
  const res = await appServices.getHome(homeId);
  return util.resHandler(res, context);
}

async function login(context, userInfo) {
  const idToken = await firebase.auth().currentUser.getIdToken();
  const email = userInfo.additionalUserInfo.profile.email;
  context.commit('setUser', {
    displayName: userInfo.additionalUserInfo.profile.name,
    email,
    // uid: userInfo.user.uid
    idToken
  });
}

async function updateHome(context, home) {
  const res = await appServices.updateHome(
    home,
    context.getters.getIdToken
    // home,
    // context.getters.getUserUid
  );
  return util.resHandler(res, context);
}

async function createHome(context, home) {
  const res = await appServices.createHome(home);
  return util.resHandler(res, context);
}

async function logout(context) {
  await firebase
    .auth()
    .signOut()
    .catch(err => util.appCatch(context, err));
  context.commit('setUser', null);
}

function cleanState(context) {
  context.commit('setUser', null);
}
