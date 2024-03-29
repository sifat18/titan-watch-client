import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Context/useAuth";
import ShowDelete from "../DeleteShow/ShowDelete";
const MyOrder = () => {
  const [productData, setproductData] = useState([]);
  const [id, setid] = useState("");
  const [modifiid, setmodifiid] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { user } = useAuth();
  const getmodal = (id) => {
    setid(id);
    handleShow();
  };
  // data filtering by email from db data
  useEffect(() => {
    fetch(`https://titanserver.onrender.com/getmail/${user.email}`)
      .then((res) => res.json())
      .then((data) => setproductData(data));
  }, [modifiid, user.email]);

  // order remove
  const handleremove = (id) => {
    axios.delete(`https://titanserver.onrender.com/order/${id}`).then((res) => {
      if (res.data) {
        const collect = productData.filter((product) => product._id !== id);
        setproductData(collect);
        setmodifiid(false);
      }
    });
    handleClose();
  };

  return (
    <Container data-aos="zoom-in" fluid className="text-center allorderbg ">
      <h2 className="text-white fs-3 fw-bold text-center mb-3"> My Orders</h2>
      {!productData.length > 0 && (
        <p className="green fs-3 fw-bold text-center mb-3">
          {" "}
          You don't have any pending orders yet!!
        </p>
      )}
      <Row
        xs={1}
        md={3}
        className=""
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        {productData?.map((data) => (
          <Col>
            <Card
              key={data?._id}
              className="text-center cards bg-card border-0 p-2"
            >
              <div className="image-box">
                <Card.Img
                  variant="top"
                  src={data?.item.Img}
                  className="img-fluid img1"
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center fw-bold fs-5 green">
                  {data?.item.Model}
                </Card.Title>
                {/* <Card.Text className=' fs-4'>{data?.site.descript.slice(0, 200)}</Card.Text> */}
                <Card.Text className=" fs-6 fw-bold green">
                  Cost ${data?.item.Price}
                </Card.Text>
                {!data.payment ? (
                  <Button
                    variant="white"
                    onClick={() => getmodal(data?._id)}
                    className=" product-extra text-white"
                  >
                    Cancel Order
                  </Button>
                ) : (
                  ""
                )}
                {data.payment ? (
                  <p className="text-white product-extra fs-5">paid</p>
                ) : (
                  <NavLink
                    to={`/dashboard/pay/${data._id}`}
                    className="mx-3 text-decoration-none text-white"
                  >
                    <Button variant="success" className="mt-2 product-extra">
                      Proceed to Payment
                    </Button>
                  </NavLink>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
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
