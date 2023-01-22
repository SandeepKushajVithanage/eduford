import "./styles.css";

import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { images } from "../../assets";

const AboutHeader = () => {
  const menu = useRef();

  const showMenu = () => {
    menu.current.style.width = "200px";
  };

  const hideMenu = () => {
    menu.current.style.width = "0px";
  };

  return (
    <section className="sub-header">
      <nav>
        <Link to="/">
          <img src={images.logo} alt="" />
        </Link>
        <div ref={menu} className="nav-links">
          <i onClick={hideMenu} className="fa fa-times"></i>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/course">COURSE</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <i onClick={showMenu} className="fa fa-bars"></i>
      </nav>

      <h1>About Us</h1>
    </section>
  );
};

export default AboutHeader;
