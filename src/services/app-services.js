import appApi from './app-api';
import httpService from './http-service';
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

const getHomePic = async homePicId => {
  const res = await httpService(GET, appApi('homePic', { homePicId }));
  return res;
};

async function updateHome(home, idToken, uid) {
  const res = await httpService(
    PATCH,
    appApi('home', { homeId: home.homeId, uid }) + `?auth=${idToken}`,
    home
  )
  return res;
}

async function createHome(home, uid) {
  const res = await httpService(POST, appApi('homes'), { ...home, uid });
  return res;
}

async function createHomePic(home, uid) {
  const res = await httpService(POST, appApi('homePics'), { 
    homeId: home.homeId,  
    homePic: home.homePic,
    roof: home.roof,
    uid: uid
  });
  return res;
}

async function updateHomePic(home, idToken, uid) {
  const res = await httpService(
    PATCH,
    appApi('homePic', { homePicId: home.homePicId, uid }) + `?auth=${idToken}`,
      home
  );
  return res;
}

export default {
  createHome,
  updateHome,
  getHomePics,
  createHomePic,
  updateHomePic,
  getHome,
  getHomePic
};

