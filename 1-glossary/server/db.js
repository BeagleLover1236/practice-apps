const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/glossary', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if(err) {
    throw err;
  } else{
    console.log("Database connected!")
  }
})

const glossarySchema = mongoose.Schema({
  word: {
    type: String,
    unique: true
  },
  definition: String
})

let Glossary = mongoose.model('Glossary', glossarySchema)
Glossary.createCollection();

let insert = (entry) => {
  Glossary.create(entry, (err) => {
    if(err) {
      console.log('Error saving to DB!:', err)
    } else {
      console.log('Sucessful save to DB!')
      console.log("THIS",entry)
    }
  })
}

let findEntries = (callback) => {
  Glossary.find((err, results) => {
    if(err) {
      callback(err, null)
      console.log('Error finding entries!:', err)
    } else {
      console.log("Success finding entries", results)
      callback(null, results)
    }
  })
}

let updateEntry = (params) => {
Glossary.updateOne({_id: params._id},{word: params.word, definition: params.definition}, (err) => {
    if(err) {
      console.log('Error put request:', err)
    } else {
      console.log("Sucess put request!")
    }
  })
}

let deleteEntry = (params) => {
  console.log(params._id)
  Glossary.deleteOne({_id: params._id}, (err) => {
    if(err) {
      console.log("Error deleting entry")
    } else {
      console.log("Succesful delete")
      console.log(params)
    }
  })
}

module.exports.insert = insert
module.exports.findEntries = findEntries
module.exports.updateEntry = updateEntry
module.exports.deleteEntry = deleteEntry
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
