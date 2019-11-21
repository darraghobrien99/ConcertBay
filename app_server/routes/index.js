const express = require('express');
const router = express.Router();

const ctrlConcerts = require('../controllers/concerts'); 
const ctrlAccount = require('../controllers/account');
 

/* Account pages */
router.get('/login', ctrlAccount.login);
router.get('/signup', ctrlAccount.signup);


/* Concerts pages */
router.get('/AddReview', ctrlConcerts.addReview);
router.get('/', ctrlConcerts.listReviews);
module.exports = router;

