import axios from "axios";
import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../Context/useAuth";

const Reviews = () => {
  const { register, handleSubmit, reset } = useForm();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user } = useAuth();

  // sending review data to db
  const onSubmit = (data) => {
    reset("");
    axios
      .post("https://titanserver.onrender.com/reviews", data)
      .then((res) => (res.data.insertedId ? handleShow() : ""));
  };

  return (
    // review data form
    <Container data-aos="zoom-in-up">
      <h2 className="text-center green">Give Us a review</h2>
      <form
        className="mt-3 mx-auto pt-2 w-50"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          required
          placeholder="name"
          defaultValue={user.displayName}
          className="reservation w-100"
          {...register("name")}
        />
        <input
          required
          placeholder="email"
          defaultValue={user.email}
          className="reservation w-100"
          {...register("email")}
        />
        <textarea
          rows="4"
          required
          placeholder="description"
          className="reservation w-100"
          {...register("descript")}
        />
        <input
          type="number"
          min="1"
          max="5"
          required
          placeholder="rating"
          className="reservation w-100"
          {...register("star")}
        />
        <input
          required
          placeholder="imageLink"
          className="reservation w-100"
          {...register("img")}
        />
        <button className="adminAdd bg-success  text-light w-25 mx-auto mt-4 fs-3 ">
          Add{" "}
        </button>
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Review Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Cheers!!
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Reviews;
