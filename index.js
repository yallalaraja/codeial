const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const sassMiddleWare = require('node-sass-middleware');

app.use(sassMiddleWare({
  src:'./assets/scss',
  dest:'./assets/css',
  debug:true,
  outputStyle:'extended',
  prefix:'/css'
}));

app.use(expressLayouts);
app.use(express.static('./assets'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: 'codeial',
    // Todo: change the secret before deploying in production
    secret: 'blahsomething',
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100, // 100 minutes
    },
    store:  MongoStore.create({
      mongoUrl: 'mongodb://127.0.0.1:27017/codeial_development',
      mongooseConnection: db,
      autoRemove: 'disabled',
    }),
    function (err) {
      console.log(err || 'connect-mongodb setup ok');
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//extract styles and scripts from subpages into layout app
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//setting up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//use express router
app.use('/', require('./routes'));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  } else {
    console.log(`Server is running on port: ${port}`);
  }
});
