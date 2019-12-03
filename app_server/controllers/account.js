const request = require('request');

const apiOptions = { 
server : 'http://localhost:3000' 
};

if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://safe-bastion-68573.herokuapp.com/'; 
}


/* GET home page */
const login = function(req, res, next){ 
res.render('login', { title: 'Login' }); 
};

const signup = function(req, res, next){ 

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
};

const _renderSignUpForm = function (req, res) { 
res.render('signup', { 
	title: 'Sign Up',
	pageHeader: {
		title: 'Welcome to ConcertBay'
			},
	});
};
/* GET 'Add review' page */
const addUser= function(req, res){
_renderSignUpForm(req, res); 
};


const doAddUser = function(req, res){
	const path = `/api/accounts`; 
	const postdata = 
	{ 
	    fullName : req.body.fullName,
	    email : req.body.email,
        username : req.body.username,
        password : req.body.password

	}; 

	const requestOptions = {
url : apiOptions.server + path, 
method : 'POST', 
json : postdata 
};

request( requestOptions,(err, response, body) => {
if (response.statusCode === 201) { 
res.redirect(`/`); 

} else { 
_showError(req, res, response.statusCode);
console.log(body);
console.log(response.body._id); 
}
}
);

};

const _showError = function (req, res, status) {
    let title = '';
    let content = '';
    if (status === 404) { 
    title = '404, page not found'; 
    content = 'Oh dear. Looks like we can\'t find this page. Sorry.'; 
    } else { 
    title = `${status}, something's gone wrong`; 
    content = 'Something, somewhere, has gone just a little bit wrong.'; 
    }
    res.status(status); 
    res.render('generic-text', { 
    title : title, 
    content : content 
    }); 
    };

const about = function (req, res) { 
res.render('about', { 
    title: 'About',
    pageHeader: {
        title: 'About ConcertBay'
            },
            sidebar: "Have you ever gone to a concert and been dissapointed? Well, that feeling will never happen again with ConcertBay. ConcertBay was established in 2019 in order to warn eager concert-goers of terrible experiences. Review the artist, venue along with the concerts production, vocals, value for money and entertainment. ConcertBay also allows an additional comment for any other criticisms the user has!"
    });
};


module.exports = { 
login,
signup,
addUser,
doAddUser,
about
};
