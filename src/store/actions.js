// import constants from '@/statics/constants';
import appServices from '@/services/app-services';
import util from '../util/util';
import firebase from 'firebase/app';

export default {
  getHome,
  getHomePic,
  getHomePics,
  createHome,
  updateHome,
  logout,
  login,
  cleanState,
  createHomePic,
  updateHomePic,
  getUserUid
};

async function getHomePics(context) {
  const pics = context.getters.getHomePics
  if(!pics) {
    const res = await appServices.getHomePics();
    context.commit('setHomePics', {
      ...util.deepCopy(pics),
      homePics: Object.values(res)
    });
    return util.resHandler(res, context);
  }
  return pics
}
async function getHome(context, homeId) {
  const res = await appServices.getHome(homeId);
  // console.log(res);
  return util.resHandler(res, context);
}
async function getHomePic(context, homePicId) {
  const res = await appServices.getHomePic(homePicId);
  // console.log(res);
  return util.resHandler(res, context);
}

async function login(context, userInfo) {
  const idToken = await firebase.auth().currentUser.getIdToken();
  const email = userInfo.additionalUserInfo.profile.email;
  context.commit('setUser', {
    displayName: userInfo.additionalUserInfo.profile.name,
    email,
    uid: userInfo.user.uid,
    idToken
  });
}
function getUserUid(context){
  return context.getters.getUserUid
}


async function updateHome(context) {
  const res = await appServices.updateHome(
    context.getters.getHome,
    context.getters.getIdToken,
    context.getters.getUserUid
  );
  // console.log(res)
  return util.resHandler(res, context);
}

async function updateHomePic(context) {
  console.log(`updating`)
  const res = await appServices.updateHomePic(
    context.getters.getHomePic,
    context.getters.getIdToken,
    context.getters.getUserUid
  )
  console.log(res)
  const newPics = context.getters.getHomePics
  console.log(newPics)
  context.commit('setHomePics', {
    ...util.deepCopy(newPics),
    [res.name]: util.resHandler(res, context)
 
  });
  return util.resHandler(res, context);
}

async function createHome(context) {
  // console.log(context)
  const home = context.getters.getHome;
  const res = await appServices.createHome({}, context.getters.getUserUid);
  if (res && res.name) {
    context.commit('setHome', {
      ...util.deepCopy(home),
      homeId: res.name
    });
    return context.dispatch('updateHome');
  }
  return util.resHandler(res, context);
}



async function createHomePic(context) {
  const homePic = context.getters.getHomePic;
  const home = context.getters.getHome;
  const res = await appServices.createHomePic({}, context.getters.getUserUid);
  if (res && res.name) {
    context.commit('setHomePic', {
      ...util.deepCopy(homePic),
      homePicId: res.name,
      homeId: home.homeId,
      homeType: home.homeType,
      name: home.name
    });
    return context.dispatch('updateHomePic');
  }
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
