import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
      
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/about"> About </Link>
        <Link to="/cart">Cart</Link>
        <Link to="/signup"> SignUp </Link>
      </div>
    </div>
  );
};
