import React from 'react';

function Button({product, change}) {
    return (
        <div className="card-button">
            <button className="btn" onClick={() => change(product.id)}>Добавить в корзину</button>
        </div>
    );
}

export default Button;