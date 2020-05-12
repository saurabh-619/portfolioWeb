import React from "react";
const Navbar = ({ history }) => {
  return (
    <div>
      <nav>
        <li className="nav-brand">
          <a href="/" className="nav-brand-link">
            <h1>Saurabh Bomble</h1>
          </a>
        </li>
        <ul className="nav-links">
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#achievements" className="nav-link">
              Achievements
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="ham-menu"></div>
      </nav>

      {/* Hamburger Menu */}

      <div id="mobile">
        <div className="hamburger-wrapper">
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about" className="link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="link">
              Projects
            </a>
          </li>
          <li>
            <a href="#achievements" className="link">
              Achievements
            </a>
          </li>
          <li>
            <a href="#contact" className="link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/*  */}
    </div>
  );
};

export default Navbar;
