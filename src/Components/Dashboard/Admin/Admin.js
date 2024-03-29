import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import useAuth from "../../Context/useAuth";
import "./admin.css";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { token } = useAuth();
  const handleOnChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  // setting the admin role in db
  const handleAddAdmin = (e) => {
    e.preventDefault();
    const user = { email };
    fetch(`https://titanserver.onrender.com/admin/email`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          handleShow();
        }
      });
    // axios.put(`https://titanserver.onrender.com/admin/${email}`).then(res => res.data.modifiedCount ? handleShow() : '')
  };
  return (
    <Container>
      <h2
        data-aos="fade-down-right"
        className="product-header fs-3 text-center green"
      >
        Add An Admin
      </h2>
      <form
        className="mt-3 pt-2 d-flex justify-content-center py-3"
        onSubmit={handleAddAdmin}
      >
        <input
          required
          className="adminAdd   my-4 w-75"
          type="email"
          onChange={handleOnChange}
          placeholder="email"
          name="email"
          id="email"
        />
        <button className="adminAdd bg-success text-light px-5 mt-4 product-extra ">
          Add{" "}
        </button>
      </form>
      {/* modal for showing confirmation */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>We have a new admin in the house!!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Cheers!!
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Admin;
