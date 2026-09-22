import React from "react";
import "./Hero.css";
import profile_img from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img src={profile_img} alt="Profile" className="hero-image" />
      <h1 className="hero-heading">
        <span>Hi, I'm Robert Tharshan,</span> a Software Engineer building business-focused products
      </h1>
      <p className="hero-description">
        I build full-stack web applications, APIs, workflow automation, and
        insurance platforms with Laravel, PHP, Vue.js, React.js, JavaScript,
        and modern database systems.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a className="hero-resume" href="https://github.com/R-Tharsh/globePortfolio" target="_blank" rel="noopener noreferrer">View GitHub</a>
      </div>
    </section>
  );
};

export default Hero;
