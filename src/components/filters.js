import React, { useContext } from 'react'
import GlobalContext from '../context';

const CarFilters = ({ changeTransmission, changeCarType, changeFuelType, handleSorting, handleSearch }) => {
    const { carsData } = useContext(GlobalContext);

    return (
        <div className="car-filters row mb-2">
            <div className="form-group col-md-3 col-sm-6 col-sx-6">
                <select className="form-control" defaultValue="" onChange={(e) => changeCarType(e)}>
                    <option value="" disabled>----Select Car Type----</option>
                    {[...new Set(carsData.map((ln) => ln.car_Type))].map((el, i) => <option key={i}>{el}</option>)}
                </select>
            </div>
            <div className="form-group col-md-3 col-sm-6 col-sx-6">
                <select className="form-control" defaultValue="" onChange={(e) => changeFuelType(e)}>
                    <option value="" disabled>----Select Fuel Type----</option>
                    {[...new Set(carsData.map((ln) => ln.fuel_Type))].map((el, i) => <option key={i}>{el}</option>)}
                </select>
            </div>
            <div className="form-group col-md-3 col-sm-6 col-sx-6">
                <select className="form-control" defaultValue="" onChange={(e) => changeTransmission(e)}>
                    <option value="" disabled>----Select Transmission----</option>
                    {[...new Set(carsData.map((ln) => ln.transmission))].map((el, i) => <option key={i}>{el}</option>)}
                </select>
            </div>
            <div className="car-sort col-md-3 col-sm-6 col-sx-6" title="sort by price">
                <input type="text" className="search-box" onKeyUp={(e) => handleSearch(e)} placeholder="Search your car" />
                <img src="/images/sort.svg" width="30" alt="sort-icon" onClick={handleSorting} />
            </div>
        </div>
    )
}

export default CarFilters;
