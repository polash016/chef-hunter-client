import React from "react";
import banner from "../../src/image/banner.jpg";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <div className=""
      style={{
        backgroundImage: `url(${banner})`,
        height: "700px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>Food image here</div>
    </div>
  );
};

export default Banner;
