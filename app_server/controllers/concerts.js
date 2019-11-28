const request = require('request');

const apiOptions = { 
server : 'http://localhost:3000' 
};

if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://whispering-sierra-89492.herokuapp.com'; 
}



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

const _renderHomepage = function(req, res, responseBody){
	res.render('listReviews', { 
	title: 'Most Recent Reviews',
	pageHeader: {
		title: 'Most Recent Reviews'
		},
		concerts: responseBody 
	});
};
const homelist = function(req, res){
const path = '/api/locations'; 
const requestOptions = { 
url : apiOptions.server + path, 
method : 'GET', 
json : {}, 
qs : {} 
}; 
request(requestOptions, (err, response, body) => { 
_renderHomepage(req, res,body); 
} 
);
};

const _renderReviewForm = function (req, res) { 
res.render('addReview', { 
	title: 'ConcertBay - Review your Experience',
	pageHeader: {
		title: 'Review Concert'
		} 
	});
};
/* GET 'Add review' page */
const addReview = function(req, res){
_renderReviewForm(req, res); 
};


const doAddReview = function(req, res){
	const path = `/api/concert`; 
	const postdata = 
	{ 
	    artistName : req.body.artistName,
        venueName : req.body.venueName,
        entertainment : req.body.entertainment,
        production : req.body.production,
        vocals : req.body.vocals,
        value : req.body.value,
        comment: req.body.comment
	}; 

	const requestOptions = {
url : apiOptions.server + path, 
method : 'POST', 
json : postdata 
};

request( requestOptions,(err, response, body) => {
if (response.statusCode === 201) { 
res.redirect(`/concerts/${response.body._id}`); 
  console.log(response.body._id);
} else { 
_showError(req, res, response.statusCode); 
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







module.exports = {
addReview,
listReviews,
doAddReview
};
