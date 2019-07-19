const Owner = require('../models/Owner');

const createOwner = async(data) => Owner.create(data);

module.exports = {
  createOwner,
}