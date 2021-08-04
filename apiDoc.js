const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';


const generateCards = async () => {

    //Fetching API's information
    try {
        const res = await fetch(url);
        const apiData = await res.json();
        apiData.forEach(cardData => {
            let cardShape = {
                title: cardData.title.rendered,
                date: cardData.date,
                featured_media: cardData.featured_media,
                name: cardData._embedded.author[0].name
            };

            createCard(cardShape)
        });
    } catch (err) {
        console.log("It wasn't possible to reach the information", err)
    }
}

//Creating the HTML elements (cards).

function createCard(cardShape) {

    let cardContainer = document.querySelector('#cards-container')
    const card = document.createElement('div')
    card.classList.add('p-card--highlighted', 'col-4')
    card.setAttribute('style', "min-height: 450px;")
    card.innerHTML = `
                             <p>CLOUD AND SERVER</p>
                             <hr class="is-fixed-width">
                             <div>
                                 <img src="${cardShape.featured_media}" alt="card img">
                             </div>
                             <div class="card-body">
                                 <h3 class="p-card__title p-heading--4"> <a>${cardShape.title} </a></h3>
                             </div>
                             <p class="p-card__content p-heading--6">By <a>${cardShape.name}</a> on ${formatDate(cardShape.date.split("T")[0])}</p>
                             
                             <hr class="is-fixed-width">
                             <p class="p-text--small">Article</p>                        
                         `;
    cardContainer.appendChild(card);
}

//Formating dates using a function and the toLocaleDateString() method.

function formatDate(articleDate) {

    let date = new Date(articleDate)
    return date.toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });
}

generateCards();