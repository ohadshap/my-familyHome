import i18n from '@/i18n';

export default {
  resHandler
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
