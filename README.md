# nodejs-auth
see live on: https://nodejs-auth-project-4840.onrender.com/ 
This is a Nodejs Authentication Project responsive across all devices, and built using Nodejs, Ejs ,CSS, Javascript , Bootstrap.


Features
-User signup on this page ..Name,Email_ID, and Password .
-User sign in on this page...Name and Password.
-User can reset or change password.Enter your name , Enter your old password and Enter new password. 
-The Password store in mongoDB has encrypted


folder structure

 |--->public——>
    |		|--->css
    |					|-->style.css
    |		|--->images
    |					|-->CNLogo.png
    |					|-->codingNinjas.jpg
    |					|-->user.jpg
    |——>app——>
    |   	|--->controller-->|-->
    |  	                  		|-->authController.js
    | 		|--->middleware—>
    |                 			|-->guest.js
    |		|--->models---->|
    |           			|-->user.js
    |		|--->database——>|
    |        		 		|-->db.js
    |		|--->passport——>|
    |              			|-->passport.js
    |--->routes---->
    |               |-->web.js
    |--->views---->
    |        --->auth
    |              |--->home.ejs
    |              |--->reset.ejs
    |              |--->signin.ejs
    |              |--->signup.ejs
    |        --->errors
    |              |--->error.ejs
    |
    |-->node_modules
    |--> .env
    |--> README.md
    |--> index.js
    |--> package-lock.json
    |-->package.json
