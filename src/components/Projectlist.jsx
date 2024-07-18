import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate en lugar de useHistory
import ProjectCard from "./Projectcard";
import ProjectCardMobile from "./ProyectCardsMobile";
import { Container, Row, Col } from "react-bootstrap";
import projects from "./../data/ProyectData";
import "../pages/style.css";

function Projectlist() {
  const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory

 
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="project-card" >
              {index === 0 ? (
                <ProjectCardMobile
                  imgPath1={project.images[0]}
                  imgPath2={project.images[1]}
                  imgPath3={project.images[2]}
                  imgPath4={project.images[3]}
                  imgPath5={project.images[4]}
                  isBlog={false}
                  title={project.title }
                  typeProyect={project.typeProyect}
                  index={index}
                />
              ) : (
                <ProjectCard
                  imgPath1={project.images[0]}
                  imgPath2={project.images[1]}
                  imgPath3={project.images[2]}
                  imgPath4={project.images[3]}
                  imgPath5={project.images[4]}
                  isBlog={false}
                  title={project.title}
                  typeProyect={project.typeProyect}
                  index={index}
                />
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projectlist;
