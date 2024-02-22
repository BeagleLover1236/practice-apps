import { useState, useEffect } from 'react';

const GlossaryAdd = (props) => {
  const [wordValue, setWordValue] = useState('')
  const [defValue, setDefValue] = useState('')

  const grabWord = (event) => {
    setWordValue(event.target.value)
    console.log(wordValue)
  }

  const grabDef = (event) => {
    setDefValue(event.target.value)
    console.log(wordValue)
  }

    return (
      <div className="glossary-add">
        <form>
          <input type="text" placeholder="Enter the new word" onChange={grabWord} value={wordValue}></input>
          <input type="text" placeholder="Give the word a definition" value={defValue} onChange={grabDef}></input>
          <input type="submit" value="Add word!" onClick={() => {
            props.handleAdd(wordValue, defValue);
            setWordValue('');
            setDefValue('')
          }}></input>
        </form>
      </div>
    )

}


export default GlossaryAdd