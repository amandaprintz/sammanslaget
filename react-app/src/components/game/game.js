import React from "react";
import "./game.css";
import Header from "../header/header";
import dress from "../../assets/images/dress.png";
import pink_form from "../../assets/images/pink-form.svg";
import "../../assets/fonts/Otterco-Bold.woff";

import { Unity, useUnityContext } from "react-unity-webgl";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function Game() {
  const { unityProvider } = useUnityContext({
    dataUrl: "./build/TheoryOfChangeBuilds.data.unityweb",
    frameworkUrl: "./build/TheoryOfChangeBuilds.framework.js.unityweb",
    loaderUrl: "./build/TheoryOfChangeBuilds.loader.js",
    codeUrl: "./build/TheoryOfChangeBuilds.wasm.unityweb",
  });

  return (
    <section className="game-section">
      <Header />
      <main>
        <img className="dress" src={dress} />
   {/*      <img className="pink-form" src={pink_form} /> */}
        <Unity className="unity" unityProvider={unityProvider} />
      </main>
    </section>
  );
}

export default Game;
