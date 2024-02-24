import {useState} from 'react'
import ConfirmationEntry from './ConfirmationEntry.jsx'

const ConfirmationForm = (props) => {

 return (
  <div>
    <h1>Purchase Summary</h1>
    {props.info.map((entry) => {
    return (
      <ConfirmationEntry entry={entry}/>
    )
  })}
  <button>Purchase</button>
    </div>
 )


}

export default ConfirmationForm