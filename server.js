const express = require('express');
const app = express();

const home = require('./src/routes/home');

app.use(express.static(__dirname + '/public'));

//Using EJS engine for the views
app.set('view engine', 'ejs');
app.set('views', "./src/views");

app.use('/', home);


module.exports = app;