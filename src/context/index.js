import React from 'react'

export default React.createContext({
    carsData: [],
    locationList: [],
    selectedDay: '',
    selectedLocation: '',
    handleDayChange: () => { },
    handleLocationChange: () => { }
})