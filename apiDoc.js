const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';
let cardContainer = document.querySelector('#cards-container')

const generateCards = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        data.forEach(cardData => {
            let cardShape = {
                title: cardData.title.rendered,
                date: cardData.date,
                featured_media: cardData.featured_media,
                name: cardData._embedded.author[0].name
            };
            const card = document.createElement('div')
            card.classList.add('p-card--highlighted', 'col-4')
            card.setAttribute('style', "min-height: 450px;")
            card.innerHTML = `
                                <span>CLOUD AND SERVER</span>
                                <hr class="is-fixed-width">
                                <div>
                                    <img src="${cardShape.featured_media}" alt="card img">
                                </div>
                                 <h3 class="p-card__title"> <a>${cardShape.title} <a></h3>
                                <p class="p-card__content">By <a>${cardShape.name}</a> on ${cardShape.date.split("T")[0]}</p>
                                <hr class="is-fixed-width">
                                <span>Article</span>
                            `;
            cardContainer.appendChild(card);
        });
    } catch (e) {
        console.log("SOMETHING WENT WRONG!!!", e)
    }
}

generateCards()



// fetch(url)
//     .then(response => response.json())
//     .then(apiData => {

//         //apiData contains all the information that was taken from the API.

//         apiData.forEach(fromApi => {
//             console.log(fromApi)
//             let cardData = {
//                 title: fromApi.title.rendered,
//                 date: fromApi.date,
//                 featured_media: fromApi.featured_media,
//                 name: fromApi._embedded.author[0].name
//             };
//               const card = document.createElement('div')
//               card.innerHTML = `
//               <div class="p-card--highlighted col-4">
//                     <span>CLOUD AND SERVER</span>
//                     <hr class="is-fixed-width">
//                     <div>
//                         <img src="${cardData.featured_media}" alt="card img">
//                     </div>
//                     <h3 class="p-card__title">We'd love to have you join us as a partner.</h3>
//                     <p class="p-card__content">If you are an independent software vendor or bundle author, it's easy to apply.
//                         You can find out more below.</p>
//                     <hr class="is-fixed-width">
//                 </div>
//               `
//             cardsData.push(cardData);
//         });
//         console.log(cardsData);

//         //cardData filters the information and pushes it to cardsData, which is the array containing all the card data.
//     })
//     .catch(err => console.log(err))