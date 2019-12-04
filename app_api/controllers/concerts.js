const mongoose = require('mongoose');
const Con = mongoose.model('Review');



module.exports.newCon = function(req, res){
    Con.create({
        artistName : req.body.artistName,
        venueName : req.body.venueName,
        entertainment : req.body.entertainment,
        production : req.body.production,
        vocals : req.body.vocals,
        value : req.body.value,
        comment: req.body.comment
    }, 
    function(err, rev) {
        if (err) {
            sendJsonResponse(res, 403, err);
        }
        else {
            sendJsonResponse(res, 201, rev);
            console.log(rev);
        }
    });
}

module.exports.reviewsList = function (req, res) {
  Con
    .find()
    .exec((err, rev) => {
      if(err){
        res
        .status(400)
        .json(err);
      }
      else if(!rev)
      {
        res
        .status(404)
        .json({"message": "Reviews not found"});
      }
      else{
        res
          .status(200)
          .json(rev);
      }

    })
  
   };

module.exports.concertsReadOne = function (req, res){
// res
//   .status(201)
//   .json({"ss": req.params.reviewid})
if (req.params && req.params.reviewid) {
    Con
      .findById(req.params.reviewid)
      .exec((err, conc) => {
        if (!conc) {
          res	
            .status(403) 
            .json({	
              err
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(conc);
      });
  } else {		
    res		
      .status(405) 	
      .json({	
        "message": "No review in request"
      });		
  }
};

var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};


/*
 const concertsUpdateOne = function (req, res) {
  if (!req.params.reviewid) {
    res
      .status(404)
      .json({
        "message": "Not found"
      });
    return;
  }
  Con
    .findById(req.params.reviewid)
    .select('reviews')
    .exec((err, conc) => {
      if (!conc) {
        res
          .status(404)
          .json({
            "message": "ReviewID not found"
          });
        return;
      } else if (err) {
        res
          .status(400)
          .json(err);
        return;
      }
      if (location.reviews && location.reviews.length > 0) {
        let thisReview = location.reviews.id(req.params.reviewid);
        if (!thisReview) {
          res
            .status(404)
            .json({
              "message": "reviewid not found"
            });
        } else {
          thisReview.author = req.body.author;
          thisReview.rating = req.body.rating;
          thisReview.reviewText = req.body.reviewText;
          location.save((err, location) => {
            if (err) {
              res
                .status(404)
                .json(err);
            } else {
              _updateAverageRating(location._id);
              res
                .status(200)
                .json(thisReview);
            }
          });
        }
      } else {
        res
          .status(404)
          json({
            "message": "No review to update"
          });
      }
    }
  );
};

  };*/

module.exports.concertsDeleteOne = function (req, res) {
  const reviewid = req.params.reviewid;
  if (reviewid) {
    Con
      .findByIdAndRemove(reviewid) 
      .exec((err, concert) => {
          if (err) {
            res
              .status(404)
              .json(err);
            return;
          }
          res
            .status(204)
            .json(null);
        }
    );
  } else {
    res
      .status(404)
      .json({
        "message": "No concert review to delete"
      });
  }
};



// module.exports = {
//   concertsCreate,
//   concertsReadOne,
//   concertsUpdateOne,
//   concertsDeleteOne
// };

