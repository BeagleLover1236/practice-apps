import GlossaryEntry from './GlossaryEntry.jsx'


const GlossaryList = (props) => {
  return (
    <div className="glossary-list">
      {props.glossary.map((entry) => {
        return (
          <GlossaryEntry
          handleUpdate={props.handleUpdate}
          handleDelete={props.handleDelete}
          key={entry._id} entry={entry}/>
        )
      })}
    </div>
  )
}

export default GlossaryList