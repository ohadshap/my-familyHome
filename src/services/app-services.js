import appApi from './app-api';
import httpService from './http-service';
const GET = 'GET',
  POST = 'POST';

const getHomes = async () => {
  const res = await httpService(GET, appApi('homes'));
  return res;
};
const getHome = async homeId => {
  const res = await httpService(GET, appApi('home', { homeId }));
  return res;
};

export default {
  getHomes,
  getHome
};
