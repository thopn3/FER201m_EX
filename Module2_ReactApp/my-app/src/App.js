import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from "./Product";
import ProductAdd from "./ProductAdd";

function App() {
    return (
        <BrowserRouter>
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
                        <Routes>
                            <Route path="/" element={<Product />} />
                            <Route path="/products" element={<Product />} />
                            <Route path="/products/add" element={<ProductAdd/>}/>
                        </Routes>
                    </Col>
                </Row>
                {/* Footer */}
                <Row>
                    <Col>
                        <h2>Footer</h2>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
