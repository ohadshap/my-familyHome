import i18n from '@/i18n';

export default {
  resHandler,
  deepCopy
};

function resHandler(res, store) {
  if (res && !res.err) {
    return res;
  }
  appCatch(store, res.err);
}

function appCatch(store, err) {
  store.getters.getOpenDialogFunc({
    title: i18n.t(`errCodes.${err}`),
    confirm: 'אישור',
    // cancel: 'ביטול',
    showImg: true
  });
  err && console.warn(err);
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
