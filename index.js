require('dotenv').config();
console.log(process.env.SESSION_SECRET);
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var db = require('./db');
var shortid = require('shortid');

var userRoutes = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var authMiddleware = require('./middleware/auth.middleware');

var port = 3000;
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(bodyParser.json())
app.set('view engine','pug');
app.set('views','./views');
app.get('/',function(req,res){
    res.render('index',{
        name:'khanh'
    });
}); 
app.use('/users',authMiddleware.requireAuth,userRoutes);
app.use('/auth',authRoute);
app.listen(port,function(){
    console.log(`Example app listening on port ${port}`);
});