import { useEffect, useState } from 'react';
import { Col, Container, Row, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Product() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // Goi API tai URL: https://dummyjson.com/products
        fetch("http://localhost:9999/products")
            .then(res => res.json())
            .then(data => {
                if(search.length == 0)
                    setProducts(data);
                else
                    setProducts(data.filter(p=>p.title.startsWith(search)));
            });
    }, [search]);

    // console.log(products);

    return (
        <Container fluid>
            <Row style={{marginBottom:'15px', textAlign:'center'}}>
                <Col>
                    <input 
                        placeholder="Enter title to search ..."
                        style={{lineHeight:'30px', width:'50%', borderRadius:"5px", fontSize:'20px'}}
                        onChange={e=>setSearch(e.target.value)}
                        />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to={'/products/add'}>Add new</Link>
                </Col>
            </Row>
            <Row>
                {
                    products.map(p => (
                        <Col xs={12} sm={6} md={4} lg={3} style={{marginBottom: '30px'}} key={p.id}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={p.thumbnail} style={{height:"150px"}}/>
                                <Card.Body>
                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Text>
                                        {p.description.substring(0, 45)+' ...'}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Price: {p.price}</ListGroup.Item>
                                    <ListGroup.Item>Discount percentage: {p.discountPercentage}</ListGroup.Item>
                                    <ListGroup.Item>Rating: {p.rating}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Details</Card.Link>
                                    <Card.Link href="#">Add to cart</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }

            </Row>
        </Container>
    );
}