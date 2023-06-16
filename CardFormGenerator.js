import React, { useState } from "react";
import logo from "../src/assets/Group 2.png";
import CreditCardDesign from "./CreditCardDesign";

import InputForm1 from "./InputForm1";
import InputForm2 from './InputForm2';
import InputForm3 from "./InputForm3";
import InputForm4 from "./InputForm4";
import InputForm5 from "./InputForm5";

import "../src/cardForm.css";

const CardFormGenerator = () => {

  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");


  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    const numericInput = input.replace(/\D/g, "");
    setCardNumber(numericInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( cardHolderName.trim().length === 0 || cardNumber.trim().length === 0 || cvc.trim().length === 0 || (cvc.length > 0 && !/^\d+$/.test(cvc))) {
      setError(true);
      return;
    }
    setSuccessMessage("details submitted successfully!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
    if (cardHolderName && cardNumber && expiryDate && expiryMonth && cvc) {
      setSubmitted(true);
    }
  };

  return (
    <div className="compo">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <p className="cardholder">CARDHOLDER NAME</p>
            <InputForm3 setCardHolderName={setCardHolderName}/>
            {error && cardHolderName.length === 0 ? (
              <label>Name can't be empty</label>
            ) : null}
          </div>

          <div>
            <p className="cardholder">CARD NUMBER</p>
            <InputForm1 cardNumber={cardNumber} handleCardNumberChange={handleCardNumberChange}/>
            {error && cardNumber.length === 0 ? (
              <label>Card number required</label>
            ) : null}
          </div>

          <section id="date">
            <div>
              <p>EXP.DATE</p>
              <InputForm2 setExpiryDate={setExpiryDate}/>
              {error && expiryDate.length === 0 ? (
                <label className="Cdate_label">Expiry Date required</label>
              ) : null}
            </div>
            <div>
              <p> (YY)</p>
              <InputForm4 setExpiryMonth={setExpiryMonth}/>
              {error && expiryMonth.length === 0 ? (
                <label className="Cyear_label">expiry Month required</label>
              ) : null}
            </div>

            <div>
              <p className="cvv">CVC</p>
              <InputForm5 setCvc={setCvc}/>
              {error && cvc.length === 0 ? (
                <label className="cvc_cond">CVC must be  numeric</label>
              ) : null}
              {error && cvc.length > 0 && !/^\d+$/.test(cvc) ? (
                <label className="cvc_error_label">CVC must be numeric</label>
              ) : null}
            </div>
          </section>

          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}

          <button className="sub">Confirm</button>
        </form>
      </div>  

      {submitted && (
        <CreditCardDesign cardHolderName={cardHolderName} cardNumber={cardNumber} expiryDate={expiryDate} expiryMonth={expiryMonth} cvc={cvc}/>
      )}
    </div>
  );
}

export default CardFormGenerator;