

const ConfirmationEntry = (props) => {
  return (
    <>
      <div>
      <div>
      <h4>Account Summary</h4>
      <p>Name: {props.entry.name}</p>
      <p>Email: {props.entry.email}</p>
      <p>Password: {props.entry.password}</p>
      </div>
      <div>
        <h4>Shipping Summary</h4>
        <p>Address: {props.entry.line1} {props.entry.line2}</p>
        <p>Phone #: {props.entry.phoneNumber}</p>
      </div>
      <div>
        <h4>Card Summary</h4>
        <p>Card #: {props.entry.cardNumber}</p>
        <p>Expiration: {props.entry.expiration}</p>
        <p>CVV: {props.entry.cvv}</p>
        <p>Billing zip code: {props.entry.billingZip}</p>
      </div>
    </div>
    {/* <button type="button" onClick={props.set}>check</button> */}
    </>
  )
}

export default ConfirmationEntry