import React from "react";
import "./header.css";
import { useEffect, useState } from "react";
import logo from "../../assets/images/flower-logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  const hamburger = document.querySelector(".hamburger");

  return (
    <header>
      <NavLink to="/">
        <img className="main-logo" src={logo} />
      </NavLink>

      <div className="hamburger"></div>

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
