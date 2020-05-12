import React from "react";
import StoryLeft from "./../component/StoryLeft";
import StoryRight from "../component/StoryRight";
import { journey } from "../data/journey";

const About = () => {
  return (
    <div id="about" className="container">
      <div className="section-intro " data-aos="fade-up">
        <h1 className="section-title">See My Journey</h1>
        <p className="desc-section">
          My Journey's been a great fun because of my parents and friends, peers
          I got througout my journey.
        </p>
      </div>
      <div className="stories">
        <StoryLeft
          text={journey.school.text}
          topic={journey.school.topic}
          imageUrl={journey.school.imageUrl}
          date={journey.school.date}
        />
        <StoryRight
          text={journey.degree.text}
          topic={journey.degree.topic}
          imageUrl={journey.degree.imageUrl}
          date={journey.degree.date}
        />
        <StoryLeft
          text={journey.web.text}
          topic={journey.web.topic}
          imageUrl={journey.web.imageUrl}
          date={journey.web.date}
        />
        <StoryRight
          text={journey.app.text}
          topic={journey.app.topic}
          imageUrl={journey.app.imageUrl}
          date={journey.app.date}
        />
      </div>
    </div>
  );
};

export default About;
