# Take-a-Note

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## https://infinite-waters-08591.herokuapp.com/

This is a full stack note taking app that uses express.js running on Node to store notes on the backend server using POST and GET. The front end uses Bootstrap CSS framework utilizing Bootswatch for theming.

##

- Math.random() is used to generate a 4 digit base16 ID for each note.

`Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);`
- All of the routing is handled by the backend server

`app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});`
- Persistant data is stored in JSON format.

`  fs.writeFile("./db/db.json", JSON.stringify(db, null, 2), (err) => err ? console.error(err) : console.log("success"));`


![Screen Recording 2022-01-29 at 11 55 36 PM](https://user-images.githubusercontent.com/1414728/151691554-96a6df45-d4cc-416c-812f-bced396f6683.gif)

## Deployed link

https://infinite-waters-08591.herokuapp.com/


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [node.js](https://nodejs.dev) 
* [express.js](http://expressjs.com)


## Authors

Garrett Corbin

- [https://github.com/antieatingactivist/](https://github.com/)
- [https://www.linkedin.com/in/garrett-corbin-7a7777227/](https://www.linkedin.com/)

## License

This project is licensed under The MIT license

