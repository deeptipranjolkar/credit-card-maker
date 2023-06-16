import React from 'react'

const InputForm1 = ({cardNumber,handleCardNumberChange}) => {
  return (
    <input
    placeholder="eg 1234 1234 5678 5678"
    maxLength={19}
    onChange={handleCardNumberChange}
    value={cardNumber
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim()}
    className="cards"
    id="Cno"
  />
  )
}

export default InputForm1