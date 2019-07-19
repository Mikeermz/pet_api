const express = require('express');
const { petCreate, allPets, onePet, onePetbyName, petUpdate, deletePet } = require('../controllers/pet');

const { ownerCreate } = require('../controllers/owner')

const router = express.Router();

router.get('/',(req,res)=>{
  res.send({message:'PET API'})
});

//  Pet
router.post('/pet', petCreate);
router.get('/pets', allPets);
router.get('/pet/:id', onePet);
router.patch('/pet/:id', petUpdate);
router.delete('/pet/:id', deletePet);

//  Owner
router.post('/owner', ownerCreate);

// Search
router.get('/search', onePetbyName);

module.exports = router;
