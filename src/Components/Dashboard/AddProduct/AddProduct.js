import axios from 'axios';
import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';

const AddProduct = () => {
    const [show, setShow] = useState(false);
    const [product, setproduct] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...product };
        newProductData[field] = value;
        setproduct(newProductData);
        // console.log(loginData)

    }
    const handleAddProduct = e => {
        e.preventDefault()
        console.log(product)
        axios.post(`https://vast-everglades-95998.herokuapp.com/watch`, product).then(res => res.data ? handleShow() : '')

    }
    return (
        <Container data-aos="fade-down-left">
            <h2 className='text-center'>Add Watch</h2>
            <form className='mt-3 pt-2' onSubmit={handleAddProduct}>
                <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='Price' name="Price" id="Price" />
                <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='Model' name="Model" id="Model" />
                <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='Brand' name="Brand" id="Brand" />
                <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='Model' name="Model" id="Model" />
                <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='Feature' name="Feature" id="Feature" />
                <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='Color' name="Color" id="Color" />
                <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='Warranty' name="Warranty" id="Warranty" />
                <input required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='ImgLink' name="Img" id="Img" />
                <textarea rows='5' required className='inputs my-4 w-50' type="text" onChange={handleOnChange} placeholder='Description' name="description" id="description" />
                <input required className='inputs my-4 w-50' type="number" min="1" max="5" onChange={handleOnChange} placeholder='star' name="star" id="star" />
                <button className='adminAdd btncolr w-25 mx-auto mt-4 fs-3 '>Add </button>

            </form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Watch Added</Modal.Title>
                </Modal.Header>
                <Modal.Body>We have a new Watch Collection!!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Cheers!!
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AddProduct;