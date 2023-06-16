import React from "react";
import FrontCard from "../src/assets/Frame 2.png";
import SampleCard from "./SampleCard";
import CardWithDetails from "./CardWithDetails";

import "../src/card.css";

const CreditCardDesign = (props) => {

  const { cardHolderName, cardNumber, expiryDate, expiryMonth, cvc } = props;

  return (
    <>
      <div className="cards_imgg">
        <div>
          <img src={FrontCard} className="front" alt="logo" />
        </div>
        {cardNumber && expiryDate && expiryMonth && cvc ?
          (
            <>
              <CardWithDetails cardNumber={cardNumber} cvc={cvc} cardHolderName={cardHolderName} expiryDate={expiryDate} expiryMonth={expiryMonth}/>
            </>
          ) : (
            <>
              <SampleCard />
            </>
          )}
      </div>
    </>
  );
}

export default CreditCardDesign;