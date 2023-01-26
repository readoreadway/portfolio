import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { GiBlackBook } from "react-icons/gi";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

import "./Nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveNav("#");
        }}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BsInfoCircle />
      </a>
      <a
        href="#service"
        onClick={() => {
          setActiveNav("#service");
        }}
        className={activeNav === "#service" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => {
          setActiveNav("#portfolio");
        }}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <GiBlackBook />
      </a>
      <a
        href="#testimonial"
        onClick={() => {
          setActiveNav("#testimonial");
        }}
        className={activeNav === "#testimonial" ? "active" : ""}
      >
        <IoIosPeople />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <RiContactsBook2Line />
      </a>
    </nav>
  );
};

export default Nav;
