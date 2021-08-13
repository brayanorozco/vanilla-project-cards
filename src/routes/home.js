const route = require('express').Router();
const apiConnection = require('../../api/apiConnection');


route.get("/", async (req, res) => {
    try {
        const apiData = await apiConnection();
        res.render('home', {
            apiData,
            helper: require('../utils/formatDates'),
        });
    } catch (err) {
        res.render('error', {
            error: err
        })
    }
});

module.exports = route;