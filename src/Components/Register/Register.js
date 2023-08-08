import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./register.css";
import pic1 from "./voting.svg";
import pic2 from "./enter.svg";
import { useHistory } from "react-router-dom";
import useAuth from "../Context/useAuth";
const Register = () => {
  const [registerData, setregisterData] = useState({});
  const [passError, setpassError] = useState("");
  const history = useHistory();
  const { createUser } = useAuth();
  let repassword;
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setregisterData(newRegisterData);
    // console.log(loginData)
  };
  const hadlePass = (e) => {
    repassword = e.target.value;
    if (registerData.pass === repassword) {
      setpassError("");
    } else {
      setpassError("passward doesnt match");
    }
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    createUser(
      registerData.name,
      registerData.email,
      registerData.pass,
      history
    );
  };
  return (
    <Container fluid className="explore-body">
      <Container className="my-5 py-2">
        {/* register form */}
        <h2 className="text-center fs-1 fw-bold">
          <img src={pic1} alt="" height="60" width="60" />
          <span className="textColor">Regi</span>ster
        </h2>
        <hr className="mx-auto w-25" />
        <form className="mt-3 pt-2  py-3" onSubmit={handleLoginSubmit}>
          <input
            required
            className="inputs my-4 w-50"
            type="text"
            onChange={handleOnChange}
            placeholder="name"
            name="name"
            id="name"
          />
          <input
            required
            className="inputs my-4 w-50"
            type="email"
            onChange={handleOnChange}
            placeholder="email"
            name="email"
            id="email"
          />
          <input
            required
            className="inputs my-4 w-50"
            type="password"
            onChange={handleOnChange}
            placeholder="password"
            name="pass"
            id="pass"
          />
          <input
            required
            className="inputs my-4 w-50"
            type="password"
            onBlur={hadlePass}
            placeholder="re-enter password"
            name="re-pass"
            id="pass"
          />
          {passError ? (
            <p className="text-danger text-center">{passError}</p>
          ) : (
            ""
          )}

          <button className="inputs btncolr  mt-2 fs-3 mb-5">
            Register <img src={pic2} alt="" height="30" width="30" />
          </button>
        </form>
      </Container>
    </Container>
  );
};

export default Register;
