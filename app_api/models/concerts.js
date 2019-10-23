const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
artistName: {
type: String,
required: true
},

venueName: {
type: String,
required: true
},

entertainment: {
type: Number,
'default': 0,
min: 0,
max: 5

},

production: {
type: Number,
'default': 0,
min: 0,
max: 5

},

vocals: {
type: Number,
'default': 0,
min: 0,
max: 5

},

value: {
type: Number,
'default': 0,
min: 0,
max: 5

},

comment: {
type: String,
required: true
}
 });

mongoose.model('Concert', concertSchema);