import React from 'react';
import profilImg from '../../assets/profile-img.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import { FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';
import './home.css';
import CV from '../../assets/Zoe-Cv.pdf';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>
          <h1 className="home__title text-cs">
            <span>ZOÉ</span> MILLER
          </h1>
          <div className="home__job">
            <span className="text-cs">I Am</span>
            <b>Web Developer</b>
          </div>
          <div className="home__img-wrapper">
            <div className="home__banner">
              <img className="home__profile" src={profilImg} alt="home Image" />
            </div>
            <p className="home__data home__data-one">
              <span className="text-lg">
                12 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Years of <span>Experience </span>
              </span>
            </p>
            <p className="home__data home__data-two">
              <span className="text-lg">330</span>

              <span className="text-sm text-cs">
                Completed <span>Projects </span>
              </span>
            </p>

            <img className="shape shape__1" src={shapeOne} alt="shape image 1" />
            <img className="shape shape__2" src={shapeTwo} alt="shape image 2" />
            <img className="shape shape__3" src={shapeTwo} alt="shape image 3" />
          </div>
          <p className="home__text">
            From France, Paris. I have rich experience in web design, also I am good at wordpress. I
            love to talk with you about our unique
          </p>
          <div className="home__socials">
            <a href="#" className="home__social-link">
              <FaTwitter />
            </a>
            <a href="#" className="home__social-link">
              <FaDribbble />
            </a>
            <a href="#" className="home__social-link">
              <FaBehance />
            </a>
          </div>
          <div className="home__btns">
            <a href={CV} download className="btn text-cs">
              Download CV
            </a>
            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>
        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>
      <div className="section__bg-wrapper">
        <span className="bg__title">Web Developer</span>
      </div>
    </section>
  );
};

export default Home;
