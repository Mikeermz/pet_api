const Pet = require('../models/Pet');

const createPet = async(data) => Pet.create(data);

module.exports = {
  createPet,
}