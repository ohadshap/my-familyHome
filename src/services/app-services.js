import appApi from './app-api';
import httpService from './http-service';
import firebase from 'firebase';
// import 'firebase/firestore';
const GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch';

const getHomePics = async () => {
  const res = await httpService(GET, appApi('homePics'));
  return res;
};
const getHome = async homeId => {
  const res = await httpService(GET, appApi('home', { homeId }));
  return res;
};

const getUserAgreement = async userId => {
  console.log(userId);
  const res = await httpService(GET, appApi('getTermsOfService',{ userId }))
  
  return res;
}

const getHomePic = async homePicId => {
  const res = await httpService(GET, appApi('homePic', { homePicId }));
  return res;
};

async function updateHome(home, idToken, uid) {
  const res = await httpService(
    PATCH,
    appApi('home',{homeId: home.homeId, uid})+`?auth=${idToken}`,
    home
  )
  console.log(res);
  return res;
}

async function updateHomePic(home, idToken, uid) {
  const res = await httpService(
    PATCH,
    appApi('homePic', { homePicId: home.homePicId, uid }) + `?auth=${idToken}`,
      home
  );
  console.log(res);
  return res;
}


async function createHome(home, uid) {
  const res = await httpService(POST, appApi('homes'), { ...home, uid });
  return res;
}

const createUserAgreement = async userId => {
  // mDatabase = FirebaseDatabase.getInstance().getReference();
  var ref = firebase.database().ref('termsOfService')
  console.log(ref);
  
  try{
    let chil = await ref.child(`${userId}`).set( new Date().getTime())
  }
  catch(err){
    return false
  }
  return true
  // ref.child(`${userId}`).setValue({agreed : 'true'})
  // const res = await httpService(PATCH, appApi('termsOfService',{userAgreed : '12345667'}),{
  //   ...userList,[userId] : true
  // });
  // return res;
}


async function createHomePic(home, uid) {
  const res = await httpService(POST, appApi('homePics'), { 
    homeId: home.homeId,  
    homePic: home.homePic,
    roof: home.roof,
    homeType: home.homeType,
    uid: uid
  });
  return res;
}



export default {
  createHome,
  updateHome,
  getHomePics,
  createHomePic,
  updateHomePic,
  getHome,
  getHomePic,
  getUserAgreement,
  createUserAgreement
};

