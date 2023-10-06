import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(cart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Context.Provider value={{ cart, setCart }}>{children}</Context.Provider>
  );
}

export { Context };
export default ContextProvider;
