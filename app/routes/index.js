const express = require('express');
const { PetCreate } = require('../controllers/pet');

const router = express.Router();

router.get('/',(req,res)=>{
  res.send({message:'PET API'})
});

//  Pet
router.post('/pet', PetCreate);

module.exports = router;
