import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import Pollo from "../Images/pollo.jpg";
import Salmon from "../Images/salmon.jpg";
import Cerdo from "../Images/cerdo.jpg";

export default function ProductSelection() {
  return (
    <div className="prodSelBack">
      <div className="productBox">
        <Container className="productSelection">
          <Col className="recipes">
            <Row className="recipesImages">
              <Image src={Pollo} />
            </Row>
            <Row className="kibusL">
              <h2>Pollo y Pimiento</h2>
            </Row>
            <Row>
              <p>Energética, con ingredientes antioxidantes</p>
            </Row>
          </Col>
          <Col className="recipes">
            <Row className="recipesImages">
              <Image src={Salmon} />
            </Row>
            <Row className="kibusL">
              <h2>Salmón y Arroz</h2>
            </Row>
            <Row>
              <p>Hipoalergénica, con Omega 3 y 6</p>
            </Row>
          </Col>
          <Col className="recipes">
            <Row className="recipesImages">
              <Image src={Cerdo} />
            </Row>
            <Row className="kibusL">
              <h2>Cerdo y Calabaza</h2>
            </Row>
            <Row>
              <p>Para dar vitalidad buena para el sistema inmune</p>
            </Row>
          </Col>
          <Col className="recipes">
            <Row className="recipesImages">
              <Image src={Pollo} />
            </Row>
            <Row>
              <Button className="btnReceta">Tu receta</Button>
            </Row>
            <Row>
              <p>Ayúdanos a decidir nuestra nueva receta</p>
            </Row>
          </Col>
        </Container>
      </div>
    </div>
  );
}
