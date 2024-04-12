// This middleware function checks if the user is authenticated and redirects to the sign-in page if not.
function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect("/signin");
    }
    module.exports=isLoggedIn;
    
