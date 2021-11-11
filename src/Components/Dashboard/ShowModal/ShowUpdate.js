import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ShowUpdate = ({ show, handleClose, handleUpdate, id }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Ship Order?</Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={handleClose}>
                    cancel!
                </Button>
                <Button variant="success" onClick={() => handleUpdate(id)}>
                    Shipp
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShowUpdate;