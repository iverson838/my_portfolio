import React, { useState } from "react";
import { Container, Tab, Nav, Row, Col, Card } from "react-bootstrap";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [cardName, setCardName] = useState("IronDOC");
  const clickHandler = (value) => {
    setCardName(value.target.innerHTML);
  };
  return (
    <div className="project" id="projects">
      <div>
        <Container>
          <Row>
            <Col className="skill-bx wow zoomIn">
              <div>
                <h2>Projects</h2>
              </div>

              <Tab.Container id="projects" defaultActiveKey="first">
                <Nav variant="pills" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link eventKey="IronDOC" onClick={clickHandler}>
                      IronDOC
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Who Won" onClick={clickHandler}>
                      Who Won
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="IronShark" onClick={clickHandler}>
                      IronShark
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <ProjectCard cardName={cardName} />
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
