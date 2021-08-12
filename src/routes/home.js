const route = require('express').Router();
const apiConnection = require('../../api/apiConnection');

console.log(apiConnection);

route.get("/", (req, res) => {


    res.render('home', {
        title: apiConnection.title,
        date: apiConnection.date,
        picture: apiConnection.featured_media,
        author: apiConnection.name

    });
});

module.exports = route;