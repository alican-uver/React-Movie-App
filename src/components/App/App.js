import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import FavouriteMovies from '../FavouriteMovies/FavouriteMovies';
import PopularPeoples from '../PopularPeoples';
import Navi from '../Navi/Navi';
import Movie from '../Movie/Movie';
import NotFound from '../NotFound/NotFound';
import ScrollTop from '../elements/ScrollTop/ScrollTop';
import PersonInfo from '../PersonInfo/PersonInfo';

const App = () => {

    return (
        <Router>
            <ScrollTop>
            <React.Fragment>
                <Navi />
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route exact path="/favourites" component={FavouriteMovies} />
                    <Route exact path="/popPeoples" component={PopularPeoples} />
                    <Route exact path = "/movie/:movieId" component = {Movie} />
                    <Route exact path = "/person/:personId" component = {PersonInfo} />
                    <Route component = {NotFound} />
                </Switch>
            </React.Fragment>
            </ScrollTop>
        </Router>
    )

}
export default App;