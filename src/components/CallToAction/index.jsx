import "./styles.css";

import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="cta">
      <h1>
        Enroll for Our Various Online Courses
        <br />
        Anywhere from The World
      </h1>
      <Link className="hero-btn" to="#">
        CONTACT US
      </Link>
    </section>
  );
};

export default CallToAction;
