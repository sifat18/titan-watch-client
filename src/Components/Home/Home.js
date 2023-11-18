import React from "react";
import { Card, Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import useReviewLoad from "../DataLoads/reviewLoad";
import useWatchData from "../DataLoads/watchData";
import Header from "../Header/Header";
import General from "./General/General";
// import HomeProduct from "./HomeProduct/HomeProduct";
import review from "./icons8-review-58.png";
import review1 from "./icons8-review-60.png";
import Slider from "react-slick";
import "./home.css";
import Rating from "react-rating";
import Product from "../Products/Product";
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <General></General>
      <Product data={homeData}></Product>
      <Container
        data-aos="fade-up-right"
        fluid
        className="homeProd pt-5 commentMargin text-center  "
        style={{}}
      >
        <h2 className="collection text-center">
          <img src={review1} alt=" " className="" />
          Reviews
          <img src={review} alt="" className="" />
        </h2>
        <hr className="mx-auto w-25 bg-white" />
        {reviewData?.length > 0 ? (
          <Slider {...settings}>
            {reviewData.map((data) => (
              <Card
                key={data._id}
                className="border-0 p-2 cards bg-card  "
                style={{ width: "" }}
              >
                <div className="image-box">
                  <Card.Img
                    variant="top"
                    src={data.img}
                    className="img-fluid img1"
                  />
                </div>
                <Card.Body className="reviw ">
                  <Card.Title className="text-center paddingTop fw-bold product-extra">
                    {data.name}
                  </Card.Title>
                  <Card.Text className=" text-center general-sub" style={{}}>
                    {data.descript.slice(0, 50) + "..."}
                  </Card.Text>
                  <Card.Text className="text-center">
                    <Rating
                      readonly
                      initialRating={data.star}
                      emptySymbol="far fa-star text-warning"
                      fullSymbol="fas fa-star text-warning"
                    ></Rating>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        ) : (
          <Slider {...settings}>
            {[1, 2, 3, 4].map((product) => (
              <Card className="text-center cards bg-card h-100">
                <div className="image-box">
                  <div
                    className="skeleton"
                    style={{
                      width: "100%",
                      height: "280px",
                    }}
                  ></div>
                </div>
                <Card.Body className="reviw">
                  <Card.Title
                    className="product-header"
                    style={{ textAlign: "center" }}
                  >
                    <p
                      className="skeleton skeleton-text"
                      style={{ margin: ".2em" }}
                    ></p>
                  </Card.Title>
                  <Card.Title className="product-sub mt-2 fs-6">
                    <p
                      className="skeleton skeleton-text"
                      style={{ margin: ".2em" }}
                    ></p>
                  </Card.Title>
                  <Card.Text className="text-muted fs-6 mt-3 product-extra fw-bold">
                    <p
                      style={{ margin: "2em 0.5em 0" }}
                      className="skeleton skeleton-info"
                    ></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        )}
      </Container>
    </>
  );
};

export default Home;
