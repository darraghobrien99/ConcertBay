
/* GET home page */
const login = function(req, res, next){ 
res.render('login', { title: 'Login' }); 
};

const signup = function(req, res, next){ 
res.render('index', { title: 'Sign up' }); 
};
module.exports = { 
login,
signup
};
