/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "../pages/style.css";
import { useNavigate } from "react-router-dom";

function ProjectCard(props) {

  const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory
  const handleCardClick = (index) => {
    navigate(`/project/${index}`); // Usa navigate para redirigir
  };
  
  return (
    <Card className="project-card-view">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={props.imgPath1} alt="card-img" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.imgPath2} alt="card-img" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.imgPath3} alt="card-img" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.imgPath4} alt="card-img" />
        </Carousel.Item>
        {props.title != "Countries Web - SPA" && (
          <Carousel.Item>
            <img
              className="d-block w-100 small-image"
              src={props.imgPath5}
              alt="card-img"
            />
          </Carousel.Item>
        )}
      </Carousel>

      <Card.Body>
      <div onClick={() => handleCardClick(props.index)} style={{ cursor: 'pointer' }}>
    <Card.Title>{props.title}</Card.Title>
  </div>
        <Card.Title style={ {textAlign:"justify" }}>{props.typeProyect}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* <Button
          className="viewbtn"
          variant="primary"
          href={props.ghLink}
          target="_blank"
        >
          View
        </Button>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            {"Demo"}
          </Button>
        )} */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
