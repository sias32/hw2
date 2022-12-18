import React from 'react';

function ListView({ products }) {

    return (
        <div className="ListView">
            {products.map((product) => (
                <div key={product.name + "&" + product.price + "&" + product.color} className="List">
                    <img className="List-img" src={product.img} alt="Картиночка" />
                    <p className="List-name">{product.name}</p>
                    <p className="List-color">{product.color}</p>
                    <p className="List-price">${product.price}</p>
                    <button className="List-button">Add to Card</button>
                </div>
            ))}
        </div>
    );
}

export default ListView;