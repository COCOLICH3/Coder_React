import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    // Only display the CartWidget if totalQuantity > 0
    if (totalQuantity === 0) return null;

    return (
        <Link to="/cart" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <CiShoppingCart size={24} style={{ marginRight: '8px' }} />
            <span>{totalQuantity}</span>
        </Link>
    );
};

export default CartWidget;
