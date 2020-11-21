import React from 'react';
import Card from "./Card";
import {useSelector} from "react-redux";

function Content(props) {

    const shop = useSelector(state => state.products);

    return (
        <div className="content">
            {shop.map((product, index) => {
                return (
                    <Card key={(index)} product={product}/>
                )
            })}
        </div>
    );
}

export default Content;