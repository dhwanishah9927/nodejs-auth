// sets up a Mongoose schema for a user, including fields for username, email, and password. 
// It also incorporates passportLocalMongoose for handling user authentication.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
	username: { type: String, required: true},  
	  email: { type: String, required: true, unique: true },
	password: { type: String}, 
},{  timestamps: true});


userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
