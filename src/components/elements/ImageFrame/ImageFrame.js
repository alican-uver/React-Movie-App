import React from 'react';
import { Col, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
const Movies = (props) => {
    return (
        <div className = "col-sm-3 mt-5">
            {props.clickable ?
                <Link to={{ pathname: `${props.movieId}`, movieName: `${props.movieName}` }}>
                    <Card>
                        <Card.Img variant="top" src={props.image} alt="movieImg" />
                    </Card>
                </Link>
                : 
                <Card className = "bg-dark text-light" style = {{maxHeight: "500px"}}>
                    <Card.Img variant="top" src={props.image} alt="movieImg" />
                    <Card.Body>
                        <Card.Text>
                            <p> Adı: {props.name} </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            }            
        </div>
    )
}

export default Movies;
