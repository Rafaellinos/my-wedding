import {Button, Container, Image} from "react-bootstrap";
import HoneyMoon from "../assets/honeymoon.png";
import Furniture from "../assets/furniture.png";
import PixImage from "../assets/pix.png";
import React, {useState} from "react";
import GenericModalComponent from "../components/generic-modal.component";
import ProgressBar from 'react-bootstrap/ProgressBar';
import CardComponent from "../components/card.component";

const ListaPresentesComponent = () => {

    const [modalHandler, setModalHandler] = useState(false);

    const handleClose = () => setModalHandler(false);
    const handleShow = () => setModalHandler(true);
    const moneyObjective = 5000;
    let honeyMoonTotal = 0;
    let houseTotal = 3000;
    const ruleOfThree = (current) => ((current*1.0)/moneyObjective)*100;

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
                    <CardComponent
                        title="Casa"
                        text="Ajuste os noivas a mobiliar a casa nova!"
                        image={Furniture}
                        extraBody={
                            <>
                                <h5>Objetivo: R$ 5.000,00</h5>
                                <ProgressBar now={ruleOfThree(houseTotal)} label={`${ruleOfThree(houseTotal)}%`} className="m-3" />
                                <Button variant="primary" onClick={handleShow}>PIX</Button>
                            </>
                        }
                    />
                    <CardComponent
                        title="Lua de Mel"
                        text="Ajude os noivos a ter uma lua de mel inesquecível!"
                        image={HoneyMoon}
                        extraBody={
                            <>
                                <h5>Objetivo: R$ 5.000,00</h5>
                                <ProgressBar now={ruleOfThree(honeyMoonTotal)} label={`${ruleOfThree(honeyMoonTotal)}%`} className="m-3" />
                                <Button variant="primary" onClick={handleShow}>PIX</Button>
                            </>
                        }
                    />
                </div>
            </div>
        </Container>

    )
}

export default ListaPresentesComponent;