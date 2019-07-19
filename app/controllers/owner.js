const { createOwner } = require('../actions');

const ownerCreate = (req, res) => {
  createOwner(req.body)
    .then(
      owner => res.status(201).send({
        message: 'owner created',
        owner
      })
    ).catch( (error) => res.status(400).send(error))
};

module.exports = {
  ownerCreate,
}