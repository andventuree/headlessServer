const express = require('express');
const router = express.Router();
const { Cheese } = require('../db/models/Cheese');
// const Cheese = require('../db').Cheese;
module.exports = router;

// router.get('/', (req,res,next)=>{
//   res.send('in cheses')
// })

router.get('/', (req,res,next)=>{
  Cheese.findAll()
  .then(cheese =>{
    res.json(cheese)
  })
  .catch(next);
})

router.post('/', (req,res,next)=>{
  const cheeseToAdd = req.body;
  Cheese.create(CheeseToAdd)
  .then(createdCheese =>{
    res.json(createdCheese)
  })
  .catch(next);
})

router.put('/:id', (req,res,next)=>{
  const cheeseId = Number(req.params.id);
  Cheese.findById(cheeseId)
  .then(cheeseToUpdate =>{
    //update on a class and update on an instance
    //could have used model.update, b/c this wont short circuit,
    return cheeseToUpdate(req.body);   // this is an update on an instance. once one cheese is found, it will stop searching.
    //opposed to finding all which is a class method which will keep searching?
    //conversely see below for class method

  })

})


//see here for class method
// Cheese.update(req.body, {
//   where: {
//     id: cheeseId
//   }
// })
// .then((numOfElemsAffects, actualCheesesAffected) =>{
//   let affected = actualCheesesAffected[0];
// res.json( affected)
// })
// module.exports = router;

//postman takes the place of a form on an HTML
