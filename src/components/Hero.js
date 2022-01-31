import React from "react";
import video from "../images/sikera-video.mp4";

const Hero = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <video muted loop autoPlay>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Hero;
