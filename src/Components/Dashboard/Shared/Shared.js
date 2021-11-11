import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useWatchData from '../../DataLoads/watchData';
import './share.css'
const Shared = () => {
    const [watches] = useWatchData()
    return (

        <Container className="shared mt-1">
            <Row className="g-3 ">
                <Col xs={12} md={6} >
                    <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 class="fs-2">{watches.length}</h3>
                            <p class="fs-5">Watches</p>
                        </div>
                        <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </Col>

                <Col xs={12} md={6} >
                    <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 class="fs-2">4920</h3>
                            <p class="fs-5">Sales</p>
                        </div>
                        <i
                            class="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </Col>

                <Col xs={12} md={6} >
                    <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 class="fs-2">3899</h3>
                            <p class="fs-5">Delivery</p>
                        </div>
                        <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </Col>

                <Col xs={12} md={6}  >
                    <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div>
                            <h3 class="fs-2">%25</h3>
                            <p class="fs-5">Increase</p>
                        </div>
                        <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default Shared;