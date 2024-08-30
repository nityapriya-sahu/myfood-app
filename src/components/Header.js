import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const btnClick = () => {
    btn === "Login" ? setBtn("Logout") : setBtn("Login");
  };
  return (
    <>
      <div className="header_container">
        <div className="logo_container">
          <img src={LOGO_URL} alt="logo" className="logo" />
        </div>
        <div className="nav_items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>Cart</li>
            <button onClick={btnClick}>{btn}</button>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
