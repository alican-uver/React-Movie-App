import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import PopularTvShows from './components/PopularTvShows';
import PopularPeoples from './components/PopularPeoples';

const App = () =>  {

        return (
            <Router>          
                <div> 
                    <Home />
                    <Switch>
                        <Route exact path="/"  />
                        <Route exact path="/popTvShows" component={PopularTvShows} />
                        <Route exact path="/popPeoples" component={PopularPeoples} />
                    </Switch>
                </div>
            </Router>
        )
    
}
export default App;