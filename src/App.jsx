import React from "react";
import Navbar from "./Componenets/Navbar/Navbar";
import Hero from "./Componenets/Hero/Hero";
import About from "./Componenets/About/About";
import Services from "./Componenets/Services/Services";
import MyWork from "./Componenets/MyWork/MyWork";
import Contact from "./Componenets/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
    </div>
  );
};

export default App;
