// This code defines routes for user authentication and related actions using Express.js. 
// It includes routes for signing in, signing up, logging out, resetting password, and accessing the home page, with middleware isLoggedIn ensuring authentication for accessing the home route.
const authController = require("../app/controller/authController")
const isLoggedIn = require('../app/middleware/guest')
function initRoutes(app){
app.get('/signin',authController().signin)
app.post('/signin',authController().postSignin)
app.get('/',authController().signup)
app.post('/',authController().postSignup)
app.post('/logout',authController().logout)
app.get('/reset',authController().reset)
app.post('/reset',authController().resetPassword)
app.get('/home',isLoggedIn,authController().home)

}
module.exports = initRoutes
