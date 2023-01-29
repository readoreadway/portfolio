import React from "react";
import { BiCheckSquare } from "react-icons/bi";

import './services.css'

const Services = () => {
  return (
    <section id="service">
      <h5>(What I Offer)</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__heading">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckSquare className="service__icon" />
              <p>HyperText Markup Language (HTML)</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Cascading Style Sheet (CSS)</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p className="sass">Syntactically Awesome Style Sheets (SASS).</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>JavaScript Fundamentals + ES6</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>JSX, Hooks and Redux</p>
            </li>
            
          </ul>
        </article>

        {/* FRONTEND DEV */}

        <article className="service">
          <div className="service__heading">
            <h3>Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckSquare className="service__icon" />
              <p>Ideation</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Creativity</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Problem Solving</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>UI (design)</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Styling</p>
            </li>
            
          </ul>
        </article>

        {/* UI/UX DESIGN */}

        <article className="service">
          <div className="service__heading">
            <h3>Digital Marketing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckSquare className="service__icon" />
              <p>Basic SEO/SEM</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Social Media Management</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Basic Design Skills</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>CRM</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Research and Online Resources</p>
            </li>
            
          </ul>
        </article>

      </div>
    </section>
  );
};

export default Services;
