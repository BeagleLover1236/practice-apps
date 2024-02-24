import {useState} from "react";


const PaymentForm = (props) => {

  const [cardData, setCardData] = useState({
    cardNumber : '',
    expiration: '',
    cvv: '',
    billingZip: ''
  })

  const handleCardChange = (event) => {
    const {name , value} = event.target

    setCardData((previousFormData => ({
      ...previousFormData,
      [name]: value
    })))
  }
  return (
    <div>
      <form>
        <label>
          Card number
          <input type="text" onChange={handleCardChange} name="cardNumber"></input>
        </label>
        <label>
          Expiration date
          <input type="text" placeholder="2028-01-28" onChange={handleCardChange} name="expiration"></input>
        </label>
        <label>
          CVV
          <input type="text" onChange={handleCardChange} name="cvv"></input>
        </label>
        <label>
          Billing Zip Code
          <input type="text" onChange={handleCardChange} name="billingZip"></input>
        </label>
        <button type="button" onClick={props.backPage}>Back</button>
        <button type="button" onClick={() => {
          props.nextPage();
          props.handleCard(cardData);
          props.handlePurchase()}}>Next</button>
      </form>
    </div>
  )
}

export default PaymentForm