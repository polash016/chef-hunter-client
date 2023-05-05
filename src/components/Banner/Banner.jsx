import React from "react";
import "./headxtra.css";
import hero from '../../../src/image/hero.png'

const Banner = () => {
  return (
    <div>
      <div className=" position-relative p-0">
        <div className=" py-5 bg-dark hero-header mb-5 ">
          <div className="container my-5 py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="display-3 text-white animated slideInLeft">
                  Enjoy Our
                  <br />
                  Delicious Meal
                </h1>
                <p className="text-white animated slideInLeft mb-4 pb-2">
                  We use high-quality ingredients and catering to individual
                  preferences and dietary needs. Our menu offers a variety of
                  fusion cuisine options that combine traditional flavors with
                  modern techniques, resulting in a unique and exceptional
                  dining experience.
                </p>
                <a
                  href=""
                  className="btn btn-danger py-sm-3 px-sm-5 me-3 animated slideInLeft"
                >
                  Book A Table
                </a>
              </div>
              <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                <img className="img-fluid" src={hero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
