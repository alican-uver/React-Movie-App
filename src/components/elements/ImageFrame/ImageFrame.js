import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ImageFrame.css';
 

const ImageFrame = ({ movieId, movieName, searchWord, image, personMovieId, clickable }) => {

    return (
        <div className = "col-sm-3 mt-5 animated fadeInLeftBig ">
            { clickable ?
                <Link to={{ pathname: `${movieId}`, movieName: `${movieName}`, searchWord: `${searchWord}` }}>
                    <Card className = "card-box image-frame  ">
                        <Card.Img variant="top" src={image} alt="movieImg" />
                    </Card>
                </Link>
                : 
                <Link to = {{pathname: `/${personMovieId}`}}>
                <Card className = "bg-dark text-light card-box  image-frame " style = {{maxHeight: "500px"}}>
                    <Card.Img variant="top" src={image} alt="movieImg" />
                </Card>
                </Link>
            }            
        </div>
    )
}

ImageFrame.propTypes = {
    image : PropTypes.string,
    movieId : PropTypes.number, 
    movieName : PropTypes.string,
    searchWord : PropTypes.string,
    id : PropTypes.number,
    clickable: PropTypes.bool
}

export default ImageFrame;
