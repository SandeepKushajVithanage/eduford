import { images } from "../../assets";
import "./styles.css";

import React from "react";

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>Our Facilities</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="row">
        <div className="facilities-col">
          <img src={images.library} alt="" />
          <h3>World Class Library</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            quia, excepturi unde modi, saepe repellendus.
          </p>
        </div>
        <div className="facilities-col">
          <img src={images.basketball} alt="" />
          <h3>Largest Playground</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            quia, excepturi unde modi, saepe repellendus.
          </p>
        </div>
        <div className="facilities-col">
          <img src={images.cafeteria} alt="" />
          <h3>Tasty and Healthy Food</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            quia, excepturi unde modi, saepe repellendus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
