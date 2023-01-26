import React from "react";
import { GiSkills } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { BsFolder2Open } from "react-icons/bs";

import me from "../../assets/Dewumi.jpg";

import styles from "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>(Become Acquainted)</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me--img">
            <img src={me} alt="Myself" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiSkills className="about__icon" />
              <h5>Experience with JS</h5>
              <small>12+ months</small>
            </article>

            <article className="about__card">
              <IoIosPeople className="about__icon" />
              <h5>Clients</h5>
              <small>6</small>
            </article>

            <article className="about__card">
              <BsFolder2Open className="about__icon" />
              <h5>Projects</h5>
              <small>4</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            commodi illo aspernatur temporibus quia, repellendus deserunt non
            atque fugiat voluptatum praesentium sint similique cum reprehenderit
            sit amet omnis optio. Eos?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
