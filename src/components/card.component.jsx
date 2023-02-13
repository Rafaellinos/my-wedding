import {Card} from "react-bootstrap";
import React from "react";


const CardComponent = ({ title, text, image, extraBody }) => {


    return (
        <div className="col d-flex justify-content-center my-3">
            <Card style={{width: '18rem'}}>
                {image !== undefined && <Card.Img variant="top" src={image}/>}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    {extraBody !== undefined && extraBody}
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardComponent;