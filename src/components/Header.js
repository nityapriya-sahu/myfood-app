import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cartItems");

  const [btn, setBtn] = useState("Login");
  const btnClick = () => {
    btn === "Login" ? setBtn("Logout") : setBtn("Login");
  };

  return (
    <>
      <div className="header_container">
        <div className="logo_container">
          <Link to="/">
            <img src={LOGO_URL} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="nav_items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
            {/* Display the cart item count */}
            <li>
              <button onClick={btnClick} className="login_btn">
                {btn}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
