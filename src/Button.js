import React from 'react';

function Button(props) {
    return (
        <div className="card-button">
            <button className="btn" onClick={props.plus} bought={props.bought}>Добавить в корзину</button>
        </div>
    );
}

export default Button;