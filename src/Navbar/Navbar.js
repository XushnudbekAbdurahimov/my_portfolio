import React, { useState, useEffect } from 'react';
import './style.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { FaPaintBrush } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { GoArrowUp } from "react-icons/go";
import res1 from '../Navbar/res2.jpg'
import res3 from '../Navbar/res3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
AOS.init();




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;  // screenY o'rniga scrollY
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
      });
    }
  });
};



let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

const handleMenuClick = () => {
  menuIcon.classList.toggle('X');
  navbar.classList.toggle('active');
};


const Navbar = () => {



  // }
  return (
    <div>
      <div className="container">
        <header className='header'>
          <a href="#" className='logo'>Portfolio</a>

          <i className='bx bx-menu' id='menu-icon' onClick={handleMenuClick}><IoMenuSharp /></i>

          <nav className='navbar' >
            <a href="#home" className='active' data-aos="flip-right">Home</a>
            <a href="#about" data-aos="flip-right">About</a>
            <a href="#services" data-aos="flip-right">Services</a>
            <a href="#portfolio" data-aos="flip-right">Portfolio</a>
            <a href="#contact" data-aos="flip-right">Contact</a>
            {/* <a href="#" className='light' ><FaRegLightbulb /></a> */}

          </nav>




        </header>

        <section className="home" id="home">
          <div className="home-content">
            <h3 data-aos="flip-left">Hello, It's me</h3>
            <h1 data-aos="fade-up"
              data-aos-anchor-placement="center-center">Xushnudbek Abdurahimov</h1>
            <h3 data-aos="zoom-out-up">And I'm a <span>Fronted Developer</span></h3>
            <p data-aos="zoom-out-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut culpa autem? Dolorem incidunt quis quia similique!</p>
            <div className="social-media">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaSquareXTwitter /></a>
              <a href="#"><FaSquareInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
            <a href="#" className='btn'>Download CV</a>
          </div>

          <div className="home-img">
            <img src={res3} alt="" />
          </div>
        </section>



        <section className="about" id="about">
          <div className="about-img" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={res3} alt="" />
          </div>

          <div className="about-content" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h2 className='heading'>About <span>Me</span></h2>
            <h3>Frontend Developer!</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore id maiores cumque odio est sapiente ea accusamus corrupti, inventore voluptatem, dignissimos culpa quidem eveniet harum amet necessitatibus distinctio minima laboriosam itaque molestias? Veritatis enim, deleniti laborum facere adipisci vel mollitia laudantium necessitatibus aut. Nostrum, accusamus non?</p>
            <a href="#" className="btn">Read More</a>

          </div>
        </section>


        <section className="services" id="services">
          <h2 className="heading" data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            Our <span>Services</span>
          </h2>
          <div className="services-container">
            <div className="services-box" data-aos="zoom-out-down">
              <i className='bx bx-code-alt'><IoCodeSlash /></i>
              <h3>Web Development</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum ad, voluptatum dignissimos fugit nam soluta ut nulla ipsum magni.</p>
              <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box" data-aos="zoom-out-down">
              <i className='bx bxs-paint'><FaPaintBrush /></i>
              <h3>Graphic Design Development</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum ad, voluptatum dignissimos fugit nam soluta ut nulla ipsum magni.</p>
              <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box" data-aos="zoom-out-down">
              <i className='bx bx-chart-alt'><FaChartSimple /></i>
              <h3>Digital Market</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum ad, voluptatum dignissimos fugit nam soluta ut nulla ipsum magni.</p>
              <a href="#" className="btn">Read More</a>
            </div>
          </div>
        </section>


        <section className="portfolio" id="portfolio">
          <h2 className="heading" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            Latest <span>Project</span>
          </h2>
          <div className="portfolio-container">
            <div className="portfolio-box" data-aos="zoom-in-down">
              <img src={res1} alt="" />
              <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, similique?</p>
                <a href="#"><FaExternalLinkAlt /></a>
              </div>
            </div>
            <div className="portfolio-box" data-aos="zoom-in-down">
              <img src={res1} alt="" />
              <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, similique?</p>
                <a href="#"><FaExternalLinkAlt /></a>
              </div>
            </div>
            <div className="portfolio-box" data-aos="zoom-in-down">
              <img src={res1} alt="" />
              <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, similique?</p>
                <a href="#"><FaExternalLinkAlt /></a>
              </div>
            </div>
            <div className="portfolio-box" data-aos="zoom-in-down">
              <img src={res1} alt="" />
              <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, similique?</p>
                <a href="#"><FaExternalLinkAlt /></a>
              </div>
            </div>
            <div className="portfolio-box" data-aos="zoom-in-down">
              <img src={res1} alt="" />
              <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, similique?</p>
                <a href="#"><FaExternalLinkAlt /></a>
              </div>
            </div>
            <div className="portfolio-box" data-aos="zoom-in-down">
              <img src={res1} alt="" />
              <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, similique?</p>
                <a href="#"><FaExternalLinkAlt /></a>
              </div>
            </div>
          </div>
        </section>



        {/* contact.section  */}

        <section className="contact" id="contact">
          <h2 className="heading" data-aos="fade-up"
            data-aos-duration="3000">
            Contact <span>Me!</span>
          </h2>
          <form action="#" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="input-box">
              <input type="text" placeholder='Full Name' />
              <input type="email" placeholder='Email Address' />
            </div>
            <div className="input-box">
              <input type="number" placeholder='Mobile Number' />
              <input type="text" placeholder='Email Subject' />
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            <input type="submit" name="" id="" value='Send Message' className='btn' />
          </form>
        </section>

        <footer className="footer">
          <div className="footer-text">
            <p>Copyright &copy; 2023 by Codehal | All Rights Reserved.</p>
          </div>
          <div className="footer-iconTop">
            <a href="#home"><i><GoArrowUp /></i></a>
          </div>
        </footer>


      </div>
    </div>
  )
}

export default Navbar
