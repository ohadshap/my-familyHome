// import constants from '@/statics/constants';
import appServices from '@/services/app-services';
import util from '../util/util';
import firebase from 'firebase';

export default {
  getHome,
  upsertHome,
  logout,
  login,
  cleanState
};

async function getHome(context, homeId) {
  const res = await appServices.getHome(homeId);
  if (!res.err) {
    return res;
  }
  util.appCatch(context, res.err);
}

async function login(context, userInfo) {
  const email = userInfo.additionalUserInfo.profile.email;
  context.commit('setUser', {
    displayName: userInfo.additionalUserInfo.profile.name,
    email,
    uid: userInfo.user.uid
  });
}

async function upsertHome(context, home) {
  const res = await appServices.upsertHome(home, context.getters.getUserUid);
  return res;
}

async function logout(context) {
  await firebase
    .auth()
    .signOut()
    .catch(err => util.appCatch(context, err));
  context.commit('setUser', null);
  window.location.href = '';
}

function cleanState(context) {
  context.commit('setUser', null);
}
