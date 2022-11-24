import React from "react";
import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Inicio
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https:://linkedin.com">
          <BsLinkedin />
        </a>
        <a href="https:://github">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alan Senderovich. All rigths reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
