const fetch = require("node-fetch");
const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';

//Fetching API's information

const apiConnection = async () => {
    try {
        const res = await fetch(url);
        return res.json();

    } catch (err) {
        console.log("It wasn't possible to reach the information", err)
        throw err;
    }
}

module.exports = apiConnection;