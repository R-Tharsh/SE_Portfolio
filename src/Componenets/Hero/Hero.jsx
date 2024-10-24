import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Robert Anandaraj Tharshan,</span> Web developer based in Sri
        Lanka.
      </h1>
      <p>
        As a fervent and aspiring Software Engineer, I'm geared up to embark on
        my journey within the software development domain. Equipped with a
        robust educational background in BSc (Hons) in Information Technology,
        specializing in Software Engineering.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
