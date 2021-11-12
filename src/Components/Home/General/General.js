import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './general.css';
import pic1 from './carousel-1.jpg'
// import pic2 from './icons8-owl-64.svg'
// import pic3 from './icons8-eyes-cartoon-64.svg'
import pic4 from './icons8-owl-64_1_.svg'
// import pic5 from './vitae-london-8BOZ2TxO2lQ-unsplash.jpg'
// import pic6 from './hunters-race--SDgOlirIaY-unsplash.jpg'
import pic7 from './HORSEBIT-LEATHER-W-MODEL_DPS-e1427482122685.jpg'
import pic8 from './icons8-watch-64(1).png'
const General = () => {
    return (
        <div>
            <Container fluid className='general'>
                {/* carousel and text section */}
                <Row>
                    <Col xs={12} md={6} className='text-bg order-md-2 order-1'><div data-aos="fade-up-right" className='text-ceter mt-5 pt-5 '>
                        <h2 className='fs-1 fw-bold '> <img src={pic4} alt="" className='fil' /> We are Watching You <img src={pic8} alt="" className='' />!!!</h2>
                        <Row className='ms-3'>
                            <Col xs={12} md={6}><p className='text-start'>Bringing forward a collection with an aesthetic appeal for a broad market while ensuring exceptional results is a challenge for any organization. Riva Precision provides a systematic approach to creating timeless designs that are consistently reproduced through the company’s in-house capabilities. </p></Col>
                            <Col xs={12} md={6}><p className='text-start'>This is only the beginning of what makes Riva the right choice—the trusted choice—as a business partner. The world’s leading jewelry retailers have worked with Riva Precision for over two decades because they demand the exceptional results that only a global leader in jewelry manufacturing can provide.
                            </p></Col>
                        </Row>
                    </div></Col>
                    <Col xs={12} md={6} className=' order-md-1 order-2'>
                        {/* carousel  */}
                        <Carousel className='Carousel'>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 CarouselImg"
                                    src={pic1}
                                    alt="First slide"

                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 CarouselImg"
                                    src={pic7}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 CarouselImg"
                                    src="https://images.unsplash.com/photo-1523268755815-fe7c372a0349?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default General; <Container fluid className='greeting'>
    {/* top banner text */}
    <Row>
        <Col xs={12} md={6} className=' order-md-1'><div data-aos="fade-up-right" className='text-ceter mt-5 pt-5 '>
            <h2 className='fs-1 fw-bold'>  We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet
                expert sets you up a scrumptious dinner utilizing the best and freshest ingredients.</h2>
        </div></Col>
        <Col xs={12} md={6} className=' order-sm-1 order-md-2'>
            {/* carousel  */}
            <Carousel className='Carousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 CarouselImg"
                        src="https://images.unsplash.com/photo-1517463700628-5103184eac47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHdlYXJpbmclMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                        alt="First slide"

                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 CarouselImg"
                        src="https://images.unsplash.com/photo-1577219492769-b63a779fac28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZWZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 CarouselImg"
                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGNoZWZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Col>
    </Row>
</Container>