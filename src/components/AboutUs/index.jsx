import { Link } from "react-router-dom";
import "./styles.css";

import React from "react";
import { images } from "../../assets";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="row">
        <div className="about-col">
          <h1>We are the world's largest university</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            accusamus repudiandae sapiente quidem est deserunt voluptate, ea ad
            esse blanditiis praesentium ratione pariatur voluptatibus
            consequatur accusantium velit temporibus maiores. Nobis!
          </p>
          <Link className="hero-btn red-btn" to="#">
            EXPLORE NOW
          </Link>
        </div>
        <div className="about-col">
          <img src={images.about} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
