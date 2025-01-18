import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"; 

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="cart-empty">
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="cart-link">Ver Productos</Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <div className="cart-items">
                {cart.map((p) => (
                    <CartItem key={p.id} {...p} />
                ))}
            </div>
            <div className="cart-summary">
                <h3 className="cart-total">Total: ${total}</h3>
                <button className="cart-clear-btn" onClick={() => clearCart()}>
                    Limpiar Carrito
                </button>
                <Link to="/checkout" className="cart-checkout-btn">
                    Ir al Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;
