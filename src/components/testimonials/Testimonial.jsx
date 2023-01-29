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
    name: "Adeleke Hamid",
    image: Male1,
    imageTitle: "testimonial 1",
    review:
      "Thank you for a job well done, Dewumi. It's easier to work with you, you pay maximum attention to details, always seeking more to deliver your best. In the end, I got what I wanted. Hope to work more with you in future",
    designation: "CEO/Founder, Marmac Africa",
  },
  {
    id: "t2",
    name: "Habyb Abdullah",
    image: Male2,
    imageTitle: "testimonial 2",
    review:
      "Exactly what we needed from you! A project delivered in a short time frame, yet, delivered a top notch despite not being a Project Manager. I'm stunned!",
    designation: "Lead, Hireremote Africa"
  },
  {
    id: "t3",
    name: "Fayena R",
    image: female,
    imageTitle: "testimonial 3",
    review:
      "Starting a journey always seem hard but you made it all easy through your dedication and creativity. Our page management remains, thanks to you.",
      designation: "Founder/Director, Al-aleem Academy"
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>What Clients Say</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map(({ id, name, image, imageTitle, review, designation }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="testimonial__avatar">
                <img src={image} alt={imageTitle} />
              </div>

              <div className="testimonial__content">
                <h5> {name} </h5>
                <small className="review">{review}</small>
                <small className="designation"> {designation} </small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
