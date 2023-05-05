import React from "react";
import "./ExtraSection2.css";
import food1 from "../../../src/image/food1.jpg"
import food2 from "../../../src/image/food2.jpg"
import food3 from "../../../src/image/food3.jpg"
import food4 from "../../../src/image/food4.jpg"

const ExtraSection2 = () => {
  return (
      <section className="dish_section layout_padding mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="dish_container">
                <div className="box">
                  <img src={food1} alt="" />
                </div>
                <div className="box">
                  <img src={food2} alt="" />
                </div>
                <div className="box">
                  <img src={food3} alt="" />
                </div>
                <div className="box">
                  <img src={food4} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <hr />
                  <h2>
                    Our <br />
                    Food <br />
                    dishes
                  </h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ExtraSection2;
