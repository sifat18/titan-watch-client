import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import pic1 from './enter.svg';
import pic2 from './login.svg';
import google from './icons8-google.svg';
const Login = () => {
    const [LoginData, setLoginData] = useState({});
    const { signGoogle, emailPass, isLoading, error } = useAuth()
    const location = useLocation();
    const history = useHistory();
    // const redirect_url = location.state?.from || '/home';
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...LoginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(loginData)

    }
    const handleLogin = () => {
        signGoogle(location, history)
    }
    const handleLoginSubmit = e => {
        e.preventDefault()
        console.log(LoginData);
        emailPass(LoginData.email, LoginData.pass, location, history)
    }
    return (
        <Container fluid className='explore-body'>
            <Container className='my-5 py-2'>
                {/* register form */}
                <h2 className='text-center fs-1 fw-bold'><img src={pic1} alt="" height='60' width='60' /><span className='textColor'>Log</span>in</h2>
                <hr className='mx-auto w-25' />
                <form className='mt-3 pt-2  py-3' onSubmit={handleLoginSubmit}>
                    <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='email' name="email" id="email" />
                    <input required className='inputs my-4 w-50' type="password" onChange={handleOnChange} placeholder='password' name="pass" id="pass" />
                    {error ? <p className='text-danger text-center'>{error}</p> : ''}

                    <button className='inputs btncolr  mt-2 fs-3 mb-5'>Login <img src={pic2} alt="" height='30' width='30' /></button>
                </form>
                <div className='text-center mt-5 '>
                    <p className='fs-3 fw-nromal text-success'>New user? <NavLink to='/register'>Click me</NavLink></p>
                    <p className='text-white'>-------OR------</p>
                    <button className='btn bg-google border border-1 mb-5 text-white' onClick={handleLogin} > <img src={google} alt="" height='30' width='30' /> Google Sign In</button>
                </div>
            </Container>
        </Container>
    );
};

export default Login;