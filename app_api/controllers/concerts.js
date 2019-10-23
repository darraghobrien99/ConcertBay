const mongoose = require('mongoose');
const Con = mongoose.model('Concert');



const concertsCreate = function (req, res) {
Con.create({ 
_id: mongoose.Types.ObjectId(),
artistName: req.body.artistName,
venueName: req.body.venueName,
entertainment: req.body.entertainment,
production: req.body.production,
vocals: req.body.vocals,
value: req.body.value,
comment: req.body.comment
}, (err, concert) => { 
if (err) {
res
.status(400)
.json(err);
} else {
res
.status(201)
.json(concert);
}
});
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
              "message": "reviewid not found"
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
        "message": "No review in request"
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

