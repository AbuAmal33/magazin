import React from 'react';
import Card from "./Card";

function Content(props) {

    return (
        <div className="content">
            <Card product={props.product} counter={props.counter} bought={props.bought}/>
        </div>
    );
}

export default Content;