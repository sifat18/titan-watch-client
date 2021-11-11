import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './admin.css'
const Admin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    // const { token } = useAuth();

    const handleOnChange = e => {
        const value = e.target.value;
        setEmail(value)

    }
    const handleAddAdmin = e => {
        e.preventDefault()
        console.log(email)
        // fetch('', {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(email)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount) {
        //             console.log(data);
        //             setSuccess(true);
        //         }
        //     })
    }
    return (
        <Container>
            <h2 className='text-center'>Add An Admin</h2>
            <form className='mt-3 pt-2 d-flex justify-content-center py-3' onSubmit={handleAddAdmin}>
                <input required className='adminAdd   my-4 w-25' type="email" onChange={handleOnChange} placeholder='email' name="email" id="email" />
                <button className='adminAdd btncolr px-5 mt-4 fs-3 '>Add </button>
            </form>
        </Container>
    );
};

export default Admin;