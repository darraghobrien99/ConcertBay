const request = require('request');

const apiOptions = { 
server : 'http://localhost:3000' 
};

if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://whispering-sierra-89492.herokuapp.com'; 
}

/* GET 'home' page */
const addReview = function(req, res){
res.render('addReview', { 
	title: 'ConcertBay - Review your Experience',
	pageHeader: {
		title: 'Review Concert'
		} 
	});
};

/* GET 'Location info' page */
const listReviews = function(req, res){
reviews: [{ 
artistName: 'Coldplay',
venueName: 'Croke Park',
entertainment: '4',
production: '4',
vocals: '4',
value: '3',
comment: '"Was such a good show! The production team did a fantastic job of making the stage look spectacular. Played for around 2 hours and was hoping for more"'
}, {
artistName: 'Ariana Grande',
venueName: '3Arena',
entertainment: '5',
production: '5',
vocals: '5',
value: '3',
comment: '"Ariana was AMAZINGGGG!!!! EVERYTHING WAS SO PERFECT! One bad thing I would say is that the tickets were so overpriced but i had to see her when she was in Ireland"'

}]
};

const _renderHomepage = function(req, res){
	res.render('listReviews', { 
	title: 'Most Recent Reviews',
	pageHeader: {
		title: 'Most Recent Reviews'
		} 
	});
};
const homelist = function(req, res){
const path = '/api/locations'; 
const requestOptions = { 
url : apiOptions.server + path, 
method : 'GET', 
json : {}, 
qs : { 
id: '5db183cb1c9d440000bced1c'
} 
}; 
request(requestOptions, (err, response, body) => { 
_renderHomepage(req, res); 
} 
);
};








module.exports = {
addReview,
listReviews
};
