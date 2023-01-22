import "./styles.css";

import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { images } from "../../assets";

const Header = () => {
  // const [menuOpened, setMenuOpened] = useState(false);
  const menu = useRef();

  const showMenu = () => {
    menu.current.style.width = "200px";
  };

  const hideMenu = () => {
    menu.current.style.width = "0px";
  };

  return (
    <section className="header">
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

      <div className="text-box">
        <h1>Worl's Biggest University</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          blanditiis
          <br />
          recusandae at sed quas ipsa in mollitia nesciunt.
        </p>
        <Link to="#" className="hero-btn">
          Visit Us To Know More
        </Link>
      </div>
    </section>
  );
};

export default Header;
