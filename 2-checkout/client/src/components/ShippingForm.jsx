import {useState} from "react";


const ShippingForm = (props) => {

  const [shippingData, setShippingData] = useState({
    line1: '',
    line2: '',
    city: '',
    state: '',
    zipCode: null,
    phoneNumber: null
  })

  const handleInputChange = (event) => {
    const {name, value} = event.target
    console.log(event.target)
    setShippingData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <div>
      <form>
        <label>
          Street
          <input type="text" placeholder="line 1" onChange={handleInputChange}name="line1" required></input>
          <input type="text" placeholder="line 2" onChange={handleInputChange}name="line2"></input>
        </label>
        <label>
          City
          <input type="text" onChange={handleInputChange} name="city" required></input>
        </label>
        <label>
          State
          <input type="text" onChange={handleInputChange} name="state" required></input>
        </label>
        <label>
          Zip
          <input type="text" onChange={handleInputChange} name="zipCode" required></input>
        </label>
          Phone number
          <label><input type="text" onChange={handleInputChange}name="phoneNumber" required></input>
        </label>
        <button type="button" onClick={props.backPage} >Back</button>
        <button type="button" onClick={() => {
          props.nextPage();
          props.handleShipping(shippingData)
          }}>Next</button>
      </form>
    </div>
  )
}

export default ShippingForm