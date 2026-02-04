import { createContext, useState } from "react";
import all_product from "../Assets/all_product";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState(getDefaultCart());
  console.log(cart);

  const addToCart = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };
  const removeFromCart = (id) => {
    setCart({ ...cart, [id]: cart[id] - 1 });
  };
  const contextValue = {
    all_product,
    cart,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
