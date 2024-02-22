import React, { useState, useEffect } from 'react';
import { render } from "react-dom";
const axios = require('axios')

import GlossaryAdd from './components/GlossaryAdd.jsx'
import GlossaryList from './components/GlossaryList.jsx'
import GlossarySearch from './components/GlossarySearch.jsx'

const App = () => {
  const [glossary, setGlossary] = useState([])
  const [filteredGlossary, setFilteredGlossary] = useState(glossary)
  const [isFiltered, setIsFiltered] = useState(false)


  const handleUpdate = (word, definition, _id) => {
    console.log(_id)
    axios.put(`/glossary/${_id}`, {_id: _id, word: word, definition: definition})
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      throw err
    })

    axios.get('/glossary')
    .then((response) => {
      setGlossary(response.data)
    })
    .catch((err) => {
      console.log("Error grabbing data:", err)
    })

  }

  const handleAdd = (word, definition) => {
    console.log("word:", word)
    axios.post("/glossary", {word: word, definition: definition})
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      if(err) {
        console.log("Error on posting to db:", err)
      }
    })

    axios.get('/glossary')
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log("Error grabbing data:", err)
    })
  }

  const handleDelete = (_id) => {
    console.log(_id)
    axios.delete(`/glossary/${_id}`, {data: {_id}})
    .then((response) => {
      console.log(response)
    })
    .catch((err) =>{
      throw err
    })

    axios.get('/glossary')
    .then((response) => {
      setGlossary(response.data)
    })
    .catch((err) => {
      console.log("Error grabbing data:", err)
    })

  }

  const handleSearch = (searchValue) => {

    const filtered = glossary.filter((entry) =>
      entry.word.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
    setFilteredGlossary(filtered)
    setIsFiltered(true)

    if(searchValue === '' || searchValue === null || searchValue === undefined) {
      setIsFiltered(false)
    }
  }
  useEffect(() => {
    axios.get('/glossary')
    .then((response) => {
      setGlossary(response.data)
    })
    .catch((err) => {
      console.log("Error grabbing data:", err)
    })
  }, [])

  return (
    <div>
      <h1>Glossary</h1>
      <GlossaryAdd handleAdd={handleAdd}/>
      <GlossarySearch handleSearch={handleSearch}/>
      {isFiltered ? (<GlossaryList handleUpdate={handleUpdate} handleDelete={handleDelete} glossary={filteredGlossary}/>) : (<GlossaryList handleUpdate={handleUpdate} handleDelete={handleDelete} glossary={glossary}/>)}

    </div>
  )
}
render(
  <App/>,
  document.getElementById("root")
);
