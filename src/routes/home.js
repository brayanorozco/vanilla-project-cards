const route = require('express').Router();
const apiConnection = require('../../api/apiConnection');


route.get("/", async (req, res) => {
    try {
        const apiData = await apiConnection();

        res.render('home', {
            apiData
        });
    } catch (err) {
        res.render('error', {
            error: 'Hello, this is an error'
        })
    }

});


module.exports = route;