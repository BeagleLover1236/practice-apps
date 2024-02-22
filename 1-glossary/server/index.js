require("dotenv").config();
const express = require("express");
const path = require("path");
const dbHelper = require('./db')

const app = express();

// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname,'../client','dist')));
app.use(express.json())

app.get("/glossary", (req, res) => {
dbHelper.findEntries((err, results) => {
  if(err) {
    res.status(500)
    console.log("Unsuccesful GET:", err)
  } else {
    res.status(200)
    res.send(results)
  }
})
})

app.post("/glossary", (req, res) => {
  dbHelper.insert({
    word: req.body.word,
    definition: req.body.definition
  }, (err) => {
    if(err){
      res.status(500)
      console.log("Error posting!:", err)
    } else {
      res.status(201)
      console.log("Success posting!")
    }
  })
})

app.put("/glossary/:_id", (req, res) => {

dbHelper.updateEntry(req.body, (err) => {
  if(err) {
    res.status(400)
  } else {
    res.status(200)
    res.send("Successful update!")
  }
})
})

app.delete("/glossary/:_id", (req, res) => {

  dbHelper.deleteEntry(req.body, (err) => {
    if(err) {
      res.status(400)
    } else {
      res.status(200).send("Successful delete!")
    }
  })
})
/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
