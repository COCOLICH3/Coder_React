import { createContext, useState, useMemo } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log(cart);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, { ...item, quantity }]);
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    };

   
    const total = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }, [cart]);

    
    const totalQuantity = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }, [cart]);

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};
