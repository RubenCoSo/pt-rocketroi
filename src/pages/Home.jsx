import React from "react";
import TopBar from "../components/TopBar";
import FirstSection from "../components/FirstSection";
import ProductSelection from "../components/ProductSelection";
import ProductPresentation from "../components/ProductPresentation";
import ProductSpecs from "../components/ProductSpecs.js";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMobile = useMediaQuery({ query: `(max-width: 414px)` });
  return (
    <Container>
      <TopBar isMobile={isMobile} />
      <FirstSection isMobile={isMobile} />
      <ProductSelection />
      <ProductPresentation />
      <ProductSpecs />
      <Footer />
    </Container>
  );
}
