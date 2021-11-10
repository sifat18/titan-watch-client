import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './banner.css'
const Banner = () => {
    return (
        <Container fluid className=' banner-body'>
            <Container className='d-flex flex-column justify-content-center align-items-center  mt-5 pt-2'>
                <h2 className='text-bg'>what's ticking?</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam, ipsa laborum, dolorum ducimus temporibus vitae mollitia, eos inventore veritatis reiciendis? Ad et qui nihil repellendus sit molestiae perferendis quod?</p>
            </Container>
            {/* <img className='img-fluid my-4' src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdhdGNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" /> */}

            {/* <Row >
                <Col xs={12} md={6} >
                    <h2 className='text-bg'>what's ticking?</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam, ipsa laborum, dolorum ducimus temporibus vitae mollitia, eos inventore veritatis reiciendis? Ad et qui nihil repellendus sit molestiae perferendis quod?</p>
                </Col>
                <Col xs={12} md={6}>
                    <img className='img-fluid my-4' height='300' width='300' src="https://images.unsplash.com/photo-1622434641406-a158123450f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdhdGNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
                </Col>
            </Row> */}
            <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,245.3C384,224,480,160,576,128C672,96,768,96,864,117.3C960,139,1056,181,1152,170.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff " fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,85.3C384,128,480,224,576,240C672,256,768,192,864,154.7C960,117,1056,107,1152,133.3C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
            {/* <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="5" d="M0,128L34.3,122.7C68.6,117,137,107,206,128C274.3,149,343,203,411,202.7C480,203,549,149,617,112C685.7,75,754,53,823,74.7C891.4,96,960,160,1029,202.7C1097.1,245,1166,267,1234,240C1302.9,213,1371,139,1406,101.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg> */}
            {/* <svg className='wave ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,0L20,10.7C40,21,80,43,120,90.7C160,139,200,213,240,234.7C280,256,320,224,360,197.3C400,171,440,149,480,149.3C520,149,560,171,600,197.3C640,224,680,256,720,234.7C760,213,800,139,840,96C880,53,920,43,960,85.3C1000,128,1040,224,1080,245.3C1120,267,1160,213,1200,176C1240,139,1280,117,1320,101.3C1360,85,1400,75,1420,69.3L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg> */}
        </Container>
    );
};

export default Banner;