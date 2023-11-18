import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ReviewSkeleton = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {" "}
      {[1, 2, 3, 4].map((product) => (
        <Col>
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
            <Card.Footer style={{ marginTop: "-1rem" }}>
              <p
                style={{ margin: "2em 0.5em 1em" }}
                className="skeleton skeleton-info"
              ></p>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ReviewSkeleton;
