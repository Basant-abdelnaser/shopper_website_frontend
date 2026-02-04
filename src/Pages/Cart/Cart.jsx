import React, { useContext } from "react";
import { ShopContext } from "../../Contexts/ShopContext";
import all_product from "../../Assets/all_product";
import deleteIcon from "../../Assets/cart_cross_icon.png";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(ShopContext);

  const cartItems = Object.entries(cart)
    .filter(([_, quantity]) => quantity > 0)
    .map(([id, quantity]) => {
      const product = all_product.find((p) => p.id === Number(id));
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.new_price * item.quantity,
    0,
  );

  return (
    <div className="cartContainer container">
      {cartItems.length === 0 && (
        <h1 className="emptyCart">Your Cart is Empty!</h1>
      )}

      {cartItems.length > 0 && (
        <>
          <div className="tableWrapper">
            <table className="cartTable">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="itemImg"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.new_price}</td>
                    <td>{item.quantity}</td>
                    <td>${item.new_price * item.quantity}</td>
                    <td>
                      <img
                        src={deleteIcon}
                        alt="remove"
                        onClick={() => removeFromCart(item.id)}
                        className="deleteImg"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cartTotal">
            <div className="left">
              <h2>Cart Totals</h2>

              <div className="row">
                <p>Subtotal</p>
                <p>${totalPrice}</p>
              </div>

              <div className="row">
                <p>Shipping</p>
                <p>Free</p>
              </div>

              <div className="row total">
                <p>Total</p>
                <p>${totalPrice}</p>
              </div>

              <button className="checkout">Proceed To Checkout</button>
            </div>

            <div className="right">
              <p>If you have a promo code, enter it here</p>
              <div className="promo">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="promoCode"
                />
                <button className="submit">Apply</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
