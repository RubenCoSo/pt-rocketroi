import React from "react";
import { Col, Container, Image, Row, ListGroup } from "react-bootstrap";
import KibusWhiteLogo from "../Images/iPhone 11 Pro /Group 71.png";
import Facebook from "../Images/facebook.png";
import Instagram from "../Images/instagram.png";
import YouTube from "../Images/youtube.png";
import MetodosPago from "../Images/Group 64.png";

export default function Footer() {
  return (
    <Container>
      <Col>
        <Row>
          <Image src={KibusWhiteLogo} />
        </Row>
        <Row>
          <h2 className="kibusL">Sobre KIBUS</h2>
        </Row>
        <Row>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </Row>
      </Col>
      <Col>
        <Row>
          <Image src={KibusWhiteLogo} />
        </Row>
        <Row>
          <h2 className="kibusL">Políticas</h2>
        </Row>
        <Row>
          <ListGroup>
            <ListGroup.Item>
              <p>Políticas de Privacidad</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Condiciones de uso</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Cookies</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>FAQ</p>
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Col>
      <Col>
        <Row>
          <Image src={Facebook} />
        </Row>
        <Row>
          <Image src={Instagram} />
        </Row>
        <Row>
          <Image src={YouTube} />
        </Row>
      </Col>
      <Col>
        <Row>
          <h2 className="kibusL">Métodos de pago</h2>
        </Row>
        <Row>
          <Image src={MetodosPago} />
        </Row>
      </Col>
    </Container>
  );
}
