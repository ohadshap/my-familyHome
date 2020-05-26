const SERVER_ADDRESS =
  process.env.VUE_APP_SERVER_ADDRESS || 'https://my-family-home.firebaseio.com';

const api = {
  // homes: () => '/homes.json',
  // home: args => `/homes/${args.homeId}.json`,
  // homePics: () => '/homePics.json',
  // homePic: args => `/homePics/${args.homePicId}.json`
  homes: () => '/stgHomes.json',
  home: args => `/stgHomes/${args.homeId}.json`,
  homePics: () => '/stgHomePics.json',
  homePic: args => `/stgHomePics/${args.homePicId}.json`,
  myHomePics: args => `/stgHomePics/${args.homePicId}.json`
};

export default (req, args) => `${SERVER_ADDRESS}/${api[req](args)}`;
