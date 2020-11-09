import React from 'react';
import Card from "./Card";

function Content({products, change}) {

    return (
        <div className="content">
            {products.map(product => {
                return (
                    <Card {...product} product={product} change={change}/>
                )
            })}
        </div>
    );
}

export default Content;