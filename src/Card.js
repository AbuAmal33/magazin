import React from 'react';
import Button from "./Button";

function Card(props) {
    return (
        <>
            {props.product.map((item) => {
                return (
                    <div className="card">
                        <div className="card-image">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className="card-info">
                            <div className="card-name">{item.name}</div>
                            <div className="card-rating">{item.rating}*</div>
                            <div className="card-price">{item.price}₽</div>
                            <Button product={props.product} counter={props.counter} bought={props.bought}/>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Card;