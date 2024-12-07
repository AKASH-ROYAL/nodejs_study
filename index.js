const express = require ("express");
const path = require('path');
const cookieParser = require("cookie-parser");
const {restrictToLoggedInUsersOnly}= require('./services/middware')
const {connectDb}= require('./connect');

// routes
const urlRouter= require("./routes/url");
const staticRoute= require('./routes/static_routes');
const userRoute= require('./routes/user');

var PORT = 8000;
var app = express();

// middlewares
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cookieParser())


 connectDb('mongodb://127.0.0.1:27017/short-id').then(()=> {
    console.log("Database connected...");
 });

 app.use('/url',restrictToLoggedInUsersOnly,urlRouter ),
 app.use('/', staticRoute);
 app.use('/user', userRoute);



app.listen(PORT, ()=> {
    console.log('Server started...')
})