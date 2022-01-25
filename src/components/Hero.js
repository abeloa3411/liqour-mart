import React from "react";
import video from "../images/sikera-video.mp4";

const Hero = () => {
  return (
    <>
      <div style={{ height: "85vh" }}>
        <video muted loop autoPlay style={{ maxWidth: "1005px" }}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Hero;
