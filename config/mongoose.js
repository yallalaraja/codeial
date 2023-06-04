const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/codeial_development');
mongoose.connect('mongodb://127.0.0.1:27017/codeial_development', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connect to MongoDB"));
db.once('open',function(){
    console.log('connected to Database :: MongoDB');
});

module.exports = db;