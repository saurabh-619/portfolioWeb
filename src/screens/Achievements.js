import React from "react";
import { certs } from "../data/acheivements";
import CertCard from "./../component/CertCard";

const Achievements = () => {
  const allCertCards = certs.map((cert, index) => (
    <CertCard
      key={index}
      imageUrl={cert.imageUrl}
      topic={cert.topic}
      provider={cert.provider}
    />
  ));
  return (
    <div id="achievements" className="container">
      <div className="section-intro" data-aos="fade-up">
        <h1 className="section-title">See My Achievements</h1>
        <p className="desc-section">
          This are some of my certificates that I recieved from different
          Universities in Developement and other areas.Bit of difficult but
          worth doing.
        </p>
      </div>
      <div className="cert">
        <div className="border-wrapper " data-aos="fade-up">
          <div className="side-border"></div>
          <h3 className="web-title">Certificates</h3>
        </div>
        <div className="cert-cards">{allCertCards}</div>
      </div>
    </div>
  );
};

export default Achievements;
