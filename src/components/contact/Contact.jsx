import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r9389rj",
        "template_0xh4j1o",
        form.current,
        "S6LC2ubdrlSs4QJvf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailUnread className="contact__icon" />
            <h4>Email</h4>
            <h5>dewumibamigbade@gmail.com</h5>
            <a href="mailto:dewumibamigbade@gmail.com" target="_blank">
              Send a Mail
            </a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className="contact__icon" />
            <h4>Messenger</h4>
            <h5>Bamigbade Adewumi</h5>
            <a href="https://m.me/ridoridwe" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>Whatsapp</h4>
            <h5>+2348185177293</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+2348185177293"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea name="message" rows="7" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
