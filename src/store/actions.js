// import constants from '@/statics/constants';
import appServices from '@/services/app-services';
import util from '../util/util';

async function getHome(context, homeId) {
  const res = await appServices.getHome(homeId);
  if (!res.err) {
    return res;
  }
  util.appCatch(context, res.err);
}

export default {
  getHome
};
