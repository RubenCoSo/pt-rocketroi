import React from "react";
import KibusLogo from "../Images/Group.png";
import { Col, Container, Image, Navbar } from "react-bootstrap";

export default function TopBar(props) {
  return (
    <Container>
      <Col>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <Image src={KibusLogo} className="kibusLogo" alt="kibus logo" />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Col>
    </Container>
  );
}
