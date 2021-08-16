//Gets the information from the 'home.js' and returns the needed data

module.exports = function cardsInfo(data) {
    let cardsArray = [];

    try {

        data.forEach(element => {

            let cardHeaderRoute = element._embedded["wp:term"];
            let topic = cardHeaderRoute[2][0];
            let tag = cardHeaderRoute[1][0];
            const {name} = topic || tag;

            let card = {
                headerTitle: name,
                imgSource: element.featured_media,
                imgAlt: element.slug,
                title: element.title.rendered,
                titleLink: element.link,
                authorLink: element._embedded.author[0].link,
                author: element._embedded.author[0].name,
                date: element.date.split("T")[0],
                cardFooter: element._embedded["wp:term"][0][0].name
            };
            cardsArray.push(card);
        });
        return cardsArray;

    } catch (error) {
        console.log("The data couldn't be proccessed: ", error);
    }
}