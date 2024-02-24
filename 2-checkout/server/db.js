const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() => {
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, sessionID varchar(50) NOT NULL UNIQUE, name varchar(50) NOT NULL, email varchar(50) NOT NULL UNIQUE, password varchar(50) NOT NULL, line1 varchar(50) NULL, line2 varchar(50) NULL, city varchar(50) NULL, state varchar(50) NULL, zipCode int NULL, phoneNumber varchar(50) NULL, cardNumber int NULL, expiration varchar(50) NULL, cvv int NULL, billingZip int NULL)"
    )
  })
  .catch((err) => console.log(err));

  const createAccount = (parameters, callback) => {
    console.log(parameters)

    db.queryAsync("INSERT INTO responses (sessionID, name, email, password, line1, line2, city, state, zipCode, phoneNumber, cardNumber, expiration, billingZip) VALUE (?, ?, ?, ?, null, null, null, null, null, null, null, null, null);", parameters)
    .then((results) => {
      callback(null, results)
    })
    .catch((err) => {
      console.log("Error adding to db", err)
      callback(err, null)
    })
  }

  const createShipping = (parameters, callback) => {
    db.queryAsync(`UPDATE responses SET line1 = ?, line2 = ?, city = ?, state = ?, zipCode = ?, phoneNumber = ? WHERE sessionID = ?`, parameters)
    .then((results) => {
      callback(null, results)
    })
    .catch((err) => {
      console.log("Error updating shipping", err, 'THIS IS PARAMENTERS', parameters)
      callback(err, null)
    })
  }

  const createCard = (parameters, callback) => {
    db.queryAsync('UPDATE responses SET cardNumber = ?, expiration = ?, cvv = ?, billingZip = ? WHERE sessionID = ?', parameters)
    .then((results) => {
      callback(null, results)
    })
    .catch((err) => {
      console.log("Error updating card",err, 'THIS IS PARAMENTERS', parameters)
      callback(err, null)
    })
  }

  const getInfo = (parameters, callback) => {
    db.queryAsync("SELECT * FROM responses WHERE sessionID = ?", parameters)
    .then((results) => {
      callback(null, results)
    })
    .catch((err) => {
      console.log("Unsuccesfull GET", err, parameters)
      callback(err, null)
    })
  }

  // const createCard = parameters

module.exports.db = db;
module.exports.createAccount = createAccount;
module.exports.createShipping = createShipping
module.exports.createCard = createCard
module.exports.getInfo = getInfo
