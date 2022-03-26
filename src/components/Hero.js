import React from "react";
import video from "../images/sikera-video.mp4";

const Hero = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <video
          style={{ width: "100%", paddingTop: "-30px" }}
          muted
          loop
          autoPlay
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="hero-heading">
          <span>
            <h2>KUNYWA MAJI, UKIMALIZA ORDER</h2>
          </span>
          <span className="second-span">
            <h2>
              POMBE AT <span>LIQOUR MART</span>
            </h2>
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
