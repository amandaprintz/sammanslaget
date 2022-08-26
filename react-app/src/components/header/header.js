import React from "react";
import "./header.css";
import { useEffect, useState } from "react";
import logo from "../../assets/images/flower-logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  let active = true;
  const [isShowing, setIsShowing] = useState(true);

  function hamburger() {
    console.log("Click");

    if (active) {
      active = false;
      setIsShowing(false);
      console.log("Gone");
    } else {
      active = true;
      setIsShowing(true);
      console.log("Showing");
    }

    console.log(active);
  }

  return (
    <header>
      <NavLink to="/">
        <img className="main-logo" src={logo} />
      </NavLink>

      <label for="hamburger-menu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </label>
      <input type="checkbox" id="hamburger-menu"></input>

      <nav>
        <NavLink to="/game">
          <p>Spel</p>
        </NavLink>
        <NavLink to="/project">
          <p>Om Projektet</p>
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
