import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { BASE_IMG } from '../../../config';

const Movies = (props) => {
    return (
        <Col sm={3}>
            <Card>
                <Card.Img variant="top" src={props.image} />
            </Card>
        </Col>
    )
}

export default Movies;
