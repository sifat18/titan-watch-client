import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router'
import { loadStripe } from '@stripe/stripe-js';
import CheckOut from './CheckOut';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51KFaKtEEa7afSIMyBSyWarMTYy3YudrLaaCXevl3MqCVLgkFSjK7OdewO1ouR56hCoLCPIJNPV2JxoaQv6v09kx7003h5CDiSv')
const Pay = () => {
    const { appId } = useParams()
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`https://vast-everglades-95998.herokuapp.com/order/${appId}`).then(res => res.json()).then(data => setOrder(data))
    }, [appId])
    return (
        // payment section
        <Container>
            <h2 data-aos="zoom-in" className='text-center'>Payment of ${order?.item?.Price} </h2>
            <Elements stripe={stripePromise}>
                <CheckOut info={order} />
            </Elements>
        </Container>
    );
};

export default Pay;