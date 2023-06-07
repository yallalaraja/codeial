const User = require('../models/user');

module.exports.profile = function(req,res){
    // res.end('<h1>User Profile</h1>');
    return res.render('user_profile',{
        title:'User Profile'
    });
} 

//render the sign up page
module.exports.signUp = function(req,res){
  if(req.isAuthenticated()){
    return res.redirect('/user/profile');
  }
    return res.render('user_sign_up',{
        title:"codeial | signup"
    })
}

//render the sign in page
module.exports.signIn = function(req,res){
  if(req.isAuthenticated()){
    return res.redirect('/users/profile');
  }
    return res.render('user_sign_in',{
        title:"Codeial | sign In"
    })
}

// get the sign-up data
module.exports.create = function(req, res) {
    if (req.body.password !== req.body.confirm_password) {
      return res.redirect('back');
    }
  
    User.findOne({email: req.body.email},function(err, user) {
      if (err) {
        console.log('error in finding user in signing up',err);
        return;
      }
  
      if (!user) { // Use "user" instead of "User"
        User.create(req.body, function(err, user) {
          if (err) {
            console.log('error in creating user while signing up');
            return;
          }
          return res.redirect('/users/sign-in');
        });
      } else {
        return res.redirect('back');
      }
    });
  };

//sign In and create a session for user
module.exports.createSession = function(req,res){
    return res.redirect('/');
}

//Destroy the session and cookie 
module.exports.destroySession = function(req, res){
  req.logout(function(err) {
      if (err) {
          console.log('Error logging out:', err);
          return;
      }
      // Additional operations after successful logout
      // For example, redirect the user to a different page
      res.redirect('/'); // Redirect to the homepage
  });
};
