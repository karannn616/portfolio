import React from "react";
import "./contact.css";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaImage,
  FaPhoneAlt,
  FaGithub,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact</h2>
      <p className="section__subtitle">Get in Touch</p>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't Be Shy</h3>

          <p className="contact__description">
            Please don't hesitate to reach out to me. I'm available to talk
            about fresh projects, innovative concepts, or the chance to
            contribute to your goals and visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">tusharsinghts616@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Reach me</span>
                <h4 className="info__desc">+91 9819765352</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://github.com/karannn616"
              className="contact__social__link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/karannn________/"
              className="contact__social__link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://vsco.co/--karan--/gallery"
              className="contact__social__link"
            >
              <FaImage />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input__group">
            <div className="form__input__div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input__div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>

            <div className="form__input__div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input__div">
            <textarea
              className="form__control textarea"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button__icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
