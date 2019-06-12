import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from './dateRangePicker';
import SelectLocation from './selectLocation';
import GlobalContext from '../context'

const LandingPage = () => {

    const { locationList, handleDayChange, handleLocationChange } = useContext(GlobalContext);

    return (
        <div>
            {locationList.length ? (
                <div className="homepage">
                    <h4 className="text-center title">PRATILIPI CAR RENTALS</h4>
                    <div className="row">
                        <SelectLocation location={locationList} getLocation={handleLocationChange} />
                        <DatePicker handleDayChange={handleDayChange} />
                        <div className="col-md-3 col-sm-3 mt-1">
                            <Link to='/search'>
                                <button>Submit</button>
                            </Link>
                        </div>
                    </div>
                </div>

            ) : null}
        </div>
    )
}

export default LandingPage;
