import "./App.css";
import React from "react";
import { useEffect } from "react";
import logo from "./assets/images/logo.svg";
import orange_form from "./assets/images/orange-form.svg";
import pink_form from "./assets/images/pink-form.svg";
import About from "./components/about/about";

import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    dataUrl: "./build/TheoryOfChangeBuilds.data.unityweb",
    frameworkUrl: "./build/TheoryOfChangeBuilds.framework.js.unityweb",
    loaderUrl: "./build/TheoryOfChangeBuilds.loader.js",
    codeUrl: "./build/TheoryOfChangeBuilds.wasm.unityweb",
  });

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
        <Unity className="unity" unityProvider={unityProvider} />
        <img className="orange-form" src={orange_form} />
        <img className="pink-form" src={pink_form} />
      </main>

      <About/>
    </>
  );
}

export default App;
