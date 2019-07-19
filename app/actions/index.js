const pet = require('./pet');
const owner = require('./owner');

module.exports = {
  ...pet,
  ...owner,
};
