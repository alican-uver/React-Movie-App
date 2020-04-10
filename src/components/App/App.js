import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import PopularTvShows from '../PopularTvShows';
import PopularPeoples from '../PopularPeoples';
import Navi from '../Navi/Navi';
import Movie from '../Movie/Movie';
import NotFound from '../NotFound/NotFound';
import ScrollTop from '../elements/ScrollTop/ScrollTop';


const App = () => {

    return (
        <Router>
            <ScrollTop>
            <React.Fragment>
                <Navi />
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route exact path="/popTvShows" component={PopularTvShows} />
                    <Route exact path="/popPeoples" component={PopularPeoples} />
                    <Route exact path = "/:movieId" component = {Movie} />
                    <Route component = {NotFound} />
                </Switch>
            </React.Fragment>
            </ScrollTop>
        </Router>
    )

}
export default App;