import React from "react";
import Slide1 from "../Images/slider-kibus-1.jpg";
import Slide2 from "../Images/slider-kibus-2.jpg";
import Slide3 from "../Images/slider-kibus-3.jpg";
import Slide4 from "../Images/slider-kibus-4.jpg";
import circleArrow from "../Images/Arrow - Right Circle.png";

import { Carousel, Col, Container, Row, Button, Image } from "react-bootstrap";

export default function ProductPresentation() {
  return (
    <Container className="productPres">
      <Col>
        <div>
          <Carousel className="carouselBack">
            <Carousel.Item>
              <img className="carouselImages" src={Slide1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carouselImages" src={Slide2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carouselImages" src={Slide3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carouselImages" src={Slide4} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </Col>

      <Col className="productPressTxt">
        <Row>
          <h1 className="kibusXl">
            Mejor para ellos, más fácil y cómodo para ti
          </h1>
        </Row>
        <Row>
          <p className="kibusS">
            Con Kibus, nunca tendrás que preocuparte de cómo ofrecer una dieta
            sana y natural a tu perro de forma cómoda y rápida. Nuestro
            dispositivo cocina automáticamente la cantidad exacta en cada comida
            e incluso lo puedes programar a través de la app. Tu perro
            disfrutará comida de casera de primera calidad, con el mínimo
            esfuerzo.
          </p>
        </Row>
        <Row className="productbtns">
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
    </Container>
  );
}
