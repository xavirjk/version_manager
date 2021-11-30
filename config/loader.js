const auth = require('./auth');
const ui = require('./ui');
const { client } = require('./conf_client');

module.exports = (app) => {
  app.use('/auth', auth);
  app.use('/project', client);
  app.use('/v-manager', ui);
};
