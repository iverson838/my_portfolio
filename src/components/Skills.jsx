import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";
import html from "../assets/logos/html_logo.png";
import css from "../assets/logos/css_logo.png";
import javascript from "../assets/logos/javascript_logo.png";
import bootstrap from "../assets/logos/bootstrap-logo.png";
import node from "../assets/logos/nodejs-logo.png";
import mongodb from "../assets/logos/mongodb-logo.png";
import mongoose from "../assets/logos/mongoose-logo.png";
import react from "../assets/logos/react-logo.png";
import git from "../assets/logos/git-logo.png";
import github from "../assets/logos/github-logo.png";
import jquery from "../assets/logos/jquery-logo.svg";
import sql from "../assets/logos/sql-logo.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>The Stack</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="html-logo" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={css} alt="css-logo" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="javascript-logo" />
                  <h5>Javascript(ES6)</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="bootstrap-logo" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={node} alt="node-logo" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="mongodb-logo" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={mongoose} alt="mongoose-logo" />
                  <h5>Mongoose</h5>
                </div>
                <div className="item">
                  <img src={react} alt="react-logo" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={git} alt="git-logo" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={github} alt="github-logo" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={jquery} alt="Jquery-logo" />
                  <h5>Jquery</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="sql-logo" />
                  <h5>SQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
