import React from 'react';
import LandingPage from './components/landingPage';
import SearchResults from './components/searchResults';
import PageNotFound from './components/pageNotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//context
import CarRentalContext from './context'

const App = () => {
  return (
    <div className="App">
      <CarRentalContext.Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/search" component={SearchResults} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </CarRentalContext.Provider>
    </div>
  );
}

export default App;
