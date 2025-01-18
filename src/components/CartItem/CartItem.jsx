import React from "react";

const CartItem = ({ id, title, price, quantity, removeItem }) => {

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <h3>{title}</h3>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            {removeItem && (
                <button onClick={() => removeItem(id)}>Eliminar</button>
            )}
        </div>
    );
};

export default CartItem;
