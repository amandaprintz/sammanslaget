import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/about">
        <p>ABOUT</p>
      </NavLink>
    </nav>
  );
}
