export default {
  restoreState: key => JSON.parse(window.localStorage.getItem(key)),
  saveState: (key, state) =>
    window.localStorage.setItem(key, JSON.stringify(state))
};
