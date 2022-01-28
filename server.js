const express = require('express');
const path = require('path');
const db = require('./db/db.json');
const fs = require('fs');

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api/notes', (req, res) => {

  // res.json(`${req.method} request received`);

  // console.info(`${req.method} request received`);

  res.json(db);

});

app.post('/api/notes', (req, res) => {

  res.json(`${req.method} request received`);

  // console.log(Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1));

  console.info(req.body);
  req.body.id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

  db.push(req.body);

  fs.writeFile("./db/db.json", JSON.stringify(db, null, 2), (err) => err ? console.error(err) : console.log("success"));

 
  console.info(`${req.method} request received`);

});

app.delete('/api/notes/:id', function (req, res) {
  // console.log(req.params.id);
  for (let i in db) {

    if (db[i].id == req.params.id) {
      // console.log("match");
      db.splice (i, 1);
      fs.writeFile("./db/db.json", JSON.stringify(db, null, 2), (err) => err ? console.error(err) : console.log("success"));
    }
    // console.log(db);
  }


  res.send(`Got a DELETE request at /user (${req.body})`)
})



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🎧`)
);
