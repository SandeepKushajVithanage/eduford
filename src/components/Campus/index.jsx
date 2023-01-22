import { images } from "../../assets";
import "./styles.css";

import React from "react";

const Campus = () => {
  return (
    <section className="campus">
      <h1>Our Global Campus</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

      <div className="row">
        <div className="campus-col">
          <img src={images.london} alt="" />
          <div className="layer">
            <h3>LONDON</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src={images.newyork} alt="" />
          <div className="layer">
            <h3>NEW YORK</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src={images.washington} alt="" />
          <div className="layer">
            <h3>WASHINGTON</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
