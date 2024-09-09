import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isCartOrGroceryPage =
    location.pathname === "/cart" || location.pathname === "/grocery";
  return (
    <div
      className={`footer_container ${
        isCartOrGroceryPage ? "fixed_footer" : ""
      }`}
    >
      <div>Created by © Nitya Priya @ 2024</div>
    </div>
  );
};

export default Footer;
