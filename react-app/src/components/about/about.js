import React from "react";
import "./about.css";
import Header from "../header/header";
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
    <section>
      <Header />
      <div className="container">
        <div className="item">
          <div class="photo">
            <img src={ballet} />
          </div>
          <div class="info">
            <h2>Anthony Policelli</h2>
            <h3>Game programmer</h3>
            <h4>
              Ansvarig för all programmering och funktionalitet inuti spelet.{" "}
            </h4>
          </div>
          <div class="contact">
            <a href="mailto:antpol0822@skola.goteborg.se">
              <img src={mail} />
            </a>
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
            <h4>
              Delvis ansvarig för grafiken för spelet, gjorde även en del
              copywriting
            </h4>
          </div>
          <div class="contact">
            <a href="mailto:danedm1030@skola.goteborg.se">
              <img src={mail} />
            </a>
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
            <h4>
              Ansvarig för en delar av grafiken i spelet. Designat loggan för
              kampanjen.
            </h4>
          </div>
          <div class="contact">
            <a href="mailto:ammi.melinda@gmail.com">
              <img src={mail} />
            </a>
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
            <h4>
              Ledande i idé- och design- process och fokus på att säkerställa
              användar- vänligheten och upplevelsen.
            </h4>
          </div>
          <div class="contact">
            <a href="mailto:sabgne0329@skola.goteborg.se">
              <img src={mail} />
            </a>
            <img src={linkedin} />
          </div>
        </div>
        <div className="item">
          <div class="photo">
            <img src={sprinting} />
          </div>
          <div class="info">
            <h2>Amanda Printz</h2>
            <h3>Webbutvecklare</h3>
            <h4>
              Designat och programmerat plattformen för spelet på webben.
              Arbetat med interaktivitet och implementation.
            </h4>
          </div>
          <div class="contact">
            <a href="mailto:fannyamandakarlsson@icloud.com">
              <img src={mail} />
            </a>
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
            <h4>Programmerat funktionalitet och interaktivitet samt 
              implementerat responsivitet för mobilvy och datorvy. </h4>
          </div>
          <div class="contact">
            <a href="mailto:olipar@skola.goteborg.se">
              <img src={mail} />
            </a>
            <img src={linkedin} />
          </div>
        </div>
      </div>
    </section>
  );
}
