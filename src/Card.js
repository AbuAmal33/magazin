import React from 'react';
import Button from "./Button";

function Card({product, change}) {
    return (
            <div className="card">
                <div className="card-image">
                    <img src={product.image} alt=""/>
                </div>
                <div className="card-info">
                    <div className="card-name">{product.name}</div>
                    <div className="card-rating">{product.rating}*</div>
                    <div className="card-price">{product.price}₽</div>
                    <Button product={product} change={change}/>
                </div>
            </div>
        );
    }

export default Card;