import { createContext } from "react";
import all_product from "../Assets/all_product";
export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  return <ShopContext.Provider value={all_product}>
    {children}
  </ShopContext.Provider>;
};
export default ShopContextProvider;
