import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import './Actors.css';
import { Link } from 'react-router-dom'

const Actors = (props) => {
    return (
              <Col sm = {2} className = "mt-2" >
                    <Link to = {{pathname :`${props.movieId}/${props.personId}`}}>
                    <Card className = "actors-card">
                        <Card.Img variant="top" src={props.image}/>
                        <Card.Body className = "p-0 pt-4">
                            <p className = "actor-name">{props.name}</p>
                            <p className = "actor-character">{props.character}</p>
                        </Card.Body>
                    </Card>
                    </Link>
              </Col>    
    )
}

export default Actors;