import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import ShowDelete from '../DeleteShow/ShowDelete';
import ShowUpdate from '../ShowModal/ShowUpdate';
const Allorder = () => {
    const [orderData, setorderData] = useState([])
    const [id, setid] = useState('')
    const [modifiid, setmodifiid] = useState(false)
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
        fetch(`https://vast-everglades-95998.herokuapp.com/order`).then(res => res.json()).then(data => setorderData(data))
    }, [modifiid])

    const getmodal = (id) => {
        setid(id)
        handleShow()

    }
    const deleteModal = (id) => {
        setid(id)
        handleShow2()

    }

    const handleremove = (id) => {
        axios.delete(`https://vast-everglades-95998.herokuapp.com/order/${id}`).then(res => {
            if (res.data) {
                const collect = orderData.filter(order => order._id !== id)
                setorderData(collect);
                setmodifiid(false)
            }
        })
        handleClose2()
    }
    const handleUpdate = (id) => {
        axios.put(`https://vast-everglades-95998.herokuapp.com/orderUpdate/${id}`).then(res => {
            if (res.data.modifiedCount) {
                setmodifiid(true)
            }
        })
        handleClose()

    }

    return (
        <Container data-aos="fade-up-left" fluid className='pt-3   text-center allorderbg'>
            <Table responsive striped bordered hover >
                <thead>
                    <tr className='text-center'>
                        <th className='fs-3 text-white'>Sl</th>
                        <th className='fs-3 text-white'>UserName</th>
                        <th className='fs-3 text-white'>Model</th>
                        <th className='fs-3 text-white'>Status</th>
                        <th className='fs-3 text-white'>Delete</th>
                        <th className='fs-3 text-white'>Update Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orderData.map(order =>
                        <tr key={order._id} className='text-center'>
                            <td className='fs-4 text-white '>{++count}</td>
                            <td className='fs-4 text-white '>{order.name}</td>
                            <td className='fs-4 text-white '>{order.item.Model}</td>
                            <td className='fs-4 text-white fw-bold'><span className={order.orderStatus === 'Pending' ? 'text-danger' : 'text-success'}>{order.orderStatus}</span></td>
                            <td className='fs-4 text-white '><button type='button' onClick={() => deleteModal(order?._id)} className='d-block border-0 mx-auto'>delete</button></td>
                            <td className='fs-4 text-white '><button type='button' onClick={() => getmodal(order?._id)} className='d-block border-0 mx-auto'>ship</button></td>
                        </tr>
                    )}
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