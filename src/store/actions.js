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
  getUserUid,
  getNewToken,
  getUserAgreement,
  createUserAgreement
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

function getNewToken(context){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    firebase.auth().currentUser.getIdToken(true)
 .then(function(idToken) {
   context.commit('setUser',{
     displayName : context.state.user.displayName,
     email : context.state.user.email,
     uid:context.state.user.uid,
     idToken :idToken
   })
}).catch(function(error) {
  return error
});
  } else {
    // No user is signed in.
  }
  
})
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
  const newPics = context.getters.getHomePics
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

async function getUserAgreement(context){
  const userId = context.getters.getUserUid
  const res = await appServices.getUserAgreement(userId)
  console.log(res);

  if(res){
    return true
  }else{
    return false
  }
}
  
  
// }
async function createUserAgreement(context){
  console.log('creatinggg');
  
  const userId = context.getters.getUserUid
  // userId.split("")
  // userId.splice(userId.length -4)
  // console.log(use);
  
  // userId.join(",")
  const res = await appServices.createUserAgreement(userId)
  return res
  
  
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
