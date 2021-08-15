const route = require('express').Router();
const apiConnection = require('../../api/apiConnection');
const cardsInfo = require('../utils/cardsInfo');

route.get("/", async (req, res) => {
    try {
        const apiData = await apiConnection();
        let data = cardsInfo(apiData);

        res.render('home', {
            data,
            helper: require('../utils/formatDates'),
        });
    } catch (err) {
        res.render('error', {
            error: err
        })
    }
});

module.exports = route;