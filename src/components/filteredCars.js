import React from 'react'

const FilteredCars = ({ cars }) => {

    const handleBooking = (e) => {
        let element = e.target.parentElement.parentElement.parentElement.classList
        if (element.contains('highlight-el'))
            element.remove('highlight-el');
        else {
            element.add('highlight-el');
        }
    }

    return (
        <div>
            {cars.map((car, i) => {
                return <div className="cars-box py-3 px-3 mb-3" id={i} key={i}>
                    <div className="car-photo text-center">
                        <img src={car.photo} alt="car_photo" />
                        {cars.length > 6 ?
                            <img src="http://cardsharingonline.info/not_available.png" className="unavailable-img" alt="no-available" /> : null}
                    </div>
                    <div className="car-specifications mt-3">
                        <p className="car-location mb-1"><i>{car.location}</i></p>
                        <h4>{car.name}</h4>
                        <ul>
                            <li><img src="/images/desk.svg" alt="" />{car.seats}</li>
                            <li><img src="/images/gas-station.png" alt="" />{car.fuel_Type}</li>
                            <li><img src="/images/transmission.svg" alt="" />{car.transmission}</li>
                        </ul>
                    </div>
                    <div className="car-price">
                        <div className="text-center">
                            <p className="mb-0">Total Fare</p>
                            <h4>Rs. {car.price}</h4>
                            <button onClick={(e) => handleBooking(e)} disabled={cars.length > 6}>Book Now</button>
                        </div>
                    </div>
                </div>
            })
            }
        </div>
    )
}

export default FilteredCars;
