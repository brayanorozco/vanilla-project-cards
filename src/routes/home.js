const route = require('express').Router();
const apiConnection = require('../../api/apiConnection');
const cardsInfo = require('../utils/cardsInfo');

//Getting data from the 'apiConnection' module and rendering the 'home' page

route.get("/", async (req, res) => {
    try {
        const apiData = await apiConnection();
        let data = cardsInfo(apiData); //'cardsInfo()' gets the actual data to be showed

        res.render('home', {
            data,
            formatDate: require('../utils/formatDates'),
        });
    } catch (err) {
        res.render('error', {
            error: err
        })
    }
});

module.exports = route;