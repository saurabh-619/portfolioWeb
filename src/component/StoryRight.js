import React from "react";

const StoryRight = ({ topic, text, imageUrl, date }) => {
  return (
    <div className="  story-right" data-aos="fade-up">
      <div className="story-img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="text-content">
        <h3>{topic}</h3>
        <p className="story-text">{text}</p>
        <h4>
          ~ <i>{date}</i>
        </h4>
      </div>
    </div>
  );
};

export default StoryRight;
