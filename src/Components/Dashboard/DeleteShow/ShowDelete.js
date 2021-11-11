import React from 'react';
import { Button, Modal } from 'react-bootstrap';
// displaye on delete event
const ShowDelete = ({ show, handleClose, handleremove, id }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Delete Order?</Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={handleClose}>
                    cancel!
                </Button>
                <Button variant="danger" onClick={() => handleremove(id)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShowDelete;