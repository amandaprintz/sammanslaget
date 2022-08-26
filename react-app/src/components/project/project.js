import React from "react";
import "./project.css";
import Header from "../header/header";
import tshirt from "../../assets/images/tshirt2x.png";
import pants from "../../assets/images/pants2x.png";
import { NavLink } from "react-router-dom";

export default function Project() {
  return (
    <section className="home-section">
      <Header />

      <img className="tshirt" src={tshirt} />
      <img className="pants" src={pants} />
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

        </div>
      </div>
    </section>
  );
}
