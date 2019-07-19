const { CreateOwner, getOwners, getOwner, getOwnerbyName, updateOwner, deleteOneOwner } = require('../actions');

const OwnerCreate = (req, res) => {
  CreateOwner(req.body)
    .then(
      owner => res.status(201).send({
        message: 'Owner created',
        owner
      })
    ).catch( (error) => res.status(400).send(error))
};

const allOwners = (req, res) => {
  getOwners()
    .then(
      (owners) => res.status(200).send({
        message: 'Owners',
        owners
      })
    ).catch( (error) => res.status(400).send(error))
};

const oneOwner = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  getOwner(id)
    .then(
      (owner) => {
        if (!owner){
          return res.status(200).send({
            message: 'not found owner',
          })
        }
        return res.status(200).send({
          message: 'Owner',
          owner
        })
      }
    ).catch( (error) => res.status(400).send(error))
}

const oneOwnerbyName = (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  getOwnerbyName(name)
    .then(
      (owner) => {
        if (!owner){
          return res.status(200).send({
            message: 'not found owner',
          })
        }
        return res.status(200).send({
          message: 'owner',
          owner
        })
      }
    ).catch( (error) => res.status(400).send(error))
};

const OwnerUpdate = (req, res) => {
  const data = req.body
  const { id }  = req.params;
  updateOwner(id, data)
      .then(
        owner => res.status(200).json({
          message: 'owner update',
          owner,
        })
      ).catch((error) => res.status(400).send(error) )
}

const deleteOwner = (req, res) => {
  const { id } = req.params;
  deleteOneOwner(id)
      .then(
        owner => res.status(200).json({
          owner,
        })
      ).catch((error) => res.status(400).send(error) )
}

module.exports = {
  OwnerCreate,
  allOwners,
  oneOwner,
  oneOwnerbyName,
  OwnerUpdate,
  deleteOwner
}
