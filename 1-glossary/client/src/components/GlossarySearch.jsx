import { useState, useEffect } from 'react';


const GlossarySearch = (props) => {
  const [searchValue, setSearchValue] = useState('')

  const getValue = (event) => {
    setSearchValue(event.target.value)
  }
  return (
    <div className="glossary-search">
      <input type="text" placeholder="Search for words" value={searchValue} onChange={getValue}></input>
      <button type="button" onClick={() => {
        props.handleSearch(searchValue);
        setSearchValue('')
        }}>Search!</button>
    </div>
  )
}

export default GlossarySearch