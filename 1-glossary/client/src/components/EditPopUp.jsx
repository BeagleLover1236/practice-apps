
const EditPopUp = () => {
return (
  <div className="pop-up">
    <h4>Edit entry</h4>
    <form>
      <button type="button">Exit</button>
      <label>
        Edit word:
        <input type="text"></input>
      </label>
      <label>
        Edit definition:
        <input type="text"></input>
      </label>
      <button type="submit">Submit entry</button>
    </form>
  </div>
)
}

export default EditPopUp