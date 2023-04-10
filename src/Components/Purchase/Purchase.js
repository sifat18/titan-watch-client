import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../Context/useAuth';
import './Purchase.css';
const Purchase = () => {
    const { register, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ghori, setghori] = useState({})
    const { user } = useAuth();
    const { id } = useParams();

    // sending order data to db
    const onSubmit = data => {
        reset('');
        console.log(data)
        data.item = ghori;
        data.orderStatus = 'Pending';
        axios.post('https://titanserver.onrender.com/order', data).then(res => res.data.insertedId ? handleShow() : '')

    }
    // single data load based on id
    useEffect(() => {
        fetch(`https://titanserver.onrender.com/watch/${id}`).then(res => res.json()).then(data => setghori(data))
    }, [id])


    return (

        <Container fluid style={{
            background: `url("${ghori?.Img}") no-repeat center center/cover`,
        }} className='detail' >
            <div className='bg'></div>
            <Row data-aos="fade-up-left" xs={1} md={3} className="g-4 py-5">

                <Col>
                    <Card className='cards bg-card box'>
                        <Card.Img variant="top" src={ghori?.Img} className='img-fluid my-3' />

                    </Card>
                </Col>

                <Col>
                    <Card className='cards bg-card box'>
                        <Card.Body>
                            <Card.Title className='text-center'>{ghori?.Model}</Card.Title>
                            <Card.Text className='text-center'>{ghori?.Feature}</Card.Text>
                            <Card.Text className='text-center'>{ghori?.Brand} {ghori?.Color}</Card.Text>
                            <Card.Text className='text-start'>{ghori?.description}</Card.Text>
                            <Card.Text className='fs-4 text-center'>{ghori?.Warranty}</Card.Text>
                            <Card.Text className='text-center'>
                                <Rating
                                    readonly
                                    initialRating={ghori?.star}
                                    emptySymbol='far fa-star  text-warning'
                                    fullSymbol='fas fa-star text-warning'
                                ></Rating>
                            </Card.Text>
                            <Card.Text className='fs-3 text-center fw-bold text-bg'>$ {ghori?.Price}</Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='cards bg-card box'>
                        <Card.Body>
                            <form className='order mt-5' onSubmit={handleSubmit(onSubmit)}>
                                <h2 className='text-center mt-5  fw-bold'> Buy Today!!!</h2>

                                <input required placeholder='name' defaultValue={user.displayName} className='reservation w-100' {...register("name")} />
                                <input required placeholder='email' defaultValue={user.email} className='reservation w-100'{...register("email")} />
                                <input required placeholder='adrress' className='reservation w-100'{...register("adrress")} />
                                <input required placeholder='phone' className='reservation w-100'{...register("phone")} />

                                <input className='reservation w-100 bg-danger text-bg' type="submit" />
                            </form>


                        </Card.Body>
                    </Card>
                </Col>


            </Row>

            {/* modal after submit form */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>WOOHOOOO</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your Order has been placed</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Thank You!
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container >
    );
};

export default Purchase;