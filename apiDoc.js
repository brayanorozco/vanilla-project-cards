const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';
let cardContainer = document.querySelector('#cards-container')

const generateCards = async () => {
    //Taking the information from the API
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

            //Adding elements and the information from "cardShape"

            const card = document.createElement('div')
            card.classList.add('p-card--highlighted', 'col-4')
            card.setAttribute('style', "min-height: 400px;")
            card.innerHTML = `
                                <span>CLOUD AND SERVER</span>
                                <hr class="is-fixed-width">
                                <div>
                                    <img src="${cardShape.featured_media}" alt="card img">
                                </div>
                                <div class="card-body">
                                    <h3 class="p-card__title p-heading--4"> <a>${cardShape.title} </a></h3>
                                </div>
                                <p class="p-card__content p-heading--6">By <a>${cardShape.name}</a> on ${cardShape.date.split("T")[0]}</p>
                                <hr class="is-fixed-width">
                                <span>Article</span>
                        
                            `;
            cardContainer.appendChild(card);
        });
    } catch (err) {
        console.log("SOMETHING WENT WRONG!!!", err)
    }
}

generateCards()