import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductAdd() {
    // Khai bao cac bien chua du lieu cho cac doi tuong tren Form
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:9999/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                price: parseInt(price),
                discountPercentage: parseInt(discount),
                description: description
            })
        })
            .then(res => res.json())
            .then(console.log);
        
        window.location.href = '/';
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h2 style={{ textAlign: 'center' }}>Add new Product - Form</h2>
                </Col>
            </Row>
            <Row>
                <Link to={'/'}>Back to Home</Link>
                <Form onSubmit={e => handleSubmit(e)}>
                    <label>Title</label>
                    <input placeholder="Enter title" onChange={e => setTitle(e.target.value)}/><br></br>
                    <label>Price</label>
                    <input placeholder="Enter price" onChange={e => setPrice(e.target.value)}/><br></br>
                    <label>Discount</label>
                    <input placeholder="Enter discount" onChange={e => setDiscount(e.target.value)}/><br></br>
                    <label>Description</label>
                    <input placeholder="Enter description" onChange={e => setDescription(e.target.value)}/><br></br>
                    <input type="submit" value="Create" />
                </Form>
            </Row>
        </Container>
    );
}