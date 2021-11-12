import React from "react";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import DogAndOwner from "../Images/imagen.png";
import circleArrow from "../Images/Arrow - Right Circle.png";

export default function FistSection(props) {
  return (
    <Container className="firstSection">
      <Col>
        <Row className="fsTitle">
          <p className="kibusXXL">
            Alimentar bien a tu perro es más fácil que nunca
            <b className="dot">.</b>
          </p>
        </Row>
        <Row className="fsSubtitle">
          <h2 className="kibusL">
            La nueva alimentación canina ha llegado. Con Kibus, podrás ofrecer a
            tu compañero comida sana, rica y recién cocinada de una forma fácil
            y cómoda
          </h2>
        </Row>
        <Row>
          <Button className="btnReserva">
            <p className="kibusBTN">Reserva Ahora</p>
          </Button>
          <Button className="btnMasInfo">
            <p className="kibusBTN">
              Quiero Saber Más <Image className="arrow" src={circleArrow} />
            </p>
          </Button>
        </Row>
      </Col>
      <Col>
        <Image className="fsImage" src={DogAndOwner} />
      </Col>
    </Container>
  );
}
