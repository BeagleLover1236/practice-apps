import React, {useState} from "react";
import { render } from "react-dom";
const axios = require ('axios')

import AccountForm from './components/AccountForm.jsx'
import PaymentForm from './components/PaymentForm.jsx'
import ShippingForm from './components/ShippingForm.jsx'
import ConfirmationForm from './components/ConfirmationForm.jsx'


const App = () => {
  const [page, setPage] = useState(0)
  const [info, setInfo] = useState([])

  const set = () => {
    console.log(info)
  }

  const handlePurchase = () => {
    axios.get('/responses', {cookie:"cookie"})
    .then((results) => {
      setInfo(results.data[0])
      console.log(results.data[0])
      console.log(info)
      console.log(info)

    })
    .catch((err) => {
      console.log(err)
    })
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  const backPage = () => {
    setPage(page - 1)
  }

  const handleAccount = (info) => {
    const params = {
      name: info.name, email: info.email, password: info.password
    }
    axios.post('/responses', params)
    .then(() => {
      console.log('Successful post to db')
    })
    .catch((err) => {
      console.log("Unsuccesful post to db", err)
    })

  }

  const handleShipping = (info) => {
    const params = {
      line1: info.line1,
      line2: info.line2,
      city: info.city,
      state: info.state,
      zipCode: info.zipCode,
      phoneNumber: info.phoneNumber
    }
    axios.put('/responses/shipping', params)
    .then(() => {
      console.log('Successful update to account')
    })
    .catch((err) => {
      console.log('Unsuccesful update to account', err)
    })
  }

  const handleCard = (info) => {
    const params = {
      cardNumber: info.cardNumber,
      expiration: info.expiration,
      cvv: info.cvv,
      billingZip: info.billingZip
    }
    axios.put('/responses/card', params)
    .then(() => {
      console.log("Successful update to card")
    })
    .catch((err) => {
      console.log("Unsuccessful update to card", err)
    })
  }

  const conditionalForms = () => {
    switch (page) {
      case 0:
        return <button type="button" onClick={nextPage}>Checkout!</button>;
      case 1:
        return <AccountForm nextPage={nextPage} backPage={backPage} handleAccount={handleAccount}/>;
      case 2:
        return <ShippingForm handleShipping={handleShipping} nextPage={nextPage} backPage={backPage}/>;
      case 3:
        return <PaymentForm handlePurchase={handlePurchase} nextPage={nextPage} backPage={backPage} handleCard={handleCard}/>;
      case 4:
        return <ConfirmationForm info={info} set={set}/>
      default:
        return <button type="button">Checkout!</button>;
    }
  };
  return (
    <div>
      <p>Home page</p>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <div>
        {conditionalForms()}
      </div>
  </div>
  )
}

render(
 <App/>,
  document.getElementById("root")
);
