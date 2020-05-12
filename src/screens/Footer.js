import React from "react";
import saurabh from "../images/saurabh.jpg";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="container">
        <div className="footer-content">
          <div className="footer-img">
            <img src={saurabh} alt="" />
            <h3>
              &copy; All rights are reserved | {new Date().getFullYear()} | Made
              with 💖 by Saurabh Bomble
            </h3>
          </div>
          <div className="text-content">
            <h4>Rajgurunagar | Nigdi | India</h4>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
