import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import ShowDelete from "../DeleteShow/ShowDelete";
import ShowUpdate from "../ShowModal/ShowUpdate";
import trash from "./icons8-trash-48.png";
import ship from "./icons8-new-product-48.png";
const Allorder = () => {
  const [orderData, setorderData] = useState([]);
  const [id, setid] = useState("");
  const [modifiid, setmodifiid] = useState(false);
  // for update
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // for delete
  const [show2, setShow2] = useState(false);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  let count = 0;
  useEffect(() => {
    fetch(`https://titanserver.onrender.com/order`)
      .then((res) => res.json())
      .then((data) => setorderData(data));
  }, [modifiid]);
  // model display function on update
  const getmodal = (id) => {
    setid(id);
    handleShow();
  };
  // model display function on delete
  const deleteModal = (id) => {
    setid(id);
    handleShow2();
  };
  // removing order from db
  const handleremove = (id) => {
    axios.delete(`https://titanserver.onrender.com/order/${id}`).then((res) => {
      if (res.data) {
        const collect = orderData.filter((order) => order._id !== id);
        setorderData(collect);
        setmodifiid(false);
      }
    });
    handleClose2();
  };
  // updating status order in db
  const handleUpdate = (id) => {
    axios
      .put(`https://titanserver.onrender.com/orderUpdate/${id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          setmodifiid(true);
        }
      });
    handleClose();
  };

  return (
    // all order display section
    <Container
      data-aos="fade-up-left"
      fluid
      className="  text-center allorderbg"
    >
      <Table responsive striped hover>
        <thead>
          <tr className="text-center">
            <th className="product-header text-white">Sl</th>
            <th className="product-header text-white">UserName</th>
            <th className="product-header text-white">Model</th>
            <th className="product-header text-white">Status</th>
            {/* <th className="product-header text-white">Delete</th>
            <th className="product-header text-white">Update Status</th> */}
          </tr>
        </thead>
        <tbody>
          {orderData?.map((order) => (
            <tr key={order._id} className="text-center table-hover">
              <td className="text-white ">{++count}</td>
              <td className="text-white ">{order.name}</td>
              <td className="text-white ">{order.item.Model}</td>
              <td className="text-white fw-bold">
                <span
                  className={
                    order.orderStatus === "Pending"
                      ? "text-danger"
                      : "text-success"
                  }
                >
                  {order?.orderStatus}
                </span>
              </td>
              <td className="text-white ">
                <button
                  type="button"
                  onClick={() => deleteModal(order?._id)}
                  className="d-block border-0 mx-auto mt-2 "
                >
                  <img src={trash} alt="" srcset="" width={25} height={25} />
                </button>
              </td>
              <td className=" text-white ">
                <button
                  type="button"
                  onClick={() => getmodal(order?._id)}
                  className="d-block border-0 mx-auto mt-2 "
                >
                  <img
                    src={ship}
                    alt=""
                    srcset=""
                    width={25}
                    height={25}
                    className=""
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ShowUpdate
        show={show}
        id={id}
        handleClose={handleClose}
        handleUpdate={handleUpdate}
      ></ShowUpdate>
      <ShowDelete
        show={show2}
        id={id}
        handleClose={handleClose2}
        handleremove={handleremove}
      ></ShowDelete>
    </Container>
  );
};

export default Allorder;
