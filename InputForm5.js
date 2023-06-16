import React from 'react'

const InputForm5 = ({ setCvc }) => {
    return (
        <input
            placeholder="e.g. 345"
            maxLength={3}
            onChange={(e) => setCvc(e.target.value)}
            id="cvc"
        />
    )
}

export default InputForm5