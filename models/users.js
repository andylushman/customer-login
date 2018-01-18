'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  pointsEarned: Number,
  totalPoints: Number,
  lastLogin: { type: Date, default: Date.now }
});

//export our module to use in server.js
module.exports = mongoose.model('User', userSchema);
