import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import ShowDelete from "../DeleteShow/ShowDelete";
import trash from "./icons8-trash-48.png";
const ManageProduct = () => {
  const [productData, setproductData] = useState([]);
  const [id, setid] = useState("");
  const [modifiid, setmodifiid] = useState(false);
  let count = 0;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  //    fetching all watch data from db
  useEffect(() => {
    fetch(`https://titanserver.onrender.com/watch`)
      .then((res) => res.json())
      .then((data) => setproductData(data));
  }, [modifiid]);
  // display on delete
  const getmodal = (id) => {
    setid(id);
    handleShow();
  };
  // removing any product from db
  const handleremove = (id) => {
    axios.delete(`https://titanserver.onrender.com/watch/${id}`).then((res) => {
      if (res.data) {
        const collect = productData.filter((product) => product._id !== id);
        setproductData(collect);
        setmodifiid(false);
      }
    });
    handleClose();
  };
  return (
    // data display in table
    <Container data-aos="flip-right" fluid className=" text-center allorderbg">
      <Table responsive striped hover>
        <thead>
          <tr className="text-center">
            <th className="product-header text-white">Sl</th>
            <th className="product-header text-white">Brand</th>
            <th className="product-header text-white">Model</th>
            {/* <th class   Name="product-header text-white">Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr key={product._id} className="text-center">
              <td className=" text-white ">{++count}</td>
              <td className=" text-white ">{product.Brand}</td>
              <td className=" text-white ">{product.Model}</td>
              <td className=" text-white ">
                <button
                  type="button"
                  onClick={() => getmodal(product?._id)}
                  className="d-block border-0 mx-auto"
                >
                  <img
                    src={trash}
                    alt=""
                    srcset=""
                    width={25}
                    height={25}
                    className=""
                  />{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ShowDelete
        show={show}
        id={id}
        handleClose={handleClose}
        handleremove={handleremove}
      ></ShowDelete>
    </Container>
  );
};

export default ManageProduct;
