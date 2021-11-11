import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './homeProduct.css'
import pic1 from './icons8-watch-64.png'
import pic2 from './icons8-return-purchase-64.png'
const HomeProduct = ({ data }) => {
    return (
        <Container fluid className='homeProd pt-5 '>
            <h2 className='text-bg text-center'>Collections<img src={pic1} alt="" className='' /></h2>
            <hr className='mx-auto w-25 bg-white' />
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {data.map(product => (
                        <Col key={product._id}>
                            <Card className="text-center cards bg-card h-100">
                                <div className="image-box">
                                    <Card.Img variant="top" src={product.Img} className="img1" />
                                </div>
                                <Card.Header>{product.Feature}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{product.Model}</Card.Title>
                                    <Card.Title>Brand- {product.Brand}</Card.Title>
                                    <Card.Text>{product.description.slice(0, 102)} </Card.Text>
                                    <NavLink to={`/watch/${product._id}`} className='text-decoration-none text-warning'> Purchase <img src={pic2} alt="" height='30' width='30' /></NavLink>
                                </Card.Body>
                                <Card.Footer className="text-muted fs-2 fw-bold">Price: ${product.Price}</Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </Container>
    );
};

export default HomeProduct;