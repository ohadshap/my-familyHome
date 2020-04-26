import sessionConfig from '@/statics/session-config.json';

export default {
  restoreState: key => {
    const localStorageData = JSON.parse(window.localStorage.getItem(key));
    // only enter if local storage and save time has value
    if (localStorageData && localStorageData.stateSaveTime) {
      const stateSaveTime = new Date(localStorageData.stateSaveTime);
      // only enter if state save time is a valie date
      if (stateSaveTime && stateSaveTime.getTime) {
        const stateExpirationTime = new Date(
          stateSaveTime.getTime() +
            sessionConfig.STATE_STORAGE_SAVE_DURATION_IN_MINUTES * 60000
        );
        if (new Date() > stateExpirationTime) {
          delete localStorageData.user;
        }
        return localStorageData;
      }
    }
    return null;
  },
  saveState: (key, state) => {
    if (!state.stateSaveTime) {
      state.stateSaveTime = new Date();
    }
    // const storageState = {...state}
    console.log(state)
    // state.homePics = []
    // console.log(state)
    window.localStorage.setItem(key, JSON.stringify(state));
  }
};
