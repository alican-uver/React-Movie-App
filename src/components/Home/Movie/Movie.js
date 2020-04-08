import React, { Component } from 'react';
import { BASE_URL,API_KEY } from '../../../config';
import Spinner from '../Spinner/Spinner';
import MovieInfo from '../MovieInfo/MovieInfo';


class Movie extends Component {

    state = {
        movie: [],
        loader: false,
        actors: null,
        directors: null
    }

    
    componentDidMount() {
        console.log(this.props);
        let endPoint = `${BASE_URL}/movie/${this.props.match.params.movieId}?api_key=${API_KEY}`;
        this.getMovieWithId(endPoint)
    }
    
    getMovieWithId = endPoint => {
        fetch(endPoint)
        .then(response => response.json())
        .then((movies) => {
            console.log(movies)

            if (movies.status_code) { // For error the request
                this.setState({
                    loader: false
                })
            }
            else { // İf success the request
                this.setState({ movies }, () => {
                    let endPoint = `${BASE_URL}/movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
                    fetch(endPoint)
                    .then(response => response.json())
                    .then((credits) => {
                        console.log(credits)
                        const filterDirector = credits.crew.filter(person => person.job === "Director"); // filter directors from all employees
                        console.log(filterDirector)
                        this.setState({
                            actors: credits.cast,
                            directors: filterDirector,
                            loader: false     
                        })
                    })
                })
            }
        })
    }
  
    render() {
        console.log(this.state)
        return (
            <div>
            <MovieInfo />
            <Spinner />
            </div>
        )
    }
}

export default Movie;