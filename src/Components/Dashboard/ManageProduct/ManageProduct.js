import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table, } from 'react-bootstrap';
import ShowDelete from '../DeleteShow/ShowDelete';
const ManageProduct = () => {
    const [productData, setproductData] = useState([])
    const [id, setid] = useState('')
    const [modifiid, setmodifiid] = useState(false)
    let count = 0;
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    useEffect(() => {
        fetch(`https://vast-everglades-95998.herokuapp.com/watch`).then(res => res.json()).then(data => setproductData(data))
    }, [modifiid])

    const getmodal = (id) => {
        setid(id)
        handleShow()

    }
    const handleremove = (id) => {
        axios.delete(`https://vast-everglades-95998.herokuapp.com/watch/${id}`).then(res => {
            if (res.data) {
                const collect = productData.filter(product => product._id !== id)
                setproductData(collect);
                setmodifiid(false)
            }
        })
        handleClose()
    }
    return (
        <Container fluid className='pt-3   text-center allorderbg'>
            <Table responsive striped bordered hover >
                <thead>
                    <tr className='text-center'>
                        <th className='fs-3 text-white'>Sl</th>
                        <th className='fs-3 text-white'>Brand</th>
                        <th className='fs-3 text-white'>Model</th>
                        <th className='fs-3 text-white'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map(product =>
                        <tr key={product._id} className='text-center'>
                            <td className='fs-4 text-white '>{++count}</td>
                            <td className='fs-4 text-white '>{product.Brand}</td>
                            <td className='fs-4 text-white '>{product.Model}</td>
                            <td className='fs-4 text-white '><button type='button' onClick={() => getmodal(product?._id)} className='d-block border-0 mx-auto'>delete</button></td>
                        </tr>
                    )}
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