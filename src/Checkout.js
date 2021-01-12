import React from "react";
import "./Checkout.css";
import banner from "./images/banner.jpg";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={banner} alt="" />
        <div>
          <h2 className="checkout__title">Your Shoping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
