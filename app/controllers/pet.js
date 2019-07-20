const { createPet, getPets, getPet, getPetbyName, updatePet, deleteOnePet } = require('../actions');

const petCreate = (req, res) => {
  createPet(req.body)
    .then(
      pet => res.status(201).send({
        message: 'Pet created',
        pet
      })
    ).catch( (error) => res.status(400).send(error))
};

const allPets = (req, res) => {
  getPets()
    .then(
      (pets) => res.status(200).send({
        message: 'Pets',
        pets
      })
    ).catch( (error) => res.status(400).send(error))
};

const onePet = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  getPet(id)
    .then(
      (pet) => {
        if (!pet){
          return res.status(200).send({
            message: 'not found pet',
          })
        }
        return res.status(200).send({
          message: 'pet',
          pet
        })
      }
    ).catch( (error) => res.status(400).send(error))
}

const onePetbyName = (req, res) => {
  console.log(req.query);
  const petName = req.query.petName;
  const animal = req.query.animal;
  const status = req.query.status;
  const owner = req.query.owner;
  getPetbyName(petName, animal, status, owner)
    .then(
      (pet) => {
        if (!pet){
          return res.status(200).send({
            message: 'not found pet',
          })
        }
        return res.status(200).send({
          message: 'pet',
          pet
        })
      }
    ).catch( (error) => res.status(400).send(error))
};

const petUpdate = (req, res) => {
  const data = req.body
  const { id }  = req.params;
  updatePet(id, data)
      .then(
        pet => res.status(200).json({
          message: 'pet update',
          pet,
        })
      ).catch((error) => res.status(400).send(error) )
}

const deletePet = (req, res) => {
  const { id } = req.params;
  deleteOnePet(id)
      .then(
        pet => res.status(200).json({
          pet,
        })
      ).catch((error) => res.status(400).send(error) )
}

module.exports = {
  petCreate,
  allPets,
  onePet,
  onePetbyName,
  petUpdate,
  deletePet
}