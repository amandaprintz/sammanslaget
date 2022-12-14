import "./App.css";
import React from "react";
import orange_form from "./assets/images/orange-form.svg";
import pink_form from "./assets/images/pink-form.svg";
import About from "./components/about/about";
import Header from "./components/header/header";
import "././assets/fonts/Otterco-Bold.woff";
import HomePage from "./pages/Home";
import GamePage from "./pages/Game";
import AboutPage from "./pages/About";
import InfoPage from "./pages/Info";
import ProjectPage from "./pages/Project";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
