require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in a specified folder.
app.use(express.static(path.join(__dirname, '../client', 'dist')));
app.use(express.json())

app.post('/responses', (req, res) => {
  const parameters = [req.session_id, req.body.name, req.body.email, req.body.password]
  db.createAccount(parameters, (err) => {
    if(err) {
      res.status(500).send('Error posting to DB' , err)
    } else {
      res.status(201)
    }
})
})

app.put("/responses/shipping", (req, res) => {
  const parameters = [req.body.line1, req.body.line2, req.body.city, req.body.state, Number(req.body.zipCode), req.body.phoneNumber, req.session_id]
  db.createShipping(parameters, (err) => {
    if(err) {
      res.status(500).send('Error updating shipping information', err)
    } else {
      res.status(201)
    }
  })
})

app.put('/responses/card', (req, res) => {
  const parameters = [req.body.cardNumber, req.body.expiration, req.body.cvv, req.body.billingZip, req.session_id]
  db.createCard(parameters, (err) => {
    if(err) {
      res.send(500, `Error updating shipping information: ${err}`)
    } else {
      res.send(201)
    }
  })
})

app.get('/responses', (req, res) => {
  const parameters = [req.session_id]
  db.getInfo(parameters, (err, results) => {
    if(err) {
      res.send(400, `Error getting: ${err}`)
    } else {
      res.send(200, results)
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
