import React from 'react';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';
// import './header.css'
import logo from './icons8-watch-64(1).png'
const Header = () => {
    // getting user data
    const { user, isLoading, logOut } = useAuth()
    // show spinner if until user data found
    if (isLoading) {
        return <div className='text-center'><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <Navbar sticky="top" fluid collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to='/home'> <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt=""
                    />    </Navbar.Brand></NavLink>
                <NavLink to='/home' className='text-decoration-none product-header'><Navbar.Brand className='fw-bold' href="#home">TICK~TOCK</Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav variant="pills" className="ms-auto ">
                        <NavLink to='/home' className='text-decoration-none product-header'>  <Nav.Link href='/home'>Home</Nav.Link></NavLink>
                        <NavLink to='/explore' className='text-decoration-none product-header'>  <Nav.Link href='/explore'>Explore</Nav.Link></NavLink>
                        {user.displayName && <NavLink to='/dashboard' className='text-decoration-none product-header'>  <Nav.Link href='/dashboard'>Dashboard</Nav.Link></NavLink>
                        }
                        {user.displayName && <Navbar.Text className='product-header'>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>}
                        {user.displayName && <Nav.Link className='product-header' onClick={logOut}>LogOut</Nav.Link>
                        }
                        {!user.displayName && <NavLink to='/register' className='text-decoration-none product-header'><Nav.Link href="#register" >Register</Nav.Link></NavLink>
                        }
                        {!user.displayName && <NavLink to='/login' className='text-decoration-none product-header'><Nav.Link href="#login" >Login</Nav.Link></NavLink>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;