import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const CheckOut = (props) => {
  const price = props.info?.item?.Price;
  const Pname = props.info?.name;
  const id = props.info?._id;
  const stripe = useStripe();
  const elements = useElements();
  const [s, setSS] = useState("");
  const [error, seterror] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  useEffect(() => {
    fetch("https://titanserver.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      seterror(error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    //payment-intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: Pname,
          },
        },
      });
    if (intentError) {
      seterror(intentError.message);
      setSS("");
    } else {
      seterror("");
      setSS("payment success");
      console.log(paymentIntent);
      setProcessing(false);
    }
    const payment = {
      amount: paymentIntent.amount,
      created: paymentIntent.created,
      last4: paymentMethod.card.last4,
      transaction: paymentIntent.client_secret.slice("_secret")[0],
    };
    const url = `https://titanserver.onrender.com/order/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          ""
        ) : (
          <button type="submit" className="mt-4 mx-5" disabled={!stripe || s}>
            Pay ${price}
          </button>
        )}
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {s && <p style={{ color: "green" }}>{s}</p>}
    </Container>
  );
};

export default CheckOut;
