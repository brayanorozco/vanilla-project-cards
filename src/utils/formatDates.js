//Returns the date in the format shown on the card

module.exports = formatDate = (blogDate) => {

    let date = new Date(blogDate)
    return date.toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });
}