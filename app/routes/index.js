const express = require('express');
const { petCreate, allPets, onePet, onePetbyName, petUpdate, deletePet } = require('../controllers/pet');
const { OwnerCreate, allOwners, oneOwner, OwnerUpdate, deleteOwner, oneOwnerbyName } = require('../controllers/owner');

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
router.post('/owner', OwnerCreate);
router.get('/owners', allOwners);
router.get('/owner/:id', oneOwner);
router.patch('/owner/:id', OwnerUpdate);
router.delete('/owner/:id', deleteOwner);

// Search
router.get('/search', onePetbyName);
router.get('/search/owner', oneOwnerbyName);

module.exports = router;
