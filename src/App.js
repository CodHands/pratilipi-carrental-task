import React, { useState, useEffect } from 'react';
import { BASE_URI } from './services'

import LandingPage from './components/landingPage';
import SearchResults from './components/searchResults';
import PageNotFound from './components/pageNotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//context
import CarRentalContext from './context'

const App = () => {

  const [data, setData] = useState([])
  const [locationList, setlocationList] = useState([])
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedDay, setSelectedDay] = useState('')

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      let response = await fetch(`${BASE_URI}`)
      let json = await response.json()
      if (json.length) {
        setData(json)
        let uniqueLocationArray = [...new Set(json.map((ln) => ln.location))];
        setlocationList(uniqueLocationArray)
      }
    } catch (e) {
      throw e;
    }
  }

  return (
    <div className="App">
      <CarRentalContext.Provider value={{
        locations: locationList, carsData: data,
        day: selectedDay, location: selectedLocation
      }}>
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
