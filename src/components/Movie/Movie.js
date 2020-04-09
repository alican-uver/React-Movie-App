import React, { Component } from 'react';
import { BASE_URL, API_KEY } from '../../config';
import Spinner from '../elements/Spinner/Spinner';
import MovieInfo from '../elements/MovieInfo/MovieInfo';



class Movie extends Component {

    state = {
        movie: [],
        loader: false,
        actors: [],
        directors: []
    }

    componentDidMount() {
        console.log(this.props);
        let endPoint = `${BASE_URL}/movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=tr`
        this.getMovieWithId(endPoint);
        this.getDirectorsAndActors();
    }

    getMovieWithId = (endPoint) => {
        fetch(endPoint)
            .then(response => response.json())
            .then((movie) => {
                console.log(movie);
                
                if (movie.overview !== "") {
                    this.setState({
                        movie
                    })
                }
                else {
                    let engEndPoint = `${BASE_URL}/movie/${this.props.match.params.movieId}?api_key=${API_KEY}`
                    fetch(engEndPoint)
                    .then(response => response.json())
                    .then((movie) => {
                        this.setState({
                            movie
                        })
                    })
                }
            })
        }

        getDirectorsAndActors = () => {
        let endPoint = `${BASE_URL}/movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
        fetch(endPoint)
            .then(response => response.json())
            .then((credits) => {
                console.log(credits)
                const filterDirector = credits.crew.filter(person => person.job === "Director"); // filter directors from all employees
                console.log(filterDirector)
                this.setState({
                    actors: credits.cast,
                    directors: filterDirector[0].name,
                    loader: false
                })
            })
    }

    render() {
        return (
            <div>
                <MovieInfo
                    movieInfo={this.state.movie}
                    actors={this.state.actors}
                    directors={this.state.directors}
                />
                <Spinner />
            </div>
        )
    }
}

export default Movie;



//! Previous Method
// getMovieWithId = endPoint => {
//     fetch(endPoint)
//     .then(response => response.json())
//     .then((movie) => {
//         console.log(movie)

//         if (movie.status_code) { // For error the request
//             this.setState({
//                 loader: false
//             })
//         }
//         else { // İf success the request
//             this.setState({ movie }, () => {
//                 let endPoint = `${BASE_URL}/movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
//                 fetch(endPoint)
//                 .then(response => response.json())
//                 .then((credits) => {
//                     console.log(credits)
//                     const filterDirector = credits.crew.filter(person => person.job === "Director"); // filter directors from all employees
//                     console.log(filterDirector)
//                     this.setState({
//                         actors: credits.cast,
//                         directors: filterDirector[0].name,
//                         loader: false     
//                     })
//                 })
//             })
//         }
//     })
// }