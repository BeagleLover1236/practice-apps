import {useState} from "react";

const AccountForm = (props) => {
  const [accountData, setAccountData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

  };

  return (
    <div>
      <form>
        <label>
          Name
          <input type="text" onChange={handleInputChange} name="name" value={accountData.name} required></input>
        </label>
        <label>
          Email
        <input type="text" name="email" onChange={handleInputChange} value={accountData.email} required></input>
        </label>
        <label>
          Password
        <input type="text" name="password" onChange={handleInputChange} value={accountData.password} required></input>
        </label>
        <button type="button" onClick={props.backPage}>Back</button>
        <button type="button" onClick={() => {
          props.nextPage();
          props.handleAccount(accountData)
          }}>Next</button>
      </form>
    </div>
  )
}

export default AccountForm