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


  console.info(req.body);
  db.push(req.body);

  fs.writeFile("./db/db.json", JSON.stringify(db, null, 2), (err) => err ? console.error(err) : console.log("success"));

 
  console.info(`${req.method} request received`);

});



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🎧`)
);
