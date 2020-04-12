import React, { Component } from 'react';
import { BASE_URL, API_KEY } from '../../config';
import Spinner from '../elements/Spinner/Spinner';
import MovieInfo from '../elements/MovieInfo/MovieInfo';


class Movie extends Component {

    state = {
        movie: [],
        loading: false,
        actors: [],
        directors: []
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        
        let moviesEndPoint = `${BASE_URL}/movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=tr`
        let creditsEndPoint = `${BASE_URL}/movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
        this.getMovieWithId(moviesEndPoint);
        this.getDirectorsAndActors(creditsEndPoint);
    }

    getMovieWithId = moviesEndPoint => {
        fetch(moviesEndPoint)
            .then(response => response.json())
            .then((movie) => {
                // console.log(movie);

                if (movie.overview !== "" && !movie.status_code) {
                    this.setState({
                        movie,
                        loading: false
                    })
                }
                else { // if have not turkish overview fetch this 
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

    getDirectorsAndActors = creditsEndPoint => {
        fetch(creditsEndPoint)
            .then(response => response.json())
            .then((credits) => {
                // console.log(credits)
                const filterDirector = credits.crew.filter(person => person.job === "Director"); // filter directors from all employees
                // console.log(filterDirector)
                this.setState({
                    actors: credits.cast,
                    directors: filterDirector[0].name,
                    loading: false
                })
            })
    }

    render() {
        // console.log(this.state.actors)
        return (
            <>
                {
                    this.state.loading ? <Spinner /> : null
                }
                {this.state.movie ?
                    <MovieInfo
                        movieInfo={this.state.movie}
                        actors={this.state.actors}
                        directors={this.state.directors}
                        searchWord={this.props.location.searchWord}
                    /> : null
                }

                {
                    !this.state.actors && !this.state.loading ? <h1>No Movie Found! </h1> : null
                }

            </>
        )
    }
}

export default Movie;



// state = {
//     movie: [],
//     loading: false,
//     actors: [],
//     directors: []
// }

// componentDidMount() {
//     this.setState({
//         loading: true
//     })
//     // console.log(this.props);
//     let endPoint = `${BASE_URL}/movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=tr`
//     this.getMovieWithId(endPoint);
//     this.getDirectorsAndActors();

// }

// getMovieWithId = (endPoint) => {
//     fetch(endPoint)
//         .then(response => response.json())
//         .then((movie) => {
//             // console.log(movie);

//             if (movie.overview !== "" || movie.status_code) {
//                 this.setState({
//                     movie,
//                     loading: false
//                 })
//             }
//             else {
//                 let engEndPoint = `${BASE_URL}/movie/${this.props.match.params.movieId}?api_key=${API_KEY}`
//                 fetch(engEndPoint)
//                 .then(response => response.json())
//                 .then((movie) => {
//                     this.setState({
//                         movie
//                     })
//                 })
//             }
//         })
//     }

//     getDirectorsAndActors = () => {
//     let endPoint = `${BASE_URL}/movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
//     fetch(endPoint)
//         .then(response => response.json())
//         .then((credits) => {
//             // console.log(credits)
//             const filterDirector = credits.crew.filter(person => person.job === "Director"); // filter directors from all employees
//             // console.log(filterDirector)
//             this.setState({
//                 actors: credits.cast,
//                 directors: filterDirector[0].name,
//                 loading: false
//             })
//         })
// }













//! Previous Method
// getMovieWithId = endPoint => {
//     fetch(endPoint)
//     .then(response => response.json())
//     .then((movie) => {
//         console.log(movie)

//         if (movie.status_code) { // For error the request
//             this.setState({
//                 loading: false
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