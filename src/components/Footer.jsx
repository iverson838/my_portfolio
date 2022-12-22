import React from "react";
import logo from "../assets/banner-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faConnectdevelop,
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
        <FontAwesomeIcon icon={faLinkedin} className="linked" />
        <FontAwesomeIcon icon={faGithub} className="linked" />
        <FontAwesomeIcon icon={faConnectdevelop} className="linked" />
        <FontAwesomeIcon icon={faInstagram} className="linked" />
      </div>
    </footer>
  );
};

export default Footer;
