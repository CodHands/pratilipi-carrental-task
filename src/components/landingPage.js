import React, { useContext } from 'react';
import DatePicker from './dateRangePicker';
import SelectLocation from './selectLocation';
import carRentalContext from '../context'

const LandingPage = () => {

    const { locationList, handleDayChange, handleLocationChange } = useContext(carRentalContext);

    return (
        <div>
            {locationList.length ? (
                <div className="homepage">
                    <div className="row">
                        <SelectLocation location={locationList} getLocation={handleLocationChange} />
                        <DatePicker handleDayChange={handleDayChange} />
                    </div>
                    <button>Submit</button>
                </div>

            ) : null}
        </div>
    )
}

export default LandingPage;
