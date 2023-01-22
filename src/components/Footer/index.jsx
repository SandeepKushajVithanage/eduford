import "./styles.css";

import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <h4>About US</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        praesentium deleniti corrupti quas, amet
        <br />
        dolore doloremque commodi facere recusandae voluptate reiciendis
        perspiciatis.
      </p>
      <div className="icons">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-linkedin"></i>
      </div>
      <p>
        Made with <i className="fa fa-heart-o"></i> by Easy Tutorials
      </p>
    </section>
  );
};

export default Footer;
