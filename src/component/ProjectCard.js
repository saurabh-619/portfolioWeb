import React from "react";
const ProjectCard = ({ name, desc, imageUrl, url }) => {
  return (
    <div className="proj-card " data-aos="fade-up">
      <div className="proj-img text-center">
        <img src={imageUrl} />
      </div>
      <div className="proj-content text-center">
        <h1 className="proj-name">{name}</h1>
        <p className="proj-desc">{desc}</p>
      </div>
      <div className="web-url text-center">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="view-button">View More</div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
