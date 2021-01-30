import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <Container className="chatapp">
        <Row>
          <Col xs={4} className="m-0 p-0">
            <Sidebar />
          </Col>
          <Col xs={8} className="m-0 p-0">
            <Chat />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
