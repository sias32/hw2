import React from 'react';

function CardsView({ products }) {

    return (
        <div className="CardsView">
            {products.map((product) => (
                <div key={product.name + "&" + product.price + "&" + product.color} className="Card">
                    <p className="Card-name">{product.name}</p>
                    <p className="Card-color">{product.color}</p>
                    <img className='Card-img' src={product.img} alt="Картиночка" />
                    <div className="Card-bottom">
                        <p className="Card-price">${product.price}</p>
                        <button className="Card-button">Add to Card</button>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default CardsView;