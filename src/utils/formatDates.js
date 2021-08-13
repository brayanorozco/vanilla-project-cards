const app = require('../../server');

app.locals.formatDate = (blogDate) => {

    let date = new Date(blogDate)
    return date.toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });
}