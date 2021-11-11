import React from 'react';
import './dash.css';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Shared from './Shared/Shared';
import DashHome from './DashHome/DashHome';
import Admin from './Admin/Admin';
import useAuth from '../Context/useAuth';
import AddProduct from './AddProduct/AddProduct';
import Allorder from './AllOrder/Allorder';
import ManageProduct from './ManageProduct/ManageProduct';
import Pay from './Pay/Pay';
import MyOrder from './MyOrder/MyOrder';
import Reviews from './Reviews/Reviews';
import AdminRoute from './AdminRoute/AdminRoute';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth()

    const togle = () => {
        let el = document.getElementById("wrapper");
        let toggleButton = document.getElementById("menu-toggle");

        toggleButton.onclick = function () {
            el.classList.toggle("toggled");
        };
    }

    return (
        <Container fluid className=' prim-bg d-flex' id="wrapper">
            <Row id="sidebar-wrapper">
                <Container className='text-center bg-white  sw'>
                    <div className="sidebar-heading  text-center py-4 primary-text fs-4 fw-bold text-uppercase">
                        <i class="fas fa-user-secret"></i>{user.displayName}
                    </div>
                    <ListGroup variant="flush" >
                        <Link to='/home' ><ListGroup.Item className='border-end-0 border-top-0 border-start-0'>Home</ListGroup.Item></Link>
                        <Link to={`${url}`}><ListGroup.Item className='border-end-0 border-top-0 border-start-0'>Main Dash</ListGroup.Item></Link>
                        {/* user */}
                        {!admin && <div>
                            <Link to={`${url}/pay`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'>Pay</ListGroup.Item></Link>
                            <Link to={`${url}/myOrder`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'>My Order</ListGroup.Item></Link>
                            <Link to={`${url}/review`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'>Review</ListGroup.Item></Link>
                        </div>}
                        {/* admin */}
                        {admin && <div>

                            <Link to={`${url}/makeAdmin`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'>Add Admin</ListGroup.Item></Link>
                            <Link to={`${url}/addProduct`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'>Add Product</ListGroup.Item></Link>
                            <Link to={`${url}/manageAllOrder`}><ListGroup.Item className='border-end-0 border-top-0 border-start-0'>Manage AllOrders</ListGroup.Item></Link>
                            <Link to={`${url}/manageProducts`}><ListGroup.Item className='border-end-0 border-top-0 border-start-0'>Manage Product</ListGroup.Item></Link>
                        </div>}
                        <ListGroup.Item onClick={logOut} className='point '>LogOut</ListGroup.Item>
                    </ListGroup>
                </Container>
            </Row>

            <Row id="page-content-wrapper">
                <div className="d-flex my-3">

                    <i onClick={togle} className="fas fa-align-left green pt-2 fs-4 ms-5" id="menu-toggle"></i>
                    <h2 className=" fs-2 m-0 green">Dashboard</h2>
                    <span onClick={logOut} className='ms-auto me-3 fs-3  point green '>LogOut</span>

                </div>
                <Col >
                    <Shared />
                    <Switch>
                        <Route exact path={path}>
                            {/* <h3>Please select a topic.</h3> */}
                            <DashHome></DashHome>
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <Admin />
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageAllOrder`}><Allorder />
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}><ManageProduct />
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct />
                        </AdminRoute>
                        <Route path={`${path}/pay`}>
                            <Pay />
                        </Route>
                        <Route path={`${path}/myOrder`}><MyOrder />
                        </Route>
                        <Route path={`${path}/review`}><Reviews />
                        </Route>
                    </Switch>

                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;