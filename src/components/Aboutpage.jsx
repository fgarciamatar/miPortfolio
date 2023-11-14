import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";
import fran from "./../Assets/images/Fran.jpg"
import "../pages/style.css";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              I'm a Full Stack web developer and Systems Engineering student
              (UTN-FRT), I'm curious to learn more about web and application
              development. Specialized in Front-end, Back-end. With creative
              thinking, problem solving, teamwork, autonomy, initiative and
              determination.
            </p>
            <p className="aboutdetails">
              {" "}
              Soy un desarrollador web Full Stack y estudiante de Ing en
              Sistemas (UTN-FRT) .Tengo curiosidad por aprender más sobre el
              desarrollo web y de aplicaciones. Especializado en Front-end,
              Back-end. Con pensamiento creativo, resolución de problemas,
              trabajo en equipo, autonomía ,iniciativa y determinación.
            </p>
            <div className="skillsContainer">
              <div className="skill--scroll">
                <Marquee
                  gradient={false}
                  speed={100}
                  pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="right"
                >
                  {skillsData.map((skill, id) => (
                    <div className="skill--box" key={id}>
                      <img
                        className="skill-image"
                        src={skillsImage(skill)}
                        alt={skill}
                      />
                      <p>{skill}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <img src={fran} alt=""  className="webimage"/>
            {/* <div className="webimage"></div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
