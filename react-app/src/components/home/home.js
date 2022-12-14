import React from "react";
import "./home.css";
import Header from "../header/header";
import tshirt from "../../assets/images/tshirt2x.png";
import beanie from "../../assets/images/beanie2x.png";
import redbox from "../../assets/images/redbox.svg";
import { NavLink } from "react-router-dom";

export default function Project() {
  return (
    <section className="home-section">
      <Header />
      <img className="tshirt" src={tshirt} />
      <img className="beanie-two" src={beanie} />
      <div className="project-container">
        <h1>Är du redo för förändring?</h1>
        <h2>Vi hjälper dig att bidra</h2>
        <div className="project-text">
          <h5>
            Vi tror på att alla kan hjälpa till att göra världen till en bättre
            och vackrare plats. Vår förhoppning är att vår hemsida inspirerar er
            till att stödja och engagemang för en bättre morgondag. Tillsammans
            kan små handlingar göra stora skillnader i världen!
          </h5>

          <div className="play">
            <NavLink to="/game">
              <button>Engagera dig! </button>
            </NavLink>
            <img src={redbox} />
          </div>
        </div>
      </div>
    </section>
  );
}
