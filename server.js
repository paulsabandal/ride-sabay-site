var express = require('express');
var path = require('path');
var app = express();
const router = express.Router();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index.ejs');
});

app.get('/passenger', function(req, res) {
    res.render('pages/passenger.ejs');
});

app.get('/rider', function(req, res) {
    res.render('pages/rider.ejs');
});

app.get('/dashboard', function(req, res) {
    res.render('pages/dashboard.ejs');
});

app.get('/dashboard-rider', function(req, res) {
    res.render('pages/dashboard-rider.ejs');
});

app.get('/last-step', function(req, res) {
    res.render('pages/last-step.ejs');
});

app.get('/login', function(req, res) {
    res.render('pages/login.ejs');
});

app.get('/passenger', function(req, res) {
    res.render('pages/passenger.ejs');
});

app.get('/privacy-policy', function(req, res) {
    res.render('pages/privacy-policy.ejs');
});

app.get('/terms-for-passenger', function(req, res) {
    res.render('pages/terms-for-passenger.ejs');
});

app.get('/terms-for-riders', function(req, res) {
    res.render('pages/terms-for-riders.ejs');
});

app.get('/welcome', function(req, res) {
    res.render('pages/welcome.ejs');
});

app.get('/success', function(req, res) {
    res.render('pages/success.ejs');
});

app.get('/six-digit', function(req, res) {
    res.render('pages/six-digit.ejs');
});

app.get('/faq', function(req, res) {
    res.render('pages/faq.ejs');
});

app.get('/registration', function(req, res) {
    res.render('pages/registration.ejs');
});

app.get('/registration-referral', function(req, res) {
    res.render('pages/registration-referral.ejs');
});

app.use(express.static(__dirname));


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});
