import { useState, useEffect } from 'react';

const GlossaryEntry = (props) => {
  const [seen, setSeen] = useState(true)
  // const [wordInput, setWordInput] = useState('')
  // const [defInput, setDefInput] = useState('')

  const togglePop = (event) => {
    const wordInputs = prompt("Edit Word")
    const defInputs = prompt('Edit Definition')
    // setWordInput(wordInputs)
    // setDefInput(defInput)
    props.handleUpdate(wordInputs, defInputs, props.entry._id)
  }

  return (
  <div className="glossary-entry">
      <h4>{props.entry.word}</h4>
      <p>{props.entry.definition}</p>
      <button type="button" onClick={() => {
        togglePop();
        }}>Edit</button>
      <button type="button" onClick={() => {
        props.handleDelete(props.entry._id)}}>Delete</button>
  </div>
  )
}

export default GlossaryEntry

// {seen ? return (
//   <button type="button">x</button>
//   <label>Edit word
//     <input type="text"></input>
//   </label>
//   <label>Edit definition
//     <input type="text"></input>
//   </label>
//   <button type="submit">Edit</button>
//   ) : return
//   (<h4>{props.entry.word}</h4>
//   <p>{props.entry.definition}</p>
//   <button type="button" onClick={togglePop}>Edit</button>
//   )}