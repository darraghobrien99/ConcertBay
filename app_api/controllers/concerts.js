const mongoose = require('mongoose');
const Con = mongoose.model('Review');



module.exports.newCon = function(req, res){
    Con.create({
        artistName : req.body.artistName,
        venueName : req.body.venueName,
        entertainment : req.body.entertainment,
        production : req.body.production,
        vocals : req.body.vocals,
        value : req.body.value
    }, 
    function(err, meal) {
        if (err) {
            sendJsonResponse(res, 403, err);
        }
        else {
            sendJsonResponse(res, 203, meal);
        }
    });
}

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



// const concertsUpdateOne = function (req, res) {
// res
// .status(200)
// .json({"status" : "success"});
//  };
// const concertsDeleteOne = function (req, res) {
// res
// .status(200)
// .json({"status" : "success"});
//  };

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
