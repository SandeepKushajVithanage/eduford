import "./styles.css";

import React from "react";

import Footer from "../../components/Footer";
import AboutHeader from "../../components/AboutHeader";
import AboutUs from "../../components/AboutUs";

const About = () => {
  return (
    <div className="page">
      <AboutHeader />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
