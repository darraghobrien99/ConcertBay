const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
fullName: {
type: String,
required: true
},

email: {
type: String,
required: true
},

username: {
type: String,
required: true

},

password: {
type: String,
required: true
},

versionKey: false // set to false then it wont create in mongodb

 });

mongoose.model('User', userSchema);