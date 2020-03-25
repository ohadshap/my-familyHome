import sessionConfig from '@/statics/session-config.json';

export default {
  restoreState: key => {
    const localStorageData = JSON.parse(window.localStorage.getItem(key));
    if (localStorageData && localStorageData.stateSaveTime) {
      if (
        !localStorageData.stateSaveTime ||
        !new Date(localStorageData.stateSaveTime)
      ) {
        localStorageData.stateSaveTime = new Date();
      }
      const stateExpirationTime = new Date(
        new Date(localStorageData.stateSaveTime).getTime() +
          sessionConfig.STATE_STORAGE_SAVE_DURATION_IN_MINUTES * 60000
      );
      if (new Date() < stateExpirationTime) {
        return localStorageData;
      } else {
        localStorage.removeItem(key);
        return null;
      }
    } else {
      return null;
    }
  },
  saveState: (key, state) => {
    if (!state.stateSaveTime) {
      state.stateSaveTime = new Date();
    }
    state = { ...state, tzFile: {} };
    window.localStorage.setItem(key, JSON.stringify(state));
  }
};
