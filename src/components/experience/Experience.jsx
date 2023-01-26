import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>(My Skills)</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">

          <div className="experience__content">
            <h3>Frontend Development</h3>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <h4>Javascript</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <h4>React js</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
