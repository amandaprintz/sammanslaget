import React from "react";
import "./home.css";
import tshirt from "../../assets/images/tshirt.svg";

export default function Project() {
  return (
    /*      <Header />
     */
    <div className="project-container">
      <img className="tshirt" src={tshirt} />
      <h1>Titel på projektet</h1>
      <h5>Här är introtexten till </h5>
    </div>
  );
}
