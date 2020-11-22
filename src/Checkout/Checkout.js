import React from 'react';
import img from "./shopping-cart-solid.svg"
import {useSelector} from "react-redux";

function Checkout(props) {

    const shop = useSelector(state => state.products);

    return (
        <div className="checkout">
            <img src={img} alt="checkout" />
            <span className="counter">
                {shop.filter(product => product.bought).length}
            </span>
        </div>
    );
}

export default Checkout;