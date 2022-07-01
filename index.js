const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');

require('dotenv').config();


const PORT = process.env.PORT || 6700;

const db = require('./config/mongoose');


app.use(expressLayouts);
app.use("/assets", express.static('./assets'));
app.set('view engine', 'ejs');

//body-parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());


if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'));
}


app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);


//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));



app.listen(PORT,()=>{
    console.log(`Server successfully runnunig on port : ${PORT}`);
})