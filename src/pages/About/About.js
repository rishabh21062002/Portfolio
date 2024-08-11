 import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="/new.jpeg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Rishabh Kataria is an Electronics and Communication Engineering student at Punjab Engineering College, Chandigarh. Hailing from Haryana, he has a strong passion for software development and is keen on exploring and advancing his skills in this field.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
