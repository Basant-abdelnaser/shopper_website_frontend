import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import Cart from "./Pages/Cart/Cart";
import Product from "./Pages/Product/Product";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/men" element={<ShopCategory category="men" />}></Route>
          <Route
            path="/women"
            element={<ShopCategory category="women" />}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory category="kids" />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>

          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
