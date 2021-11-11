import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import ShowDelete from '../DeleteShow/ShowDelete';
const MyOrder = () => {
    const [productData, setproductData] = useState([])
    const [id, setid] = useState('')
    const [modifiid, setmodifiid] = useState(false)
    let count = 0;
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const { user } = useAuth();
    const getmodal = (id) => {
        setid(id)
        handleShow()

    }
    useEffect(() => {
        fetch(`https://vast-everglades-95998.herokuapp.com/order/${user.email}`).then(res => res.json()).then(data => setproductData(data))
    }, [modifiid])

    const handleremove = (id) => {
        axios.delete(`https://vast-everglades-95998.herokuapp.com/order/${id}`).then(res => {
            if (res.data) {
                const collect = productData.filter(product => product._id !== id)
                setproductData(collect);
                setmodifiid(false)
            }
        })
        handleClose()
    }

    return (
        <Container fluid className='pt-3   text-center allorderbg'>

            <h2 className='text-white fs-3 fw-bold text-center mb-3'> My Orders</h2>
            {!productData.length && <p className='green fs-3 fw-bold text-center mb-3'> You don't have any pending orders yet!!</p>}
            <Row xs={1} md={2} className="g-4" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                {productData.map(data =>
                    <Col>
                        <Card key={data?._id} className="text-center cards bg-card border-0 p-2">
                            <div className='image-box'>
                                <Card.Img variant="top" src={data?.item.Img} className='img-fluid img1' />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center fw-bold'>{data?.item.Model}</Card.Title>
                                {/* <Card.Text className=' fs-4'>{data?.site.descript.slice(0, 200)}</Card.Text> */}
                                <Card.Text className=' fs-3 fw-bold'>Cost ${data?.item.Price}</Card.Text>
                                <Button variant="warning" onClick={() => getmodal(data?._id)} className='text-dark fs-5 fw-bold'>Cancel Order</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                )}
            </Row>

            <ShowDelete
                show={show}
                id={id}
                handleClose={handleClose}
                handleremove={handleremove}
            ></ShowDelete>
        </Container>
    );
};

export default MyOrder;