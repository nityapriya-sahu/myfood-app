import React from "react";
import ItemsList from "./ItemsList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = (items) => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  //   const handleRemoveItem = () => {
  //     dispatch(removeItem());
  //   };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>My Cart</h3>
      <button onClick={handleClearCart}>Clear Cart</button>
      {/* <button onClick={handleRemoveItem}>Remove Item</button> */}

      {cartItems.length === 0 && <h4>Your Cart is Empty !!</h4>}
      <div style={{ width: "50%" }}>
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
