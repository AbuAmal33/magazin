import React from 'react';

function Button({todo}) {
    return (
        <div className="card-button">
            <button className="btn" onClick={todo}>Добавить в корзину</button>
        </div>
    );
}

export default Button;