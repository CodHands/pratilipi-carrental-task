import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DayPicker from './dayPicker';
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
                        <DayPicker handleDayChange={handleDayChange} />
                        <div className="col-md-3 col-sm-3 mt-1">
                            <Link to='/search'>
                                <button>Submit</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : <div className="spinner-loader">
                    <img src="/images/loading.gif" alt="loading" />
                </div>}
        </div>
    )
}

export default LandingPage;
