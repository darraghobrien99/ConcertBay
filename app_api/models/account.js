const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
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
}

 });

mongoose.model('Users', usersSchema);