import React from 'react';
import { VIDEO_URL } from '../../../config';
import Iframe from 'react-iframe';
import { Carousel } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import './MovieVideos.css';


const MovieVideos = ({movieVideos}) => {
    return (
        <React.Fragment>
            {
                movieVideos.length &&
                <PageTitle title = "fragmanlar" />
            }
            <Carousel
                className = "w-75 m-auto  carousel-container shadow-lg"
                indicators = {movieVideos.length > 1 ? true : false}
                controls = {movieVideos.length > 1 ? true : false}
                
            >
                {
                movieVideos.map((video, i) => {
                    return (
                        <Carousel.Item key = {i}
                        >
                        <Iframe
                            url = {`${VIDEO_URL}${video.key}`}
                            controls = {true}
                            allowFullScreen
                            className = "d-block w-100"
                            height = "400px"
                            width = "100%"
                            frameBorder = "0"
                            overflow
                        />
                        </Carousel.Item>
                    )
                })
            }
            </Carousel>
        </React.Fragment>
    )
}

export default MovieVideos;
