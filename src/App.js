import "./App.css";
import { Switch, Route } from "react-dom";
import * as PATHS from "./utils/paths";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className="App">
      <Home />
    </Container>
  );
}

export default App;
