import React, { useContext } from 'react'
import carRentalContext from '../context';

const CarFilters = ({ changeTransmission, changeCarType, changeFuelType, handleSorting }) => {
    const { carsData } = useContext(carRentalContext);

    return (
        <div className="car-filters">
            <div className="car-sort mt-2" title="sort by price" onClick={handleSorting}><img src="/images/sort.svg" width="30" alt="sort-icon" /></div>
            <div className="form-group mr-2">
                <select className="form-control" onChange={(e) => changeCarType(e)}>
                    {[...new Set(carsData.map((ln) => ln.car_Type))].map((el, i) => <option key={i}>{el}</option>)}
                </select>
            </div>
            <div className="form-group mr-2">
                <select className="form-control" onChange={(e) => changeFuelType(e)}>
                    {[...new Set(carsData.map((ln) => ln.fuel_Type))].map((el, i) => <option key={i}>{el}</option>)}
                </select>
            </div>
            <div className="form-group">
                <select className="form-control" onChange={(e) => changeTransmission(e)}>
                    {[...new Set(carsData.map((ln) => ln.transmission))].map((el, i) => <option key={i}>{el}</option>)}
                </select>
            </div>
        </div>
    )
}

export default CarFilters;
