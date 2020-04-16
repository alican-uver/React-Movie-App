import React from 'react';
import { Col, Card} from 'react-bootstrap';
import './Actors.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Actors = ({ personId, name, image, character, forActors, popularPeopleId }) => {
    return (
              <Col sm = {2} className = "mt-2 animated fadeInLeftBig" >
                {
                    forActors ?  
                    <Link to = {{pathname :`/person/${personId}`, actorName : `${name}`}}>
                    <Card className = "actors-card">
                        <Card.Img variant="top" src={image}/>
                        <Card.Body className = "p-0 pt-4 actors-card-body">
                            <p className = "actor-name">{name}</p>
                            <p className = "actor-character">{character}</p>
                        </Card.Body>
                    </Card>
                    </Link>
                    :
                    <Link to = "/">
                    <Card className = "actors-card">
                        <Card.Img variant="top" src={image}/>
                        <Card.Body className = "p-0 pt-4 actors-card-body">
                            <p className = "actor-name">{name}</p>
                        </Card.Body>
                    </Card>
                    </Link>
                }
                   
              </Col>    
    )
}

Actors.propTypes = {
    movieId : PropTypes.number,
    personId : PropTypes.number,
    name : PropTypes.string,
    image : PropTypes.string,
    character : PropTypes.string
}


export default Actors;