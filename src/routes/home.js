const route = require('express').Router();
const apiConnection = require('../../api/apiConnection');

apiConnection().then((data) => {

    let apiData = data;

    route.get("/", (req, res) => {

        res.render('home', {
            apiData
        });
    });
})

module.exports = route;