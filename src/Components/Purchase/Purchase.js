import React, { useEffect, useState } from 'react';
import './Purchase.css'
import { Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Rating from 'react-rating';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Purchase = () => {
    const { register, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ghori, setghori] = useState({})
    // const { user } = useAuth();
    const { id } = useParams();


    const onSubmit = data => {
        reset('');
        console.log(data)
        // data.site = siteData;
        // data.orderStatus = 'Pending';
        // axios.post('https://enigmatic-earth-69756.herokuapp.com/order', data).then(res => res.data.insertedId ? handleShow() : '')

    }
    useEffect(() => {
        fetch(`http://localhost:7000/watch/${id}`).then(res => res.json()).then(data => setghori(data))
    }, [id])


    return (

        <Container fluid style={{
            background: `url("${ghori?.Img}") no-repeat center center/cover`,
        }} className='detail' >
            <div className='bg'></div>
            <Row xs={1} md={3} className="g-4 py-5">

                <Col>
                    <Card className='cards bg-card box'>
                        <Card.Img variant="top" src={ghori?.Img} className='img-fluid my-3' />

                    </Card>
                </Col>

                <Col>
                    <Card className='cards bg-card box'>
                        <Card.Body>
                            <Card.Title >{ghori?.Model}</Card.Title>
                            <Card.Text>{ghori?.Feature}</Card.Text>
                            <Card.Text>{ghori?.Brand} {ghori?.Color}</Card.Text>
                            <Card.Text className='text-start'>{ghori?.description}</Card.Text>
                            <Card.Text className='fs-4'>{ghori?.Warranty}</Card.Text>
                            <Rating
                                readonly
                                initialRating={ghori?.star}
                                emptySymbol='far fa-star text-warning'
                                fullSymbol='fas fa-star text-warning'
                            ></Rating>
                            <Card.Text className='fs-3 fw-bold text-bg'>$ {ghori?.Price}</Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='cards bg-card box'>
                        <Card.Body>
                            <form className='order mt-5' onSubmit={handleSubmit(onSubmit)}>
                                <h2 className='text-center mt-5  fw-bold'> Buy Today!!!</h2>

                                <input required placeholder='name' defaultValue={'user.displayName'} className='reservation w-100' {...register("name")} />
                                <input required placeholder='email' defaultValue={'user.email'} className='reservation w-100'{...register("email")} />
                                <input required placeholder='adrress' className='reservation w-100'{...register("adrress")} />
                                <input required placeholder='phone' className='reservation w-100'{...register("phone")} />

                                <input className='reservation w-100 bg-danger text-bg' type="submit" />
                            </form>


                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </Container >
    );
};

export default Purchase;