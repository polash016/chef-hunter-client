import React from "react";
import "./xtra.css";

const ExtraSection1 = () => {
  return (
    <div>
      <div className="text-center mt-5 mb-4">
        <h3>Our Renowned Chef Working In Foreign</h3>
      </div>
      <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
        <div className="card scard d-flex position-relative flex-column">
          <div className="imgContainer">
            <img
              style={{ height: "200px", width: "250px" }}
              src="https://i.postimg.cc/zf8qvxw1/chef5.jpg"
            />
          </div>
          <div className="content">
            <h2>Rafi Ahmed</h2>
            <p>
              Rafi Ahmed is a seasoned chef who has been working in the culinary
              industry for over 15 years. He is an expert in traditional
              Bangladeshi cuisine and has a vast repertoire of recipes that he
              has perfected over the years.
            </p>
          </div>
        </div>
        <div className="card scard d-flex position-relative flex-column">
          <div className="imgContainer">
            <img
              style={{ height: "200px", width: "250px" }}
              src="https://i.postimg.cc/XNzF5CDP/pexels-anna-tarazevich-6937447.jpg"
            />
          </div>
          <div className="content">
            <h2>Shohanur Rahman</h2>
            <p>
              Shohanur Rahman is a renowned Bangladeshi chef who specializes in
              traditional Bangladeshi cuisine. With over a decade of experience,
              he has gained a loyal following for his authentic flavors and
              innovative recipes.
            </p>
          </div>
        </div>
        <div className="card scard d-flex position-relative flex-column">
          <div className="imgContainer">
            <img
              style={{ height: "200px", width: "250px" }}
              src="https://i.postimg.cc/Vk1qRbXW/chef1.jpg"
            />
          </div>
          <div className="content">
            <h2>Shawkat Osman</h2>
            <p>
              Chef Shawkat is an expert in traditional Bangladeshi cuisine and
              has been cooking for over 10 years. He loves experimenting with
              new ingredients and techniques to create unique and flavorful
              dishes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection1;
