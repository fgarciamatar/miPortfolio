import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import "../pages/style.css";

function Contactpage() {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const serviceId = "service_dg954hk";
    const templateId = "template_7vu5qdr";
    const apiKey = "ufjERM2XH8YffiMml";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => {
        console.log(result.text);
        refForm.current.reset();
      })
      .catch((error) => console.error(error));

    swal({
      title: "Mensaje Enviado",
      icon: "success",
      button: "Aceptar",
      timer: 3000,
    });
  };

  return (
    <div className="contactbackground">
      <Container className="py-5">
        <Form ref={refForm} onSubmit={handleSubmit} className="containerContact">
          <div>
            <h2 className="contactame">Contact me at</h2>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="labelContact">Name:</Form.Label>
            <Form.Control
              className="inputs"
              name="name"
              type="text"
              placeholder="Ej: Juan Perez"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label className="labelContact" name="email">
              Email:
            </Form.Label>
            <Form.Control
              className="inputs"
              name="email"
              id="email"
              type="email"
              placeholder="Ej: juanP@gmail.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="labelContact">Message:</Form.Label>
            <Form.Control
              className="inputs"
              as="textarea"
              rows={3}
              placeholder="Escribe tu mensaje..."
              name="message"
            />
          </Form.Group>
          <button className="contactBoton">Send</button>
          <h3 className="email">Email: fgarciamatar@gmail.com</h3>
        </Form>
        <Container>
          <span></span>
          <p className="copyright">
            © Copyright 2023
            <hr />
          </p>
        </Container>
      </Container>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      ></div>
    </div>
  );
}

export default Contactpage;
