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
Con
.findById(req.params.reviewid) 
.exec((err, concert) => { 
res 
.status(200) 
.json(concert); 
});
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

