// sets up Passport.js for user authentication using the local strategy, integrates it with the User model, 
// and defines serialization and deserialization methods for user objects.
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

function init(passport) {
    passport.use(new LocalStrategy(User.authenticate()));
    passport.use(User.createStrategy());


    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
}
module.exports = init;
