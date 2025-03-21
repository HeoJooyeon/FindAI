import React from "react";
import "./ContentHome.css";

const ContentHome = () => {
  return (
    <div className="content-page">
      <div className="content-header"></div>
      <div className="content-main">
        <div className="video-container">
          <video
            className="content-background"
            src="/chatgpt.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
      <div className="content-footer"></div>
    </div>
  );
};

export default ContentHome;
