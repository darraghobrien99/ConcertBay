
/* GET home page */
const login = function(req, res, next){ 
res.render('login', { title: 'Login' }); 
};

const signup = function(req, res, next){ 
res.render('signup', { 
	title: 'Sign Up',
	pageHeader: {
		title: 'Welcome to ConcertBay'
			},
users: [{ 
fullName: 'Darragh OBrien',
email: 'darraghobrien@gmail.com',
username: 'darragh257',
password: 'darragh101'
}, {
fullName: 'John OShea',
email: 'johnoshea@gmail.com',
username: 'johnoshea',
password: 'johnny2019'

}]
});
};


module.exports = { 
login,
signup
};
