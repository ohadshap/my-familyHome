import i18n from '@/i18n';

function appCatch(store, err) {
  store.getters.getOpenDialogFunc({
    title: i18n.t(`errCodes.${err}`),
    confirm: 'אישור',
    // cancel: 'ביטול',
    showImg: true
  });
  err && console.warn(err);
}

export default {
  appCatch
};
