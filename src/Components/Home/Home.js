import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import useReviewLoad from '../DataLoads/reviewLoad';
import useWatchData from '../DataLoads/watchData';
import Header from '../Header/Header';
import General from './General/General';
import HomeProduct from './HomeProduct/HomeProduct';
import review from './icons8-review-58.png'
import review1 from './icons8-review-60.png'
import Slider from "react-slick";
import './home.css'
const Home = () => {
    const [watches] = useWatchData();
    const [reviewData] = useReviewLoad();
    // console.log(reviewData)
    const homeData = watches.slice(0, 6);

    // slider setting
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <General></General>
            <HomeProduct data={homeData}></HomeProduct>
            <Container fluid className='homeProd pt-5 '>
                <h2 className='text-bg'><img src={review1} alt="" className='' />Reviews<img src={review} alt="" className='' /></h2>
                <hr className='mx-auto w-25 bg-white' />
                <Slider {...settings} >
                    {reviewData.map(data => (

                        <Card key={data._id} className='border-0 p-2 cards bg-card  w-75' style={{ width: '' }}>
                            <div className='image-box'>
                                <Card.Img variant="top" src={data.img} className='img-fluid img1 px-5' />
                            </div>
                            <Card.Body className='reviw mt-5 pt-5 h-50'>
                                <Card.Title className='text-left fw-bold'>{data.name}</Card.Title>
                                <Card.Text className='fs-5'>
                                    {data.descript.slice(0, 90)}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    ))}
                </Slider>
            </Container>
        </>
    );
};

export default Home;