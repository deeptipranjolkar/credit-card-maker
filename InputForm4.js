import React from 'react'

const InputForm4 = ({setExpiryMonth}) => {
    return (
        <input
            placeholder="YY"
            maxLength={2}
            onChange={(e) => setExpiryMonth(e.target.value)}
            className="my"
            id="Cyear"
        />
    )
}

export default InputForm4