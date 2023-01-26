import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="https://www.facebook.com/ridoridwe" className="footer__logo" target='_blank'>
        DEWUMI
      </a>
      <ul className="footer__links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__sm">
        <a href="https://www.facebook.com/ridoridwe" target='_blank'>
          {" "}
          <BsFacebook />{" "}
        </a>
        <a href="https://linkedin.com/in/adegbade" target='_blank'>
          {" "}
          <BsLinkedin />{" "}
        </a>
        <a href="https://github.com/readoreadway" target='_blank'>
          {" "}
          <BsGithub />{" "}
        </a>
      </div>

      <div className="copyright">
        <small>&copy; DEWUMI. All rights reserved.</small>
        <h6>Design Inspo: <a href="" target='_blank'>DEGATO</a></h6>
      </div>
    </footer>
  );
};

export default Footer;
