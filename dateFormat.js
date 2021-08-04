const fetch = require("node-fetch");
const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const formattedDate = async () => {

    try {
        const res = await fetch(url);
        const dataFromApi = await res.json();

        dataFromApi.forEach(element => {
            let articleDate = {
                date: element.date
            };
            let fullDate = articleDate.date.split("T")[0].split("-");
            let day = fullDate[2]
            let month = parseInt(fullDate[1]);
            let year = fullDate[0]
            let date = `${day} ${months[month-1]} ${year}`
            console.log(date);

        });
    } catch (error) {
        console.error(error);
    }

}

formattedDate();