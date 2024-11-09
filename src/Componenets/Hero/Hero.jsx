import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_image.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img src={profile_img} alt="Profile" className="hero-image" />
      <h1 className="hero-heading">
        <span>Hi, I'm Robert Tharshan,</span> a Passionate Software Engineer
      </h1>
      <p className="hero-description">
        hands-on experience in PHP/Laravel, WordPress, and frontend frameworks
        like React, I enjoy building efficient, scalable solutions that solve
        real-world problems. I am always eager to learn new technologies and
        collaborate with like-minded individuals to create impactful digital
        experiences.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </section>
  );
};

export default Hero;
