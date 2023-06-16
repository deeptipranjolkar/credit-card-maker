import React from 'react'

const InputForm3 = ({setCardHolderName}) => {
  return (
    <input
    placeholder="e.g. Deepti Ranjolkar"
    onChange={(e) => setCardHolderName(e.target.value)}
    className="cards"
    id="Cname"
  />
  )
}

export default InputForm3