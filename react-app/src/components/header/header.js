import React from 'react';
import "./header.css";
import logo from "../../assets/images/logo.svg";

/* import "../../../src/assets/fonts/StoneSans.woff"; */



export default function About () {

    return (

<header>
<img
  className="main-logo"
  src={logo}
  alt="logotyp för björk och frihet"
/>

<div className="menu">
      <div className="tabs"> Om Projektet </div>
      <div className="tabs"> Om oss </div>
      <div className="tabs"> Information </div>
   </div>



</header>

    )
}