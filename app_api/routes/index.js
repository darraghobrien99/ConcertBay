const express = require('express');
const router = express.Router();
const ctrlConcerts = require('../controllers/concerts');



// concerts/reviews
// router
//   .route('/concerts')
//   .post(ctrlConcerts.concertsCreate);
router
  .route('/concert')
  .post(ctrlConcerts.newCon)

router
  .route('/concerts/:reviewid')
  .get(ctrlConcerts.concertsReadOne)
  // .put(ctrlConcerts.concertsUpdateOne)
  // .delete(ctrlConcerts.concertsDeleteOne);


module.exports = router;
