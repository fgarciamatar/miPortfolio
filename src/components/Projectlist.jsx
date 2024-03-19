import ProjectCard from "../components/Projectcard";
import ProjectCardMobile from "../components/ProyectCardMobile"
import { Container, Row, Col } from "react-bootstrap";
import amc1 from "./../Assets/images/amc 1.jpg";
import amc2 from "./../Assets/images/amc (2).jpg";
import amc3 from "./../Assets/images/amc (3).jpg";
import amc4 from "./../Assets/images/amc (4).png";
import amc5 from "./../Assets/images/amc (5).png";
import countries1 from "./../Assets/images/countries1.png";
import countries2 from "./../Assets/images/countries2.png";
import countries3 from "./../Assets/images/countries3.png";
import countries4 from "./../Assets/images/countries4.png";
import ram1 from "./../Assets/images/ram 1.png";
import ram2 from "./../Assets/images/ram 1.png";
import ram3 from "./../Assets/images/ram 1.png";
import ram4 from "./../Assets/images/ram 1.png";
import ram5 from "./../Assets/images/ram 1.png";
import tuBar1 from "./../Assets/images/TuBar1.jpg"
import tuBar2 from "./../Assets/images/TuBar2.jpg"
import tuBar3 from "./../Assets/images/TuBar3.jpg"
import tuBar4 from "./../Assets/images/TuBar4.jpg"
import tuBar5 from "./../Assets/images/TuBar5.jpg"

import "../pages/style.css";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCardMobile
                imgPath1={tuBar1}
                imgPath2={tuBar2}
                imgPath3={tuBar3}
                imgPath4={tuBar4}
                imgPath5={tuBar5}
                isBlog={false}
                title="Tu Bar - Sist. de Gestion de Bares"
                description="
                ● Implementar login y signUp con validaciones en Front utilizando js y guardar Token de acceso con Async Storage.
                ● Estilar interfaz con Tamagui.
                ● Codificar todas las vistas de la aplicación y sus funcionalidades con React Native.
                ● Implementar perfiles de Administrador, Camarero, Cocinero y Pantalla, restringir acceso con Token.
                ● Traer datos de Mesas, Perfiles, Menú, productos, categorías y Facturas de la BDD y manejarlos a través de estados globales
                en Redux.
                ● Realizar peticiones Post, Get, Put, Delete y Patch con Axios.
                ● Desarrollar un panel de administración que permita a los administradores gestionar productos, perfiles y facturas utilizando
                React Native y manejo del estado global con Redux.
                ● Flujo de Trabajo con Git Flow
                Tecnologías utilizadas: Front-end: React Native, Redux, Tamagui."
                ghLink="https://www.linkedin.com/feed/update/urn:li:activity:7173717417938796545/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath1={amc1}
                imgPath2={amc2}
                imgPath3={amc3}
                imgPath4={amc4}
                imgPath5={amc5}
                isBlog={false}
                title="AMC-Amoblamientos - Ecommerce"
                description="Proyecto grupal llevado a cabo como parte del programa de formación en Henry.
                ● Implementación de un carrito de compras funcional (React, Redux, Express , LocalStorage).
                ● Implementación de interfaz web con bootstrap,
                ● Codificación de todas las vistas de la aplicación y sus funcionalidades con React.
                ● Manejo del servidor NodeJs con Express como framework y Sequelize para traer y guardar en la BDD realizada con
                postgresql, los usuarios ,productos y ventas.
                ● Control de formularios tanto en el Front con React como en el Back por medio de Express y Sequelize.
                ● Integración de una pasarela de pagos a través de Mercado Pago.
                ● Garantizar la persistencia de datos mediante LocalStorage.
                ● Gestión eficiente del control de stock.
                ● Desarrollo de un panel de administración que permite a los administradores gestionar productos, usuarios y ventas a través de
                React y el manejo del estado global con Redux .
                Tecnologías utilizadas: Front-end: React, Redux, Bootstrap.
                Back-end: Node.js , Express y base de datos implementada en PostgreSQL con Sequelize como ORM."
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
                title="Countries Web - SPA"
                description="Proyecto llevado a cabo como parte del programa de formación en Henry.
                ● Creación de una SPA que usa React y CSS puro en el cliente para buscar información en la API de diferentes países.
                ● Codificación de todas las vistas de la aplicación y sus funcionalidades con React.
                ● Manejo de estados globales a través de Redux para ordenar y filtrar los países.
                ● Manejo del servidor NodeJs con Express como framework y Sequelize para traer y guardar en la BDD,realizada con
                Postgresql, los países, usuarios y actividades que se crean.
                ● Control de formularios tanto en el Front por React i javascript como en el Back por medio de Express y Sequelize.
                ● Estilos codeados con CSS puro.
                Tecnologías utilizadas: Front-end: React, Redux, HTML, CSS.
                Back-end: Node.js , Express y base de datos implementada en PostgreSQL con Sequelize como ORM."
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
                title="Rick And Morty App - SPA"
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
