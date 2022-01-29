const express = require('express');
const path = require('path');
const fs = require('fs');
var db = require('./db/db.json');
const PORT = process.env.PORT || 3001;

//middleware
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
  res.json(db);
});

app.post('/api/notes', (req, res) => {

  res.json(`${req.method} request received`);

  //generates 4 digit uuid
  req.body.id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

  //pushes new note to db
  db.push(req.body);

  //writes new db to json
  fs.writeFile("./db/db.json", JSON.stringify(db, null, 2), (err) => err ? console.error(err) : console.log("success"));

});

app.delete('/api/notes/:id', function (req, res) {
  
  // removes the note with matching id
  db = db.filter(note => note.id !== req.params.id);

  fs.writeFile("./db/db.json", JSON.stringify(db, null, 2), (err) => err ? console.error(err) : console.log("success"));

  res.send(`Got a DELETE request at /user (${req.body})`)
});



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🎧`)
);
