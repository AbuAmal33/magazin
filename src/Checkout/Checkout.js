import React from 'react';
import img from "./shopping-cart-solid.svg"

function Checkout(props) {
    return (
        <div className="checkout">
            <img src={img} alt="checkout" />
            <span className="counter">0</span>
        </div>
    );
}

export default Checkout;