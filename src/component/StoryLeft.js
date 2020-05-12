import React from "react";

const StoryLeft = ({ topic, text, imageUrl, date }) => {
  return (
    <div className="story-left" data-aos="fade-up">
      <div className="text-content">
        <h3>{topic}</h3>
        <p className="story-text">{text}</p>
        <h4>
          ~ <i>{date}</i>
        </h4>
      </div>
      <div className="story-img">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default StoryLeft;
