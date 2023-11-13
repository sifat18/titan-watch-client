import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useWatchData from "../DataLoads/watchData";
import pic1 from "./icons8-watch-64.png";
import pic2 from "./icons8-return-purchase-64.png";

import "./explore.css";
import { NavLink } from "react-router-dom";
const Explore = () => {
  const [watches] = useWatchData();
  return (
    // data display in cards
    <Container data-aos="zoom-out" fluid className=" explore-body py-5">
      <h2 className="collection text-center">
        Collections
        <img src={pic1} alt="" className="" />
      </h2 >
      <hr style={{ marginTop: "-0.7rem" }} className="mx-auto w-25 bg-white mb-5 " />
      <Container>
        <Row xs={1} md={3} className="g-4">
          {watches.map((product) => (
              <Col key={product._id}>
              <Card className="text-center cards bg-card h-100">
                <div className="image-box">
                  <Card.Img variant="top" src={product.Img} className="img1" />
                </div>
                {/* <Card.Header>{product.Feature}</Card.Header> */}
                <Card.Body>
                  <Card.Title className="product-header">
                    {product.Model}
                  </Card.Title>
                  <Card.Title className="product-sub mt-2 fs-6">
                    Brand- {product.Brand}
                  </Card.Title>
                  {/* <Card.Text className="product-description mt-4"> */}
                  <Card.Text className="text-muted fs-6 mt-3 product-extra fw-bold">
                    {/* {product.description.slice(0, 50) + "..."}{" "} */}
                    Price: $ {product.Price}
                  </Card.Text>
                  {/* <NavLink
                    to={`/watch/${product._id}`}
                    className="text-decoration-none fs-5 text-warning"
                  >
                    {" "}
                    Purchase <img src={pic2} alt="" height="30" width="30" />
                  </NavLink> */}
                </Card.Body>
                <Card.Footer style={{ marginTop: "-1rem" }}>
                  <NavLink
                    to={`/watch/${product._id}`}
                    className="product-extra text-decoration-none fs-6 ms-4 text-warning"
                  >
                    {" "}
                    Purchase <img src={pic2} alt="" height="30" width="30" />
                  </NavLink>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Explore;
