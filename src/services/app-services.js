import appApi from './app-api';
import httpService from './http-service';
const GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch';

const getHomes = async () => {
  const res = await httpService(GET, appApi('homes'));
  return res;
};
const getHome = async homeId => {
  const res = await httpService(GET, appApi('home', { homeId }));
  return res;
};

async function updateHome(home, idToken, uid) {
  const res = await httpService(
    PATCH,
    appApi('home', { homeId: home.homeId, uid }) + `?auth=${idToken}`,
    home
  );
  return res;
}

async function createHome(home, uid) {
  const res = await httpService(POST, appApi('homes'), { ...home, uid });
  return res;
}

export default {
  createHome,
  updateHome,
  getHomes,
  getHome
};
