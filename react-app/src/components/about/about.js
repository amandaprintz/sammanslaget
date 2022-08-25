import React from "react";
import "./about.css";
import ballet from "../../assets/images/ballet.svg";
import float from "../../assets/images/float.svg";
import meditating from "../../assets/images/meditating.svg";
import coffee from "../../assets/images/coffee.svg";
import strolling from "../../assets/images/strolling.svg";
import sprinting from "../../assets/images/sprinting.svg";
import mail from "../../assets/images/mail.svg";
import linkedin from "../../assets/images/linkedin.svg";

export default function About() {
  return (
    <div className="container">
      <div className="item">
        <div class="photo">
          <img src={ballet} />
        </div>
        <div class="info">
          <h2>Anthony Policelli</h2>
          <h3>Game programmer</h3>
          <h4>What I did</h4>
        </div>
        <div class="socials">
          <img src={mail} />
          <img src={linkedin} />
        </div>
      </div>
      <div className="item">
        <div class="photo">
          <img src={coffee} />
        </div>
        <div class="info">
          <h2>Danny Edmalm</h2>
          <h3>Game Artist</h3>
          <h4>What I did</h4>
        </div>
        <div class="socials">
          <img src={mail} />
          <img src={linkedin} />
        </div>
      </div>
      <div className="item">
        <div class="photo">
          <img src={float} />
        </div>
        <div class="info">
          <h2>Amelie Olsson</h2>
          <h3>Game Artist</h3>
          <h4>What I did</h4>
        </div>
        <div class="socials">
          <img src={mail} />
          <img src={linkedin} />
        </div>
      </div>
      <div className="item">
        <div class="photo">
          <img src={meditating} />
        </div>
        <div class="info">
          <h2>Sabrina Gnerlich</h2>
          <h3>UX Designer</h3>
          <h4>What I did</h4>
        </div>
        <div class="socials">
          <img src={mail} />
          <img src={linkedin} />
        </div>
      </div>
      <div className="item">
        <div class="photo">
          <img src={sprinting} />
        </div>
        <div class="info">
          <h2>Amanda Karlsson Printz</h2>
          <h3>Webbutvecklare</h3>
          <h4>What I did</h4>
        </div>
        <div class="socials">
          <img src={mail} />
          <img src={linkedin} />
        </div>
      </div>
      <div className="item">
        <div class="photo">
          <img src={strolling} />
        </div>
        <div class="info">
          <h2>Oliver Davis</h2>
          <h3>Webbutvecklare</h3>
          <h4>What I did</h4>
        </div>
        <div class="socials">
          <img src={mail} />
          <img src={linkedin} />
        </div>
      </div>
    </div>
  );
}
