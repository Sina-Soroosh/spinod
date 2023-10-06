import React, { useEffect, useState } from "react";

const CartContext = React.createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(cart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };
export default CartContextProvider;
