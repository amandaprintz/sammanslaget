import React from "react";
import "./project.css";
import Header from "../header/header";
import tshirt from "../../assets/images/tshirt2x.png";
import pants from "../../assets/images/pants2x.png";
import { NavLink } from "react-router-dom";

export default function Project() {
  return (
    <section className="project-section">
      <Header />

      <img className="tshirt" src={tshirt} />
      <img className="pants" src={pants} /> 
      <div className="project-container">
        <h1>Projektet</h1>
        <div className="project-text">
          <h5>
          Något vackert kan växa ut ur alla sorters små frön. Ta din garderob som ett exempel.
           Finns det kläder som du faktiskt inte använder?  Med en donation till Björk&Frihet,
            stora som små, kan ditt stöd hjälpa människor till att leva bättre liv.
            <br/>
            <br/>
            Spelupplevelsen inspirerades av donations lådor. När du skänker något till lådan blir 
            blomstrar ängen med blommor som slutligen bildar en vacker blomsteräng.
          </h5>

        </div>
      </div>
    </section>
  );
}
