import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CarFilters from './filters';
import FilteredCars from './filteredCars';
import Pagination from "react-js-pagination";
import GlobalContext from '../context';

const SearchResults = () => {
    const { selectedDay, selectedLocation, carsData } = useContext(GlobalContext)
    const [filteredCars, setFilteredCars] = useState([])
    const [selectedCars, setSelectedCars] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [sorting, setSorting] = useState(true)

    useEffect(() => {
        const updated_cars = carsData.filter((car) => car.availability.includes(selectedDay) && car.location === selectedLocation);
        setSelectedCars(updated_cars);
        setFilteredCars(updated_cars)
    }, [])

    const handleFuelTypeChange = (e) => {
        const cars = filteredCars.filter((car) => car.fuel_Type === e.target.value);
        setSelectedCars(cars)
    }

    const handleCarTypeChange = (e) => {
        const cars = filteredCars.filter((car) => car.car_Type === e.target.value);
        setSelectedCars(cars)
    }

    const handleTransmission = (e) => {
        const cars = filteredCars.filter((car) => car.transmission === e.target.value);
        setSelectedCars(cars)
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleSearch = (e) => {
        let searchedCars = filteredCars.filter((car) => {
            let objValues = Object.values(car).toString().toLowerCase();
            if (objValues.includes(e.target.value.toLowerCase()))
                return car
            return null
        })
        setSelectedCars(searchedCars);
    }

    const sortCarsByPrice = () => {
        let updatedSorting = !sorting;
        setSorting(updatedSorting);
        let sorted = selectedCars.sort((car1, car2) => {
            if (sorting)
                return car1.price - car2.price
            else
                return car2.price - car1.price
        });
        setSelectedCars(sorted)
    }

    const paginatedCars = () => {
        const lastIndex = currentPage * 6;
        const firstIndex = lastIndex - 6;
        const updatedCars = selectedCars.slice(firstIndex, lastIndex);

        if (updatedCars.length) {
            return printCars(updatedCars);
        } else {
            return <div className="py-3">
                <h4 className="text-center">We're Sorry!</h4>
                <p className="text-center">We can't seem to find any car that matches your search.</p>
                <hr />
                {printCars(carsData.slice(0, 10))}
            </div>
        }
    }

    const printCars = (cars) => {
        return <FilteredCars cars={cars} />
    }

    return (
        <div className="py-5">
            {carsData.length ?
                (
                    <div className="cars-container ">
                        <Link to="">
                            <h4 className="text-center title">PRATILIPI CAR RENTALS</h4>
                        </Link>
                        <CarFilters
                            changeCarType={handleCarTypeChange}
                            changeFuelType={handleFuelTypeChange}
                            changeTransmission={handleTransmission}
                            handleSorting={sortCarsByPrice}
                            handleSearch={handleSearch}
                        />
                        {paginatedCars()}
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={6}
                            totalItemsCount={selectedCars.length}
                            onChange={handlePageChange}
                        />
                    </div>) : <div className="spinner-loader">
                    <img src="/images/loading.gif" alt="loading" />
                </div>}
        </div>
    )
}

export default SearchResults;