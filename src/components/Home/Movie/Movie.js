import React, { Component } from 'react';
import { BASE_URL,API_KEY } from '../../../config';
import Spinner from '../Spinner/Spinner';
import MovieInfo from '../MovieInfo/MovieInfo';


class Movie extends Component {
    render() {
        return (
            <div>
            <MovieInfo />
            <Spinner />
            </div>
        )
    }
}

export default Movie;