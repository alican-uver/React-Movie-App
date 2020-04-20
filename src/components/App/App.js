import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import FavouriteMovies from '../FavouriteMovies/FavouriteMovies';
import PopularPeoples from '../PopularPeoples';
import Navi from '../Navi/Navi';
import Movie from '../Movie/Movie';
import NotFound from '../NotFound/NotFound';
import ScrollTop from '../elements/ScrollTop/ScrollTop';
import PersonInfo from '../PersonInfo/PersonInfo';
import alertify from 'alertifyjs';
import { addLocalStorage, removeMovieFromStorage  } from '../../Functions/StorageFunctions/storageFunctions';

class App extends Component {

    state = {
        favouriteMovies: [],
        // isSameMovie: false,
        loadMovies: false
    }

    componentDidMount() {
        if (localStorage.getItem("favouriteMovies")) { // First Contact this App 
          let movies = JSON.parse(localStorage.getItem('favouriteMovies'));
          this.setState({
            ...this.state,
            favouriteMovies : movies,
            loadMovies : true
          }, () => console.log(this.state))
        }
      }

    getFavouriteMovies = favouritesMovie => {
        const stateMovies = this.state.favouriteMovies;
        const addedMovie = stateMovies.find(movie => movie.id === favouritesMovie.id);
        if (!addedMovie) {
            this.setState({
                ...this.state,
                favouriteMovies: [...stateMovies, favouritesMovie],
            })
            addLocalStorage(favouritesMovie)
            alertify.success("Film Başarı İle Eklendi", 2)
        }
        else {
            alertify.error("Bu film zaten listenizde bulunuyor", 2)

        }
    }

    clearFavouriteMovie = id => {
        const filterMovie = this.state.favouriteMovies.filter(movie => movie.id !== id);
        this.setState({
            favouriteMovies: filterMovie
        })
        alertify.success(" Bu Film Başarı İle Silindi", 2)
        removeMovieFromStorage(id)
    }

    clearAllFavouriteMovies = () => {
        this.setState({
            favouriteMovies: []
        })
        if (this.state.favouriteMovies.length) {
            alertify.success(" Bütün Filmler Başarı İle Silindi", 2)
        }

        localStorage.removeItem("favouriteMovies");
    }


    render() {

        const { favouriteMovies, loadMovies } = this.state;

        return (
            <Router>
                <ScrollTop>
                    <React.Fragment>
                        <Navi />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/favourites"
                                render={
                                    props => (
                                        <FavouriteMovies
                                            {...props}
                                            favouriteMovies={favouriteMovies}
                                            clearAllFavouriteMovies={this.clearAllFavouriteMovies}
                                            clearFavouriteMovie={this.clearFavouriteMovie}
                                            loadMovies={loadMovies}
                                        />
                                    )
                                }
                            />
                            <Route exact path="/popPeoples" component={PopularPeoples} />
                            <Route exact path="/movie/:movieId"
                                render={
                                    props => (
                                        <Movie
                                            {...props}
                                            getFavouriteMovies={this.getFavouriteMovies}
                                            // isSameMovie = {this.state.isSameMovie}
                                        />
                                    )
                                }
                            />
                            <Route exact path="/person/:personId" component={PersonInfo} />
                            <Route component={NotFound} />
                        </Switch>
                    </React.Fragment>
                </ScrollTop>
            </Router>
        )
    }

}
export default App;



 // addLocalStorage = movie => {
    //     let movies = this.getMovieFromStorage();

    //     movies.push(movie)
    
    //     localStorage.setItem('favouriteMovies', JSON.stringify(movies))
    
    // }

    // getMovieFromStorage = () => {
    //     let movies;
    //     if (localStorage.getItem('favouriteMovies') === null ) {
    //         movies = []
    //     }
    //     else {
    //         movies = JSON.parse(localStorage.getItem('favouriteMovies'))
    //     }

    //     return movies;
    // }


        // removeMovieFromStorage = id => {
    //     let movies = this.getMovieFromStorage();
    //     movies.forEach(function(movie, index) {
    //         if (movie.id === id) {
    //             movies.splice(index, 1)
    //         }
    //     })
    //     localStorage.setItem("favouriteMovies", JSON.stringify(movies))
    // }