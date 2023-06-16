import React from 'react'
import BackCard from "../src/assets/Group 4.png";
import eclipse from "../src/assets/Ellipse 1.png";
import s_eclipse from "../src/assets/Ellipse_small 2.png";

import "../src/card.css";

const CardWithDetails = ({ cardNumber, cvc, cardHolderName, expiryDate, expiryMonth }) => {
    return (
        <>
            <div className="e_img">
                <img src={eclipse} alt="" className="elip" />
                <img src={s_eclipse} alt="" className="selip" />
            </div>
            <div>
                <img src={BackCard} className="back" alt="logo" />
                <p className="cvcno">{cvc}</p>
            </div>
            <div className="crd_no">
                <p>{cardNumber}</p>
            </div>
            <div className="c_details">
                <p className="c_name">
                    {cardHolderName}
                    <span className="c_date">
                        {expiryDate}/{expiryMonth}
                    </span>
                </p>
            </div>
        </>
    )
}

export default CardWithDetails