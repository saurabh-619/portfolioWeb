import React from "react";

const CertCard = ({ imageUrl, provider, topic }) => {
  return (
    <div className="cert-card" data-aos="fade-up">
      <div className="cert-img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="cert-content">
        <h3>{topic}</h3>
        <h5>{provider}</h5>
      </div>
    </div>
  );
};

export default CertCard;
