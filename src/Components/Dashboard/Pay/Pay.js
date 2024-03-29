import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(
  "pk_test_51KFaKtEEa7afSIMyBSyWarMTYy3YudrLaaCXevl3MqCVLgkFSjK7OdewO1ouR56hCoLCPIJNPV2JxoaQv6v09kx7003h5CDiSv"
);
const Pay = () => {
  const { appId } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`https://titanserver.onrender.com/order/${appId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [appId]);
  return (
    // payment section
    <Container style={{ marginTop: "-16em" }}>
      <h2 data-aos="zoom-in" className="text-center green">
        Payment of ${order?.item?.Price}{" "}
      </h2>
      <Elements stripe={stripePromise}>
        <CheckOut info={order} />
      </Elements>
    </Container>
  );
};

export default Pay;
