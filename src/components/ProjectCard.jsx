import React from "react";
import { Tab, Card } from "react-bootstrap";
import ironLogo from "../assets/ironlogo.png";
import whoWonLogo from "../assets/whowon.png";
import ironSharkLogo from "../assets/ironsharklogo.png";

const ProjectCard = (props) => {
  const projectsArray = [
    {
      title: "IronDOC",
      content: "First done project done,using HTML,CSS and Javascript",
      demo: "https://irondoc.netlify.app/",
      repo: "https://github.com/iverson838/irondoc-2022",
      eventKey: "IronDOC",
      logo: ironLogo,
    },
    {
      title: "Who Won",
      content: "Back-End project, using NodeJS, Mongoose and Handlebars",
      demo: "https://who-won.onrender.com/",
      repo: "https://github.com/iverson838/whowon",
      eventKey: "Who Won",
      logo: whoWonLogo,
    },
    {
      title: "IronShark",
      content: "Full-Stack aplicaton, using React, NodeJS and Mongoose",
      demo: "https://iron-shark.netlify.app/",
      repo: "https://github.com/iverson838/ironShark",
      eventKey: "IronShark",
      logo: ironSharkLogo,
    },
  ];
  const { cardName } = props;

  const cardData = projectsArray.filter((card) => card.title === cardName);

  return (
    <Tab.Pane eventKey={cardData[0].eventKey}>
      <Card
        style={{
          width: "30rem",
          height: "20rem",
          margin: "30px auto",
        }}
      >
        <Card.Body
          style={{
            backgroundImage: `url(${cardData[0].logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "130%",
          }}
        >
          <Card.Text style={{ color: "white" }}>
            {cardData[0].content}
          </Card.Text>
          <Card.Link href={cardData[0].demo}>
            <button className="button-card">Demo</button>
          </Card.Link>
          <Card.Link href={cardData[0].repo}>
            <button className="button-card">Repository</button>
          </Card.Link>
        </Card.Body>
      </Card>
    </Tab.Pane>
  );
};

export default ProjectCard;
