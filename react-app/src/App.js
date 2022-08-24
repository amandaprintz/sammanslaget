import "./App.css";
import React from "react";
import { useEffect } from "react";
import logo from "./assets/images/logo.svg";
import orange_form from "./assets/images/orange-form.svg";
import pink_form from "./assets/images/pink-form.svg";
import About from "./components/about/about";


function App() {
  return (
    <>
      <header>
        <img
          className="main-logo"
          src={logo}
          alt="logotyp för björk och frihet"
        />
      </header>
      <main>
        <img className="orange-form" src={orange_form} />
        <div className="unity"></div>
        <img className="pink-form" src={pink_form} />
      </main>

      <About />

    </>
  );


}

export default App;
