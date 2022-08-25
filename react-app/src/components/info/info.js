import React from "react";
import "./info.css";
import logo from "../../assets/images/logo.svg";
import yrgo from "../../assets/images/yrgo.png";
import beanie from "../../assets/images/beanie.svg";
import socks from "../../assets/images/socks.svg";

export default function Project() {
  return (
    <section className="info-section">
      <img className="beanie" src={beanie} />
      <img className="socks" src={socks} />
      <h2>Ett sammarbete mellan</h2>
      <p>Clicka för mer information 👇</p>

      <div className="socials">
        <a href="https://bjorkafrihet.se/">
          <img src={logo} />
        </a>
        <a href="https://www.yrgo.se/">
          <img src={yrgo} />
        </a>
      </div>
    </section>
  );
}
