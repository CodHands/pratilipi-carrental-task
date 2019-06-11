import React, { useEffect, useState, useContext } from 'react';
import { BASE_URI } from '../services'
import DatePicker from './dateRangePicker';
import SelectLocation from './selectLocation';
import carRentalContext from '../context'

let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const LandingPage = () => {

    const context = useContext(carRentalContext)

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
    }

    const getLocation = (e) => {
        setSelectedLocation(e.target.value);
    }

    return (
        <div>
            {data.length ? (
                <div className="homepage">
                    <div className="row">
                        <SelectLocation location={locationList} getLocation={getLocation} />
                        <DatePicker handleDayChange={handleDayChange} />
                    </div>
                    <button>Submit</button>
                </div>

            ) : null}
        </div>
    )
}

export default LandingPage;
