import React, { useState, useEffect } from 'react';
import { BASE_URI } from './services'

import LandingPage from './components/landingPage';
import SearchResults from './components/searchResults';
import PageNotFound from './components/pageNotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//context
import CarRentalContext from './context'
let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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

  const handleDayChange = (selectedDate) => {
    let day = isNaN(selectedDate.getDay()) ? null : weekDays[selectedDate.getDay()];
    setSelectedDay(day)
    console.log(selectedDay);
  }

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    console.log(selectedLocation);
  }

  return (
    <div className="App">
      <CarRentalContext.Provider value={{
        carsData: data, selectedDay, selectedLocation,
        locationList, handleDayChange, handleLocationChange
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
