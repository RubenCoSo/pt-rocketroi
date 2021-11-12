import React from "react";
import Device from "../Images/Group 69.png";
import Program from "../Images/programable/programable icon.png";
import Agua from "../Images/programable/Group 62.png";
import Cantidad from "../Images/programable/cantidad personalizable.png";
import Historial from "../Images/programable/function.png";
import FacilUso from "../Images/programable/Fácil de usar y lavar.png";
import App from "../Images/programable/App para iOS y Android.png";
import { Col, Container, Row, ListGroup, Image } from "react-bootstrap";

export default function ProductSpecs() {
  return (
    <Container className="productSpecs">
      <Col>
        <ListGroup>
          <ListGroup.Item>
            <h2 className="kibusL">
              <Image className="specImg" src={Program} />
              Programmable 24h
            </h2>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2 className="kibusL">
              <Image className="specImg" src={Agua} />
              Agua siempre disponible
            </h2>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2 className="kibusL">
              <Image className="specImg" src={Cantidad} />
              Cantidad personalizable
            </h2>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2 className="kibusL">
              <Image className="specImg" src={Historial} />
              Histórial de las comidas
            </h2>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2 className="kibusL">
              <Image className="specImg" src={FacilUso} />
              Fácil de usar y lavar
            </h2>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2 className="kibusL">
              <Image className="specImg" src={App} />
              App para iOS y Android
            </h2>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
        <Image className="dvcImg" src={Device} />
      </Col>
    </Container>
  );
}
