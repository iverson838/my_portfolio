import React from "react";
import logo from "../assets/banner-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
        <FontAwesomeIcon icon={faLinkedin} className="linked" />
        <FontAwesomeIcon icon={faLinkedin} className="linked" />
        <FontAwesomeIcon icon={faLinkedin} className="linked" />
      </div>
    </footer>
  );
};

export default Footer;
