const SERVER_ADDRESS =
  process.env.VUE_APP_SERVER_ADDRESS || 'https://my-family-home.firebaseio.com';

const api = {
  homes: () => '/homes.json',
  home: args => `/homes/${args.homeId}.json`
};

export default (req, args) => `${SERVER_ADDRESS}/${api[req](args)}`;
