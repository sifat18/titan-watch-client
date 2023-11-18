import React from "react";
import "./dash.css";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Shared from "./Shared/Shared";
import DashHome from "./DashHome/DashHome";
import Admin from "./Admin/Admin";
import useAuth from "../Context/useAuth";
import AddProduct from "./AddProduct/AddProduct";
import Allorder from "./AllOrder/Allorder";
import ManageProduct from "./ManageProduct/ManageProduct";
import Pay from "./Pay/Pay";
import MyOrder from "./MyOrder/MyOrder";
import Reviews from "./Reviews/Reviews";
import AdminRoute from "./AdminRoute/AdminRoute";
import home from "./icons8-home-24.png";
import cart from "./icons8-cart-64.png";
import plus from "./icons8-add-64.png";
import order from "./icons8-purchase-order-50.png";
import out from "./icons8-logout-rounded-up-30.png";
import dash from "./icons8-dashboard-64.png";
import cash from "./icons8-pay-wall-64.png";
import reviw from "./icons8-survey-50.png";
import delet from "./icons8-delete-30.png";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user, logOut, admin } = useAuth();

  const togle = () => {
    let el = document.getElementById("wrapper");
    let toggleButton = document.getElementById("menu-toggle");

    toggleButton.onclick = function () {
      el.classList.toggle("toggled");
    };
  };

  return (
    <Container fluid className=" prim-bg d-flex" id="wrapper">
      <Row id="sidebar-wrapper">
        <Container className="product-extra text-center bg-white  ">
          <div className="sidebar-heading  text-center py-4 text-uppercase">
            <i class="fas fa-user-secret"></i>
            {user.displayName}
          </div>
          <ListGroup variant="flush product-extra">
            <Link to="/home">
              <ListGroup.Item className="border-end-0 border-top-0 border-start-0">
                <img src={home} alt="" /> Home
              </ListGroup.Item>
            </Link>
            <Link to={`${url}`}>
              <ListGroup.Item className="border-end-0 border-top-0 border-start-0">
                <img src={dash} height="20" width="20" alt="" /> Main Dash
              </ListGroup.Item>
            </Link>
            {/* user routes*/}
            {!admin && (
              <div>
                <Link to={`${url}/pay`}>
                  <ListGroup.Item className=" border-end-0 border-top-0 border-start-0">
                    <img src={cash} height="20" width="20" alt="" /> Pay
                  </ListGroup.Item>
                </Link>
                <Link to={`${url}/myOrder`}>
                  <ListGroup.Item className=" border-end-0 border-top-0 border-start-0">
                    <img src={cart} height="20" width="20" alt="" /> My Order
                  </ListGroup.Item>
                </Link>
                <Link to={`${url}/review`}>
                  <ListGroup.Item className=" border-end-0 border-top-0 border-start-0">
                    <img src={reviw} height="20" width="20" alt="" />
                    Review
                  </ListGroup.Item>
                </Link>
              </div>
            )}
            {/* admin routes*/}
            {admin && (
              <div>
                <Link to={`${url}/makeAdmin`}>
                  <ListGroup.Item className=" border-end-0 border-top-0 border-start-0">
                    <img src={plus} height="20" width="20" alt="" /> Add Admin
                  </ListGroup.Item>
                </Link>
                <Link to={`${url}/addProduct`}>
                  <ListGroup.Item className=" border-end-0 border-top-0 border-start-0">
                    <img src={cart} height="20" width="20" alt="" /> Add Product
                  </ListGroup.Item>
                </Link>
                <Link to={`${url}/manageAllOrder`}>
                  <ListGroup.Item className="border-end-0 border-top-0 border-start-0">
                    <img src={order} height="20" width="20" alt="" /> Manage
                    AllOrders
                  </ListGroup.Item>
                </Link>
                <Link to={`${url}/manageProducts`}>
                  <ListGroup.Item className="border-end-0 border-top-0 border-start-0">
                    <img src={delet} height="20" width="20" alt="" /> Manage
                    Product
                  </ListGroup.Item>
                </Link>
              </div>
            )}
            <ListGroup.Item onClick={logOut} className="point ">
              <img src={out} height="20" width="20" alt="" /> LogOut
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </Row>

      <Row id="page-content-wrapper">
        <div className="d-flex my-3 product-sub">
          <i
            onClick={togle}
            className="fas fa-align-left green pt-2 fs-4 ms-5"
            id="menu-toggle"
          ></i>
          <h2 className=" fs-4 m-0 ps-2 pt-1 green">Dashboard</h2>
          <span onClick={logOut} className="ms-auto me-3 fs-3  point green ">
            <img src={out} height="20" width="20" alt="" /> LogOut
          </span>
        </div>
        <Col className="product-sub">
          {/* nested routes */}
          
          <Switch>
            <Route exact path={path}>
              {/* <h3>Please select a topic.</h3> */}
              <div className="dashMargin">
              <Shared />
                <DashHome></DashHome>
                </div>
            </Route>
            <AdminRoute path={`${path}/makeAdmin`}>
            <div className="dashMargin">
              <Admin />
              </div>
            </AdminRoute>
            <AdminRoute path={`${path}/manageAllOrder`}>
              <Allorder />
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProduct />
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct />
            </AdminRoute>
            <Route path={`${path}/pay/:appId`}>
              <Pay />
            </Route>
            <Route path={`${path}/myOrder`}>
              <MyOrder />
            </Route>
            <Route path={`${path}/review`}>
              <Reviews />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
