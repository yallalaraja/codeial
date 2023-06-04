const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookiePaser = require('cookie-parser');

app.use(expressLayouts);
app.use(express.static('./assets'));
app.use(cookiePaser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//extract styles and scripts from subpages into layout app
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use express router
app.use('/',require('./routes'));

//setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err)
    {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`server is running on port :${port}`);
});