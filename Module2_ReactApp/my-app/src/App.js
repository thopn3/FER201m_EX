import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product";

function App() {
  return (
    <Container>
        {/* Header */}
        <Row>
            <Col>
                <h2>Header</h2>
            </Col>
        </Row>
        {/* Content */}
        <Row>
            <Col>
                <Product/>
            </Col>
        </Row>
        {/* Footer */}
        <Row>
            <Col>
                <h2>Footer</h2>
            </Col>
        </Row>
    </Container>
  );
}

export default App;
