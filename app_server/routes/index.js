const express = require('express');
const router = express.Router();

const ctrlConcerts = require('../controllers/concerts'); 
const ctrlAccount = require('../controllers/account');
 

/* Account pages */
router.get('/', ctrlAccount.login);

router
.route('/signup')
.get(ctrlAccount.addUser)
.post(ctrlAccount.doAddUser);
//router.get('/signup', ctrlAccount.signup);


/* Concerts pages */
router
.route('/AddReview')
.get(ctrlConcerts.addReview)
.post(ctrlConcerts.doAddReview);

//router.get('/AddReview', ctrlConcerts.addReview);
router.get('/listReviews', ctrlConcerts.homelist);
router.get('/concerts/:reviewid', ctrlConcerts.reviewInfo);
module.exports = router;

