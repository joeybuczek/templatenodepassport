// Template for Node and Passport for Authentication

// set up ======================================================================
// env vars for local developement
if (!process.env.SESSION_SECRET) { require('./env'); }

// modules and dependencies
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport'); // create passport auth object
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var swig         = require('swig');

var configDB = require('./config/database');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to the database

require('./config/passport')(passport); // pass passport object to be configured

// set up express app
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get info from forms

// static files
app.use(express.static('public', {redirect: false}));

// view engine (swig)
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// passport requirements - load from env vars where needed
app.use(session({ secret: process.env.SESSION_SECRET })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persist login sessions
app.use(flash()); 

// routes ======================================================================
require('./app/routes.js')(app, passport); // load routes and pass in app/passport

// 404 catch
app.use(function(req, res){
    // res.render('404', { 
    //     key: 'value' // local vars for 404 html page
    // });
    res.status(404);
    res.send('404 - Unable to locate what you were looking for.')
});

// listen ======================================================================
app.listen(port, function(){
    console.log('Now listening on port ' + port);
});
