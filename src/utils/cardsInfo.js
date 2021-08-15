module.exports = function cardsInfo(data) {
    let cardsArray = [];

    try {

        data.forEach(element => {

            const {
                name
            } = element._embedded["wp:term"][2][0] || element._embedded["wp:term"][1][0];

            let card = {
                name,
                source: element.featured_media,
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