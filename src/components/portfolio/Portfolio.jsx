import React from "react";

import Port1 from "../../assets/To-do img.png";
import Port2 from "../../assets/Netlix.png";
import Port3 from "../../assets/Al-aleem.png";
import Port4 from "../../assets/Quiz App.png";

import "./portfolio.css";

const projectData = [
  {
    id: "P1",
    title: "Todo-App",
    github: "https://github.com/readoreadway/Todo-App",
    image: Port1,
  },
  {
    id: "P2",
    title: "Cloned Netflix Homepage",
    github: "https://github.com/readoreadway/Netflix",
    image: Port2,
  },
  {
    id: "P3",
    title: "Demo Edu-app",
    github: "https://github.com/readoreadway/eduTemplate",
    image: Port3,
  },
  {
    id: "P4",
    title: "Quiz-app",
    github: "https://github.com/readoreadway/Quiz",
    image: Port4,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>What I've done</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projectData.map((data) => {
          return (
            <article className="portfolio__item" key={data.id}>
              <div className="portfolio__item--img">
                <img src={data.image} alt={data.title} />
              </div>
              <div className="portfolio__item--cta">
                <h3>{data.title}</h3>
                <a
                  href={data.github}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
