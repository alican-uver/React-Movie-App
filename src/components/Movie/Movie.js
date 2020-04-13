import React, { Component } from 'react';
import { BASE_URL, API_KEY } from '../../config';
import Spinner from '../elements/Spinner/Spinner';
import MovieInfo from '../elements/MovieInfo/MovieInfo';


class Movie extends Component {

    state = {
        movie: [],
        loading: false,
        actors: [],
        directors: [],
        visible : 6 // This state is for how many actors rendered. 
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

    loadMore = () => {  // Don't hit me because of this code I wrote :)
        this.setState({
            loading : true
        })

        setTimeout(() => {
            this.setState({
                visible : this.state.visible + 6,
                loading: false
            })
        }, 500);
        
    }

    render() {
            const { movie, loading, actors, directors, visible } = this.state
            const { location } = this.props
        return (
            <>
                {
                    loading ? <Spinner /> : null
                }
                {this.state.movie ?
                    <MovieInfo
                        movieInfo={movie}
                        actors={actors}
                        directors={directors}
                        searchWord={location.searchWord}
                        visible = {visible}
                        loadMore = {this.loadMore}
                        loading = {loading}
                    /> : null
                }

                {
                    !actors && !loading ? <h1>Film Bulunamadı! </h1> : null
                }

            </>
        )
    }
}

export default Movie;
