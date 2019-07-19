const Owner = require('../models/Owner');

const CreateOwner = async(data) => Owner.create(data);

const getOwners = async() => Owner.find();

const getOwner = async(id) => Owner.findById(id);

const getOwnerbyName = async(name) => Owner.find({ name }).populate('owner');

const updateOwner = (id, data) => {
  console.log(data)
  return Owner.findByIdAndUpdate( id, {$set: data}, {new: true} )
}

const deleteOneOwner = (id) => Owner.findByIdAndDelete(id);


module.exports = {
  CreateOwner,
  getOwners,
  getOwner,
  getOwnerbyName,
  updateOwner,
  deleteOneOwner
}
