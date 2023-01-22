import "./styles.css";

import React from "react";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="row">
        <div className="contact-col">
          <div>
            <i className="fa fa-home"></i>
            <span>
              <h5>XYZ Road, ABC Building</h5>
              <p>Bangalore, Karnataka, IN</p>
            </span>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <span>
              <h5>+1 0123456789</h5>
              <p>Monday to Saturday, 10AM to 6PM</p>
            </span>
          </div>
          <div>
            <i className="fa fa-envelope-o"></i>
            <span>
              <h5>info@gmail.com</h5>
              <p>Email us your query</p>
            </span>
          </div>
        </div>
        <div className="contact-col">
          <form>
            <input type="text" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Enter Email Address" required />
            <input type="text" placeholder="Enter Your Subject" required />
            <textarea rows="8" placeholder="Message" required></textarea>
            <button type="submit" className="hero-btn red-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
