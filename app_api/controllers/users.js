const mongoose = require('mongoose');
const Usr = mongoose.model('User');



module.exports.newUser = function(req, res){
    Usr.create({
        fullName : req.body.fullName,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
    }, 
    function(err, user) {
        if (err) {
            sendJsonResponse(res, 403, err);
        }
        else {
            sendJsonResponse(res, 203, user);
        }
    });
}


module.exports.usersReadOne = function (req, res){
/* res
  .status(201)
  .json({"User ID": req.params.reviewid})*/
if (req.params && req.params.userid) {
    Usr
      .findById(req.params.userid)
      .exec((err, user2) => {
        if (!user2) {
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
          .json(user2);
      });
  } else {		
    res		
      .status(405) 	
      .json({	
        "message": "No user in request"
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

module.exports.usersDeleteOne = function (req, res) {
  const userid = req.params.userid;
  if (userid) {
    Usr
      .findByIdAndRemove(userid) 
      .exec((err, users2) => {
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
        "message": "No user to delete"
      });
  }
};



// module.exports = {
//   concertsCreate,
//   concertsReadOne,
//   concertsUpdateOne,
//   concertsDeleteOne
// };

