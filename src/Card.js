import React from 'react';
import Button from "./Button";
import {useDispatch} from "react-redux";

function Card({product}) {

    const dispatch = useDispatch();
    function todo(id) {
        dispatch({type: 'bought', id})
    }

    return (
            <div className="card">
                    <div className="card-info">
                        <div className="card-image">
                            <img src={product.image} alt=""/>
                        </div>
                        <div className="card-name">{product.name}</div>
                        <div className="card-rating">{product.rating}*</div>
                        <div className="card-price">{product.price}₽</div>
                        <Button todo={() => todo(product.id)}/>
                    </div>
            </div>
        );
    }

export default Card;