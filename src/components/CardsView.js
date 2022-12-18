import React from 'react';

function CardsView({ products }) {

    return (
        <div className="CardsView">
            {products.map((product) => (
                <div key={product.name + "&" + product.price + "&" + product.color} className="Card">
                    <p className="card-name">{product.name}</p>
                    <p className="card-color">{product.color}</p>
                    <img src={product.img} alt="Картиночка"/>
                    <p className="card-price">${product.price}</p>
                    <button className="card-button">Add to Card</button>
                </div>
            ))}
        </div>
    );
}

export default CardsView;