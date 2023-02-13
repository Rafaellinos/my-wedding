import {Button, Card, Container, Image} from "react-bootstrap";
import HoneyMoon from "../assets/honeymoon.png";
import Furniture from "../assets/furniture.png";
import PixImage from "../assets/pix.png";
import React, {useState} from "react";
import GenericModalComponent from "../components/generic-modal.component";

const ListaPresentesComponent = () => {

    const [modalHandler, setModalHandler] = useState(false);

    const handleClose = () => setModalHandler(false);
    const handleShow = () => setModalHandler(true);

    return (
        <Container>
            <GenericModalComponent
                title="PIX"
                onClose={handleClose}
                children={
                    <Image src={PixImage} fluid />
                }
                show={modalHandler}
            />
            <div className="my-5 text-center">
                <div className="row align-items-center">
                    <div className="col d-flex justify-content-center my-3">
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={Furniture}/>
                            <Card.Body>
                                <Card.Title>Casa</Card.Title>
                                <Card.Text>
                                    Ajuste os noivas a mobiliar a casa nova!
                                </Card.Text>
                                <Button variant="primary" onClick={handleShow}>PIX</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col d-flex justify-content-center my-3">
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={HoneyMoon}/>
                            <Card.Body>
                                <Card.Title>Lua de Mel</Card.Title>
                                <Card.Text>
                                    Ajude os noivos a ter uma lua de mel inesquecível!
                                </Card.Text>
                                <Button variant="primary" onClick={handleShow}>PIX</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default ListaPresentesComponent;