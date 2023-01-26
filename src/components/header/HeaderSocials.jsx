import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/adegbade" target='_blank'> <BsLinkedin /> </a>
      <a href="https://github.com/readoreadway" target='_blank'><BsGithub /></a>
      <a href="https://www.facebook.com/ridoridwe" target='_blank'> <BsFacebook /> </a>
    </div>
  );
};

export default HeaderSocials;
