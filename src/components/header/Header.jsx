import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import styles from './header.css'
import me from '../../assets/me.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! I'm</h5>
        <h1>Adewumi</h1>
        <h5>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
