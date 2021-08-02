const fetch = require("node-fetch");
const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';

fetch(url)
    .then(response => response.json())
    .then(cardsData => {

        const {
            title,
            date,
            featured_media,
            _embedded
        } = cardsData;

        let author = _embedded.author[0].name;

        console.log(title.rendered, date, featured_media, author);
    })
    .catch(err => console.log(err))