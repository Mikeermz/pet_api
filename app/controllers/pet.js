const { createPet } = require('../actions');

const PetCreate = (req, res) => {
  createPet(req.body)
    .then(
      pet => res.status(201).send({
        message: 'Pet created',
        pet
      })
    ).catch( (error) => res.status(400).send(error))
};

module.exports = {
  PetCreate
}