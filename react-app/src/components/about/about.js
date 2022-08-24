import React from 'react';
import "./about.css";
import doggie from "../../assets/images/doggie.svg";


export default function About () {
  
  return (


    <div className="container">
      <div className="item">
      <div class="photo">
    <img src={doggie} />
    <div class="info"> 
    <h2>Namn</h2>
    <h3>Titel</h3></div>

  </div>
      
       </div>
      <div className="item">2</div>
      <div className="item">3</div>
      <div className="item">4</div>
      <div className="item">5</div>
      <div className="item">6</div>
    </div>
  )
}