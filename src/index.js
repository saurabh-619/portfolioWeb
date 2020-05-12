import React from "react";
import ReactDOM from "react-dom";
import "./css/main.min.css";
import Home from "./screens/Home";
import Project from "./screens/Project";
import Achievements from "./screens/Achievements";
import Contact from "./screens/Contact";
import Footer from "./screens/Footer";
import About from "./screens/About";

ReactDOM.render(
  <div>
    <Home />
    <About />
    <Project />
    <Achievements />
    <Contact />
    <Footer />
  </div>,
  document.getElementById("root")
);
