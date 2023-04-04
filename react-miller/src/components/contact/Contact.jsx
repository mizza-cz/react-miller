import './contact.css';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa';
import React, { useState } from 'react';
import axios from 'axios';
import shapeOne from '../../assets/shape-1.png';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://sheet.best/api/sheets/5ac8eb52-2ce1-43fa-a82e-3a1ea6f06a04', form)
      .then((response) => {
        console.log(response);
        setForm({ name: '', email: '', subject: '', message: '' });
      });
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title text-cs">Contact Me</h2>
      <p className="section__subtitle">
        Let's <span>Talk About Ideas and Advice </span>
      </p>
      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegMap />
            </span>
            <h3 className="contact__card-title">Adress</h3>
            <p className="contact__data">North Tower, Toronto, Canada</p>
          </div>
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegUser />
            </span>
            <h3 className="contact__card-title">Freelance</h3>
            <p className="contact__data">Available Right Now</p>
          </div>
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegEnvelope />
            </span>
            <h3 className="contact__card-title">Email</h3>
            <p className="contact__data">zoe.miller@gmail.com</p>
          </div>
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegAddressBook />
            </span>
            <h3 className="contact__card-title">Phone</h3>
            <p className="contact__data">+1 900 - 900 - 9000</p>
          </div>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group grid">
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your full Name <b>*</b>
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                value={form.name}
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your Email Address <b>*</b>
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="email"
                value={form.email}
                className="contact__form-input"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <label className="contact__form-tag text-cs">
              Your Subject <b>*</b>
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="subject"
              value={form.subject}
              className="contact__form-input"
            />
          </div>
          <div className="contact__form-div contact__form-area ">
            <label className="contact__form-tag text-cs">
              Your Message <b>*</b>
            </label>
            <textarea
              onChange={handleChange}
              name="message"
              value={form.message}
              className="contact__form-input"></textarea>
          </div>
          <div className="contact__submit">
            <p>* Accept the terms and conditions.</p>
            <button className="btn text-cs">Send Message</button>
          </div>
        </form>
      </div>
      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>
      <div className="section__bg-wrapper">
        <span className="bg__title">Contact Me</span>
      </div>
    </section>
  );
};

export default Contact;
