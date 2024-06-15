import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img alt="mastercard"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
          />
        </div>
        <div className="card-name">
          <img alt="visa"
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          />
        </div>
        <div className="card-name">
          <img alt="paypal"
            src="https://pngimg.com/uploads/paypal/paypal_PNG9.png"
          />
        </div>
        <div className="card-name">
          <img alt="express"
            src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/American-Express-icon.png"
          />
        </div>
        <div className="card-name">
          <img alt="discover"
            src="https://st4.depositphotos.com/38987422/40030/i/600/depositphotos_400300818-stock-photo-magnifying-glass-text-discover-financial.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;