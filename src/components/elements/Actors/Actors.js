import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './Actors.css';

const Actors = (props) => {
    return (
              <Col sm = {2} className = "mt-2" >
                    <Card className = "actors-card">
                        <Card.Img variant="top" src={props.image}   />
                        <Card.Body>
                            <p>Karakter Adı: <span>{props.character}</span></p>
                            <p>Oyuncu Adı: <span>{props.name}</span></p>
                        </Card.Body>
                    </Card>
              </Col>      
    )
}

export default Actors;