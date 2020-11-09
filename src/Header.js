import React from 'react';
import Logo from "./Logo/Logo";
import Menu from "./Menu";
import Checkout from "./Checkout/Checkout";

function Header(props) {
    return (
        <div className="header">
            <Logo />
            <Menu />
            <Checkout products={props.products} />
        </div>
    );
}

export default Header;