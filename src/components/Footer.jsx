import React from "react";
import logo from "../assets/banner-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWeixin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <img
        src={logo}
        style={{ width: "300px", height: "300px" }}
        alt="brandlogo"
      ></img>
      <div className="flex">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/andre-om/"
        >
          <FontAwesomeIcon icon={faLinkedin} className="linked" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/iverson838"
        >
          <FontAwesomeIcon icon={faGithub} className="linked" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:aeomachado@gmail.com"
        >
          <FontAwesomeIcon icon={faWeixin} className="linked" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/andre.mac838/"
        >
          <FontAwesomeIcon icon={faInstagram} className="linked" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
