import React from "react";
import { web, app } from "../data/projects";
import ProjectCard from "./../component/ProjectCard";
const Project = () => {
  const webInfos = web.map((website, index) => (
    <ProjectCard
      key={index}
      name={website.name}
      desc={website.desc}
      imageUrl={website.imageUrl}
      url={website.url}
    />
  ));
  const appInfos = app.map((app, index) => (
    <ProjectCard
      key={index}
      name={app.name}
      desc={app.desc}
      imageUrl={app.imageUrl}
      url={app.url}
    />
  ));
  return (
    <div id="projects" className="container">
      <div className="section-intro" data-aos="fade-up">
        <h1 className="section-title">See My Projects</h1>
        <p className="desc-section">
          This are some of my projects that I implemented during my Web And
          Flutter developement. Developement in both environment was a challenge
          initially, but I survived somehow.
        </p>
        <div className="view-button">
          <a
            href="https://github.com/saurabh-619"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
      <div className="web">
        <div className="border-wrapper" data-aos="fade-up">
          <div className="side-border"></div>
          <h3 className="web-title">Web Projects</h3>
        </div>
        <div className="proj-cards">{webInfos}</div>
      </div>
      <div className="app">
        <div className="border-wrapper" data-aos="fade-up">
          <div className="side-border"></div>
          <h3 className="web-title">Flutter Projects</h3>
        </div>
        <div className="proj-cards">{appInfos}</div>
      </div>
    </div>
  );
};

export default Project;
