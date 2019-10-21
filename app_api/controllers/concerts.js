const mongoose = require('mongoose');
const Con = mongoose.model('Concert');


const concertsCreate = function (req, res) {
res
.status(200)
.json({"status" : "success"});

 };
const concertsReadOne = function (req, res){
  if (req.params && req.params.reviewid) {
    Con
      .findById(req.params.reviewid)
      .exec((err, concert) => {
        if (!concert) {
          res	
            .status(404) 
            .json({	
              "message": "ReviewID not found"
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
          .json(concert);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No ReviewID in request"
      });		
  }
};


const concertsUpdateOne = function (req, res) {
res
.status(200)
.json({"status" : "success"});
 };
const concertsDeleteOne = function (req, res) {
res
.status(200)
.json({"status" : "success"});
 };

module.exports = {
  concertsCreate,
  concertsReadOne,
  concertsUpdateOne,
  concertsDeleteOne
};

