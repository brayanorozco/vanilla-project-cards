const fetch = require("node-fetch");
const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';
let cardsData = [];

fetch(url)
    .then(response => response.json())
    .then(apiData => {

        //apiData contains all the information that was taken from the API.

        apiData.forEach(fromApi => {

            let cardData = {
                title: fromApi.title.rendered,
                date: fromApi.date,
                featured_media: fromApi.featured_media,
                name: fromApi._embedded.author[0].name
            };

            cardsData.push(cardData);
        });
        console.log(cardsData);

        //cardData filters the information and pushes it to cardsData, which is the array containing all the card data.
    })
    .catch(err => console.log(err))