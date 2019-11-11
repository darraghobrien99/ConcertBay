const express = require('express');
const router = express.Router();
const ctrlConcerts = require('../controllers/concerts');
const ctrlUsers = require('../controllers/users');



// concerts/reviews

router
  .route('/concert')
  .post(ctrlConcerts.newCon)

router
  .route('/concerts/:reviewid')
  .get(ctrlConcerts.concertsReadOne)
  // .put(ctrlConcerts.concertsUpdateOne)
  .delete(ctrlConcerts.concertsDeleteOne);

  //users

  router
  .route('/accounts')
  .post(ctrlUsers.newUser)

router
  .route('/accounts/:userid')
  .get(ctrlUsers.usersReadOne)
 // .put(ctrlConcerts.concertsUpdateOne)
  .delete(ctrlUsers.usersDeleteOne);


module.exports = router;
