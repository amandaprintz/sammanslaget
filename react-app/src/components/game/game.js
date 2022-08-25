import React from "react";
import Header from "../header/header";
import orange_form from "../../assets/images/orange-form.svg";
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
    <section>
      <Header />
      <main>
        <img className="orange-form" src={orange_form} />
        <img className="pink-form" src={pink_form} />
        <Unity className="unity" unityProvider={unityProvider} />
      </main>
    </section>
  );
}

export default Game;
