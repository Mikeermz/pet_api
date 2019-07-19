const Pet = require('../models/Pet');

const createPet = async(data) => Pet.create(data);

const getPets = async() => Pet.find();

const getPet = async(id) => Pet.findById(id);

const getPetbyName = async(name) => Pet.find({ name });

const updatePet = (id, data) => {
  console.log(data)
  return Pet.findByIdAndUpdate( id, {$set: data}, {new: true} )
}

const deleteOnePet = (id) => Pet.findByIdAndDelete(id);


module.exports = {
  createPet,
  getPets,
  getPet,
  getPetbyName,
  updatePet,
  deleteOnePet
}