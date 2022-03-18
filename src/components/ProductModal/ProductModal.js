import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { title, image, price, description, rating } = props.product
    return (
        <>
            <Button className='bg-info' variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <img className='w-50 mx-auto' src={image} alt="" />
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default ProductModal;