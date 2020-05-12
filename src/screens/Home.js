import React from "react";
import "../magic.min.css";
import Navbar from "../component/Navbar";
import dev2 from "../images/dev2.svg";
const Home = (props) => {
  return (
    <div>
      <div id="home" className="container">
        <Navbar />
        <div className="home-wrapper">
          <div className="home-text">
            <h1>Hi There!</h1>
            <p>I'm Saurabh, I'm Flutter Developer & Web Developer !</p>
            <a href="#projects" rel="noopener noreferrer">
              <div className="view-button">View Projects</div>
            </a>
          </div>
          <div className="home-img">
            <img src={dev2} alt="" />
          </div>
        </div>

        <a href="#home">
          <div className="scrollToTop">
            <i className="fas fa-arrow-up"></i>
          </div>
        </a>
      </div>

      {/* Slider */}
      <div className="slider"></div>
    </div>
  );
};

export default Home;
