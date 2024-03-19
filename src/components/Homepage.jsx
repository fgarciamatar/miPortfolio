import { Container, Row, Col } from "react-bootstrap";
import Text from "../components/Text";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../pages/style.css";

function Home() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">I am Fancisco Garcia Matar</h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open("https://github.com/fgarciamatar");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/francisco-garc%C3%ADa-matar-085467264/"
                );
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
