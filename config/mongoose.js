//require the library
const mongoose = require('mongoose');

// connect to the database
//STEP 2
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/habit-tracker"); 
// mongoose.connect(env.db);

// acquire the connection to check if it is successfull
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connection to db'));

//successful
db.once('open',function(){
    console.log('Successfully Connected to the DB');
});

module.exports = db;