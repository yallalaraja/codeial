const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');

//authentication using passport 
passport.use(new LocalStrategy({
    usernameField:'email'
},
    function(email,password,done){
        //find a user and establish identity
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('Error in finding user -->passport ');
                return done(err);
            }
            if(!user || user.password!=password){
                console.log('Invalid Username / password');
                return done(null,false);
            }
            return done(null,user);
        })
    }
));

//Serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    return done(null,user.id);

});

//deserialize user from key in the cookies 
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding user-->passport');
            return done(err);
        }
        return done(null,user);
    })
});

//check if user is authenticated 
passport.checkAuthentication = function(req,res,next){
    //if user is signed in then pass on request to next function
    if(req.isAuthenticated()){
        return next();
    }
    //if user is not signed in 
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        //req.user contains current signed in user from session cookie and we are just sending this to the locals for the views 
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;