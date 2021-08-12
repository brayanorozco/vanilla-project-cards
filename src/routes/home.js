const route = require('express').Router();
const apiConnection = require('../../api/apiConnection');


apiConnection().then((data) => {

    let apiData = data
    //console.log(apiData);

    route.get("/", (req, res) => {

        res.render('home', {
            apiData
        });
        
    });
    //console.log(apiData);
})


module.exports = route;