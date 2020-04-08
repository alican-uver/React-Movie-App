import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Movies = (props) => {
    return (
        <Col sm={3} className="mt-5">
            { props.clickable ?
                <Link to={{ pathname: `${props.movieId}`, movieName: `${props.movieName}` }}>
                    <Card>
                        <Card.Img variant="top" src={props.image} alt = "movieImg" />
                    </Card>
                </Link>
                :  <Card>
                <Card.Img variant="top" src={props.image} alt = "movieImg" />
            </Card>
            }
        </Col>
    )
}

export default Movies;
