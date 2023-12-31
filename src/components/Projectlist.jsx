import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import amc1 from "./../Assets/images/amc 1.jpg";
import amc2 from "./../Assets/images/amc (2).jpg";
import amc3 from "./../Assets/images/amc (3).jpg";
import amc4 from "./../Assets/images/amc (4).png";
import amc5 from "./../Assets/images/amc (5).png";
import countries1 from "./../Assets/images/countries1.png"
import countries2 from "./../Assets/images/countries2.png"
import countries3 from "./../Assets/images/countries3.png"
import countries4 from "./../Assets/images/countries4.png"
import ram1 from "./../Assets/images/ram 1.png"
import ram2 from "./../Assets/images/ram 1.png"
import ram3 from "./../Assets/images/ram 1.png"
import ram4 from "./../Assets/images/ram 1.png"
import ram5 from "./../Assets/images/ram 1.png"

import "../pages/style.css";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath1={amc1}
                imgPath2={amc2}
                imgPath3={amc3}
                imgPath4={amc4}
                imgPath5={amc5}
                isBlog={false}
                title="AMC-Amoblamientos"
                description="AMC-Amoblamientos representa un proyecto ecommerce desarrollado como parte del proyecto final del bootcamp 'Soy Henry'. Se emplearon tecnologías como React, Bootstrap, Node, Express.js y PostgreSQL. El proyecto abarca un carrito de compras , una pasarela de pagos mediante Mercado Pago, persistencia de datos, gestión de stock, registro de usuarios y un panel de administración que concede a los administradores supervisar productos, usuarios y ventas. Mis responsabilidades principales se centraron en el desarrollo del frontend, la implementación de estilos, la gestión del almacenamiento local, la creación del panel de control administrativo y algunas rutas en el backend."
                ghLink="https://msc-amoblamientos.vercel.app/home"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath1={countries1}
                imgPath2={countries2}
                imgPath3={countries3}
                imgPath4={countries4}
                imgPath5={countries1}
                isBlog={false}
                title="Countries Web -PI"
                description="Proyecto llevado a cabo como parte del programa de formación en Henry. Se trata de una SPA que está construida utilizando tecnologías como React y Redux en el Frontend para la gestión eficiente de estados, y módulos CSS para la gestión de estilos. La SPA contiene 300 tarjetas de países obtenidas a través de una API y guardadas en una BDD y se comunica con un Back End desarrollado en Node.js utilizando Express para gestionar las peticiones del cliente. La aplicación utiliza Sequelize para interactuar con una base de datos PostgreSQL. El usuario puede buscar un pais por nombre, filtrarlo y ordenarlo y crear una Actividad Turística."
                ghLink="https://github.com/fgarciamatar/PI-Countries"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath1={ram1}
                imgPath2={ram2}
                imgPath3={ram3}
                imgPath4={ram4}
                imgPath5={ram5}
                isBlog={false}
                title="Rick And Morty App"
                description="Creación de un prototipo de aplicación de página única (SPA) con el propósito de exhibir, buscar , marcar como favoritas , organizar y filtrar más de 800 tarjetas de personajes pertenecientes a la serie de televisión Rick and Morty. Tecnologías utilizadas: Front-end basado en React y Redux, Back-end desarrollado con Express y base de datos implementada en PostgreSQL con Sequelize como ORM."
                ghLink="https://github.com/fgarciamatar/Rick-and-Morty"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
