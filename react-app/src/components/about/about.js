import React from 'react';
import "./about.css";
import doggie from "../../assets/images/doggie.svg";
import float from "../../assets/images/float.svg"
import mail from "../../assets/images/mail.svg";
import linkedin from "../../assets/images/linkedin.svg";

export default function About () {
  
  return (

   
   <div className="container">
      <div className="item">
      <div class="photo">
      <img src={doggie} />
    <div class="info"> 
   <h2>Anthony Policelli</h2>
   <h3>Game programmer</h3>
   <h4>What I did</h4>
   </div>
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
   <h2>Danny Edmalm</h2>
   <h3>Game Artist</h3>
   <h4>What I did</h4></div>
   </div>
  <div class="socials"> 
  <img src={mail} />
  <img src={linkedin} />
   </div>
</div>
<div className="item">
   <div class="photo">
   <img src={float}/>
   <div class="info"> 
   <h2>Amelie Olsson</h2>
   <h3>Game Artist</h3>
   <h4>What I did</h4></div>
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
   <h2>Sabrina Gnerlich</h2>
   <h3>UX Designer</h3>
   <h4>What I did</h4></div>
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
   <h2>Amanda Karlsson Printz</h2>
   <h3>Webbutvecklare</h3>
   <h4>What I did</h4></div>
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
   <h2>Oliver Davis</h2>
   <h3>Webbutvecklare</h3>
   <h4>What I did</h4></div>
   </div>
  <div class="socials"> 
  <img src={mail} />
  <img src={linkedin} />
   </div>
</div>
 </div>

  )
}