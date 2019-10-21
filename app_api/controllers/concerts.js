const mongoose = require('mongoose');
const Con = mongoose.model('Concert');


const concertsCreate = function (req, res) {
res
.status(200)
.json({"status" : "success"});
 };
const concertsReadOne = function (req, res){

res 
.status(200) 
.json({"status" : "success"}); 

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

