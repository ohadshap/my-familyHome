export default {
  setOpenDialogFunc(state, openDialogFunc) {
    state.openDialogFunc = openDialogFunc;
  },
  setUser(state, user) {
    state.user = user;
  },
  setHome(state, home) {
    state.home = home;
  },
  setHomePic(state, homePic) {
    state.homePic = homePic;
  },
  setHomePics(state, homePics) {
    state.homePics = homePics;
  },
  // addHomePic(state, homePic) {
  //   state.homePics.push(homePic)
  // }
};
