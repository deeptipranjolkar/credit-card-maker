import React from 'react'
import BackCard from "../src/assets/Group 4.png";

const SampleCard = () => {
    return (
        <>
            <div>
                <img src={BackCard} className="back" alt="logo" />
                <p className="cvcno"></p>
            </div>
            <div className="crd_no">
                <p>0000 0000 0000 0000</p>
            </div>
            <div className="c_details">
                <p className="c_name">
                    Deepti Ranjolkar
                    <span className="c_date">__/__</span>
                </p>
            </div>
        </>
    )
}

export default SampleCard