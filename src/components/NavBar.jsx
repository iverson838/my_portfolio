import { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import navlogo from "../assets/navlogo.png";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar bg="light">
      <Container className="nav-container">
        <Navbar.Brand className="navbar-brand" href="#home">
          <img src={navlogo} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link
              href="#home"
              style={{ marginLeft: "9em" }}
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link "
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link "
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link "
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#footer"
              className={
                activeLink === "LetsConnect"
                  ? "active navbar-link"
                  : "navbar-link "
              }
              onClick={() => onUpdateActiveLink("connect")}
            >
              Let's Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
