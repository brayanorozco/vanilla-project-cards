const express = require('express');
const app = express();

const home = require('./src/routes/home');


app.use(express.static(__dirname + '/public'));

//body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//Using EJS engine for the views
app.set('view engine', 'ejs');
app.set('views', "./src/views");

app.use('/', home);

module.exports = app;