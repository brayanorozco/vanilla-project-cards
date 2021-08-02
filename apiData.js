const fetch = require("node-fetch");
const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';

fetch(url)
.then(response => response.json())
.then(data => {

    console.log(data)
})
.catch(err => console.log(err))

