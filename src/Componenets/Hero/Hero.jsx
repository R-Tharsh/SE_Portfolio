import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_image.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img src={profile_img} alt="Profile" className="hero-image" />
      <h1 className="hero-heading">
        <span>I'm Robert Anandaraj Tharshan,</span> Software Engineer based in
        Sri Lanka.
      </h1>
      <p className="hero-description">
        As a fervent and aspiring Software Engineer, I'm geared up to embark on
        my journey within the software development domain. Equipped with a
        robust educational background in BSc (Hons) in Information Technology,
        specializing in Software Engineering.
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
