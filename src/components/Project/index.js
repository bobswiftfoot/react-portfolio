import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';



function Project(props)
{
    const value = props.value;

    const [show, setShow] = useState("none");
    const handleClose = () => setShow("none");

    function handleShow(project)
    {
        setShow(project);
    }

    return (
        <div className="col-12 col-md-6 col-lg-4 p-2">
                <Card>
                    <Card.Img varient="top" src={value.img} />
                    <Card.Body>
                        <Card.Title>{value.title}</Card.Title>
                        <Card.Text>
                            {value.description}
                        </Card.Text>
                        <Button onClick={() => handleShow(value.name)}>
                            More Info
                        </Button>
                    </Card.Body>
                </Card>

                <Modal show={show == value.name} onHide={handleClose} size="xl" >
                    <Modal.Header closeButton>
                        {value.description}
                    </Modal.Header>
                    <Modal.Body>
                        <img src={value.img} className="img-fluid" />
                    </Modal.Body>
                    <Modal.Footer className="modal-footer">
                        <Button variant="primary" href={value.live} >Live Site</Button>
                        <Button variant="primary" href={value.gitHub} >Github</Button>
                    </Modal.Footer>
                </Modal>
        </div>
    );
}

export default Project;