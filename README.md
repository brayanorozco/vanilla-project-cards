# BLOG CARDS USING VANILLA FRAMEWORK

_A simple project in which three blog cards are displayed, with the information taken directly from an API._


### Screenshot

![image](https://user-images.githubusercontent.com/82540037/129624613-0d8c03f0-bf76-4db0-b4b7-5f954dd584a2.png)



## Prerequisites

ð¹ _Code editor._

ð¹ _Package Manager for JavaScript._

ð¹ _Vanilla Framework (It's used via hotlink in this project)._



## Get started ð

ð¹ _Install the dependencies with NPM (package manager): npm install_

ð¹ _The following dependencies will be installed:_

build-css, ejs, express, node-fetch, node-sass, nodemon

ð¹ _Run the project: npm run devstart_

```
You'll get the following message on the terminal: 'Server is running: http://localhost:3000/'
```
_


### Optional 

ð¹ _Start Sass running the following command: npm run watch-css_




## Folders and files ð¦

ð¹ _api: In this folder you will find the file 'apiConnection.js' which is responsible for fetching the API information._

ð¹ _public: Contains the CSS and Sass files._

ð¹src: It contains most of the folders and files needed for the project to work:

        ð¹ partials: Inside this folder are the files 'cards.ejs' and 'head.ejs' which
            are then inserted into the file 'home.ejs'.

        ð¹ routes: The 'home.js' file is in charge of rendering the home page.

        ð¹ utils: cardsInfo' and 'formatDates' contain two functions, one returns the filtered
            information to 'home.js' and the other returns the date in the format shown on the
            card.

        ð¹ views: Contain the views of the project (EJS files).

ð¹ _'index.js' and 'server.js': These are the files with the necessary configuration to run the project._




## Project made using ð ï¸ 

ð¹ _Technologies: EJS, Sass, Javascript, Express._  

ð¹ _Canonical's Vanilla Framework:_ https://vanillaframework.io/docs

ð¹ _The data shown in the cards was taken from Canonical's Wordpress API:_ https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json
