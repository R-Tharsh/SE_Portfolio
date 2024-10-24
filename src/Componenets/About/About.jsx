import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Equipped with a robust educational background in BSc (Hons) in
              Information Technology.
            </p>
            <p>
              I am genuinely excited about the potential for continuous growth,
              learning from seasoned professionals.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
