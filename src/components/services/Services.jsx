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
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            
          </ul>
        </article>

        {/* FRONTEND DEV */}

        <article className="service">
          <div className="service__heading">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckSquare className="service__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
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
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheckSquare className="service__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            
          </ul>
        </article>

      </div>
    </section>
  );
};

export default Services;
