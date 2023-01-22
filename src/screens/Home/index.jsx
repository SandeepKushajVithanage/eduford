import CallToAction from "../../components/CallToAction";
import Campus from "../../components/Campus";
import Courses from "../../components/Courses";
import Facilities from "../../components/Facilities";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Testimonials from "../../components/Testimonials";
import "./styles.css";

import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Courses />
      <Campus />
      <Facilities />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
