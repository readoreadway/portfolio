import React from "react";

import Male1 from "../../assets/2d-dummy.png";
import Male2 from "../../assets/3d-dummy.png";
import female from "../../assets/female-dummy.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonial.css";

const testimonials = [
  {
    id: "t1",
    name: "Adeniji Joseph",
    image: Male1,
    imageTitle: "testimonial 1",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quas voluptatibus porro autem quia et totam nostrum iusto alias, quibusdam earum minus omnis illum quis vitae voluptate qui! Voluptates, consectetur!",
  },
  {
    id: "t2",
    name: "Babatunde Hamid",
    image: Male2,
    imageTitle: "testimonial 2",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quas voluptatibus porro autem quia et totam nostrum iusto alias, quibusdam earum minus omnis illum quis vitae voluptate qui! Voluptates, consectetur!",
  },
  {
    id: "t3",
    name: "Raheem Zainab",
    image: female,
    imageTitle: "testimonial 3",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quas voluptatibus porro autem quia et totam nostrum iusto alias, quibusdam earum minus omnis illum quis vitae voluptate qui! Voluptates, consectetur!",
  },
  {
    id: "t4",
    name: "Cole Samuel",
    image: Male2,
    imageTitle: "testimonial 4",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quas voluptatibus porro autem quia et totam nostrum iusto alias, quibusdam earum minus omnis illum quis vitae voluptate qui! Voluptates, consectetur!",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>What Clients Say</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container"
        modules={[ Pagination ]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map(({ id, name, image, imageTitle, review }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="testimonial__avatar">
                <img src={image} alt={imageTitle} />
              </div>

              <div className="testimonial__content">
                <h5> {name} </h5>
                <small className="review">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
