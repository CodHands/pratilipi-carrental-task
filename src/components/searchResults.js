import React, { useContext, useEffect, useState } from 'react';
import CarFilters from './filters';
import Pagination from "react-js-pagination";
import carRentalContext from '../context';

const SearchResults = () => {
    const { selectedDay, selectedLocation, carsData } = useContext(carRentalContext)
    const [filteredCards, setFilteredCards] = useState([])
    const [selectedCars, setSelectedCars] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [sorting, setSorting] = useState(true)

    useEffect(() => {
        const updated_cars = carsData.filter((car) => car.availability.includes(selectedDay) && car.location === selectedLocation);
        setSelectedCars(updated_cars);
        setFilteredCards(updated_cars)
    }, [])

    const handleFuelTypeChange = (e) => {
        const cars = filteredCards.filter((car) => car.fuel_Type === e.target.value);
        setSelectedCars(cars)
    }

    const handleCarTypeChange = (e) => {
        const cars = filteredCards.filter((car) => car.car_Type === e.target.value);
        setSelectedCars(cars)
    }

    const handleTransmission = (e) => {
        const cars = filteredCards.filter((car) => car.transmission === e.target.value);
        setSelectedCars(cars)
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
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
            return updatedCars.map((car, i) => {
                return <div className="cars-box py-3 px-3 mb-3" key={i}>
                    <div className="car-photo">
                        <img src={car.photo} alt="car_photo" />
                    </div>
                    <div className="car-specifications mt-3">
                        <p className="car-location mb-1"><i>{car.location}</i></p>
                        <h4>{car.name}</h4>
                        <ul>
                            <li>{car.seats}</li>
                            <li>{car.fuel_Type}</li>
                            <li>{car.transmission}</li>
                        </ul>
                    </div>
                    <div className="car-price">
                        Rs. {car.price}
                    </div>
                </div>
            });
        } else {
            return <div className="text-center py-3">
                <h4>We're Sorry!</h4>
                <p>We can't seem to find any cars that matches your search.</p>
            </div>
        }
    }

    return (
        <div className="cars-container py-5">
            <CarFilters
                changeCarType={handleCarTypeChange}
                changeFuelType={handleFuelTypeChange}
                changeTransmission={handleTransmission}
                handleSorting={sortCarsByPrice}
            />
            {paginatedCars()}
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={6}
                totalItemsCount={selectedCars.length}
                onChange={handlePageChange}
            />
        </div>
    )
}

export default SearchResults;