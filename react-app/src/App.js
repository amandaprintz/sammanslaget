import "./App.css";
import React from "react";
import { useEffect } from "react";
import logo from "./assets/images/logo.svg";
import orange_form from "./assets/images/orange-form.svg";
import pink_form from "./assets/images/pink-form.svg";
<<<<<<< Updated upstream
import About from "./components/about/about";

=======
import { Unity, useUnityContext } from "react-unity-webgl";
>>>>>>> Stashed changes

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/TheoryOfChangeBuilds.loader.loader.js",
    dataUrl: "/build/TheoryOfChangeBuilds.loader.data",
    frameworkUrl: "/build/TheoryOfChangeBuilds.loader.framework.js",
    codeUrl: "/build/TheoryOfChangeBuilds.loader.wasm",
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
        <img className="orange-form" src={orange_form} />
        <div className="unity"></div>
        <img className="pink-form" src={pink_form} />
      </main>
<<<<<<< Updated upstream

      <About />

=======
      <Unity
        unityProvider={unityProvider}
        style={{ width: 800, height: 600 }}
      />
>>>>>>> Stashed changes
    </>
  );


}

export default App;
