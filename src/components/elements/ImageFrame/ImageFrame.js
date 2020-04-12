import React from 'react';
import { Col, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
 
const ImageFrame = (props) => {

    // console.log(props.id)

    return (
        <div className = "col-sm-3 mt-5 fadeEffect">
            {props.clickable ?
                <Link to={{ pathname: `${props.movieId}`, movieName: `${props.movieName}`, searchWord: `${props.searchWord}` }}>
                    <Card  >
                        <Card.Img variant="top" src={props.image} alt="movieImg" />
                    </Card>
                </Link>
                : 
                <Link to = {{pathname : `/${props.id}`}}>
                <Card className = "bg-dark text-light" style = {{maxHeight: "500px"}}>
                    <Card.Img variant="top" src={props.image} alt="movieImg" />
                </Card>
                </Link>
            }            
        </div>
    )
}

ImageFrame.propTypes = {
    image : PropTypes.string,
    movieId : PropTypes.number, 
    movieName : PropTypes.string 
}

export default ImageFrame;


// <Card.Body>
//                         <Card.Text>
//                             <p> Adı: {props.name} </p>
//                         </Card.Text>
//                     </Card.Body>