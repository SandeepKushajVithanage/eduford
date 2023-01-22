import { images } from "../../assets";

import "./styles.css";

import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our Student Says</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="row">
        <div className="testimonials-col">
          <img src={images.user1} alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ab
              sed asperiores corrupti porro ullam nobis dicta totam adipisci
              praesentium, similique, aut hic nihil officia ducimus molestiae
              explicabo dolorem. Dignissimos.
            </p>
            <h3>Christine Berkley</h3>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
          </div>
        </div>
        <div className="testimonials-col">
          <img src={images.user2} alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ab
              sed asperiores corrupti porro ullam nobis dicta totam adipisci
              praesentium, similique, aut hic nihil officia ducimus molestiae
              explicabo dolorem. Dignissimos.
            </p>
            <h3>David Byer</h3>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
