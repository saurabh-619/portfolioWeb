import React from "react";
import { Link, withRouter } from "react-router-dom";
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

      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
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
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Navbar;
