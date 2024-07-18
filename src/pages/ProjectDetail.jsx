/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "../pages/style.css";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import projects from "../data/ProyectData";

function ProjectDetail() {
  const { index } = useParams();
  const project = projects[parseInt(index, 10)];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail-container">
      <Header />
      <Card className="project-card-view2">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src={project.images[0]}
              alt="card-img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src={project.images[1]}
              alt="card-img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src={project.images[2]}
              alt="card-img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src={project.images[3]}
              alt="card-img"
            />
          </Carousel.Item>
          {project.title !== "Countries Web - SPA" && (
            <Carousel.Item>
              <img
                className="d-block w-100 small-image"
                src={project.images[4]}
                alt="card-img"
              />
            </Carousel.Item>
          )}
        </Carousel>

        <Card.Body>
          <Card.Title className="project-detail-title">
            {project.title}
          </Card.Title>
          <Card.Title style={{ textAlign: "justify" }}>
            {project.typeProyect}
          </Card.Title>
          <Card.Text className="project-detail-description">
            {project.description}
          </Card.Text>
          <div className="project-detail-buttons">
          <Button
          className="viewbtn"
          variant="primary"
          href={project.link}
          target="_blank"
        >
          View
        </Button>
          </div>
        </Card.Body>

        
      </Card>
    </div>
  );
}

export default ProjectDetail;
