import React from 'react';
import "./about.css";
import doggie from "../../assets/images/doggie.svg";
import mail from "../../assets/images/mail.svg";
import linkedin from "../../assets/images/linkedin.svg";

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
     <div class="socials"> 
     <img src={mail} />
     <img src={linkedin} />
      </div>
   </div>




      <div className="item">
      <div class="photo">
    <img src={doggie} />
    <div class="info"> 
    <h2>Namn</h2>
    <h3>Titel</h3></div>
   </div>
      </div>
      <div className="item">
      <div class="photo">
    <img src={doggie} />
    <div class="info"> 
    <h2>Namn</h2>
    <h3>Titel</h3></div>
   </div>
      </div>
      <div className="item">
      <div class="photo">
    <img src={doggie} />
    <div class="info"> 
    <h2>Namn</h2>
    <h3>Titel</h3></div>
   </div>
      </div>
      <div className="item">
      <div class="photo">
    <img src={doggie} />
    <div class="info"> 
    <h2>Namn</h2>
    <h3>Titel</h3></div>
   </div>
      </div>
      <div className="item">
      <div class="photo">
    <img src={doggie} />
    <div class="info"> 
    <h2>Namn</h2>
    <h3>Titel</h3></div>
   </div>
      </div>
    </div>
  )
}