import React from "react";
import "./info.css";
import logo from "../../assets/images/logo.svg";
import yrgo from "../../assets/images/yrgo.png";
import beanie from "../../assets/images/beanie2x.png";
import socks from "../../assets/images/socks.svg";
import suit from "../../assets/images/suit.svg";
import Header from "../header/header";

export default function Project() {
  return (
    <section className="info-section">
      <Header />
      <section>
        <img className="beanie" src={beanie} />
        <img className="socks" src={socks} />
        <img className="suit" src={suit} />
        <h2>Ett samarbete mellan</h2>
        <h5>Klicka för mer information 👇</h5>

        <div className="socials">
          <a href="https://bjorkafrihet.se/" target="_blank" rel="noreferrer">
            <img src={logo} />
          </a>
          <a href="https://www.yrgo.se/" target="_blank" rel="noreferrer">
            <img src={yrgo} />
          </a>
        </div>
      </section>
    </section>
  );
}
