# BLOG CARDS USING VANILLA FRAMEWORK

_A simple project in which three blog's cards are displayed, with the information taken directly from an API._

## Screenshot

![image](https://user-images.githubusercontent.com/82540037/129616837-4fd9ef5f-f1d3-42e5-896c-561faa09c16d.png)

## Prerequisites

🔹 _Code editor._
🔹 _Package Manager for JavaScript._
🔹 _Vanilla Framework (It's used via hotlink in this project)._


## Get started 🚀

🔹 _Install the dependencies with NPM (package manager): npm install_

🔹 _The following dependencies will be installed:_

build-css, ejs, express, node-fetch, node-sass, nodemon

🔹 _Run the project: npm run devstart_

```
You'll get the following message on the terminal: 'Server is running: http://localhost:3000/'
```
_

### Optional 

🔹 _Start Sass running the following command: npm run watch-css_


## Folders and files 📦

🔹 _api: In this folder you will find the file 'apiConnection.js' which is responsible for fetching the API information._
🔹 _public: Contains the CSS and Sass files._
🔹_src: _It contains most of the files needed for the project to work._ 

        🔹 _partials: Inside this folder are the files 'cards.ejs' and 'head.ejs' which are then inserted into the file 'home.ejs'.
        🔹 _routes: The 'home.js' file is in charge of rendering the home page.
        🔹 _utils: cardsInfo' and 'formatDates' contain two functions, one returns the filtered information to 'home.js' and the other returns the date in the format shown on the card._
        🔹 _views: Contain the views of the project (EJS files)._

🔹 _'index.js' and 'server.js': These are the files with the necessary configuration to run the project.


## Project made using 🛠️ 

🔹 _Technologies: EJS, Sass, Javascript, Express._  

🔹 _Canonical's Vanilla Framework:_ https://vanillaframework.io/docs

🔹 _The data shown in the cards was taken from Canonical's Wordpress API:_ https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json
