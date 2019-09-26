
/* GET 'home' page */
const addReview = function(req, res){
res.render('addReview', { title: 'AddReview' });
};
/* GET 'Location info' page */
const topFive = function(req, res){
res.render('index', { title: 'Top Five' });
};

module.exports = {
addReview,
topFive
};
