import React from 'react'

const InputForm2 = ({setExpiryDate}) => {
  return (
    <input
    placeholder="MM"
    maxLength={2}
    onChange={(e) => setExpiryDate(e.target.value)}
    className="my"
    id="Cdate"
  />
  )
}

export default InputForm2