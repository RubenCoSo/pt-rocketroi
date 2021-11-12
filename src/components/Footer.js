import React from "react";
import { Col, Container, Image, Row, ListGroup } from "react-bootstrap";
import KibusWhiteLogo from "../Images/iPhone 11 Pro /Group 71.png";
import Facebook from "../Images/facebook.png";
import Instagram from "../Images/instagram.png";
import YouTube from "../Images/youtube.png";
import MetodosPago from "../Images/Group 64.png";

export default function Footer() {
  return (
    <div className="footerBack">
      <Container className="footer">
        <Col className="logo">
          <Row>
            <Image className="KibusWhiteLogo" src={KibusWhiteLogo} />
          </Row>
          <Row>
            <h2 className="kibusL">Sobre KIBUS</h2>
          </Row>
          <Row>
            <p className="kibusS">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </Row>
        </Col>
        <Col>
          <Row></Row>
          <Row>
            <ListGroup>
              <ListGroup.Item className="footerListItems">
                <h2 className="kibusL">Políticas</h2>
              </ListGroup.Item>
              <ListGroup.Item className="footerListItems">
                <p className="kibusS">Políticas de Privacidad</p>
              </ListGroup.Item>
              <ListGroup.Item className="footerListItems">
                <p className="kibusS">Condiciones de uso</p>
              </ListGroup.Item>
              <ListGroup.Item className="footerListItems">
                <p className="kibusS">Cookies</p>
              </ListGroup.Item>
              <ListGroup.Item className="footerListItems">
                <p className="kibusS">FAQ</p>
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </Col>
        <Col>
          <Image className="Facebook" src={Facebook} />
        </Col>
        <Col>
          <Image className="Instagram" src={Instagram} />
        </Col>
        <Col>
          <Image className="YouTube" src={YouTube} />
        </Col>
        <Col className="pagos">
          <Row>
            <h2 className="kibusL">Métodos de pago</h2>
          </Row>
          <Row>
            <Image className="MetodosPago" src={MetodosPago} />
          </Row>
        </Col>
      </Container>
    </div>
  );
}
