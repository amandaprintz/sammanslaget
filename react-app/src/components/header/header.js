import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">
        <img className="main-logo" src={logo} />
      </NavLink>
      <nav>
        <NavLink to="/game">
          <p>Spel</p>
        </NavLink>
        <NavLink to="/about">
          <p>Om oss</p>
        </NavLink>
        <NavLink to="/info">
          <p>Info</p>
        </NavLink>
      </nav>
    </header>
  );
}
