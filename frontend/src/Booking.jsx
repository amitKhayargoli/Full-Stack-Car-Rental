import "./Booking.css";
import supra from "./img/supra.png";
import porsche from "./img/porsche.png";
import chevrolet from "./img/chevrolet.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Booking = () => {
  const [cars, setCars] = useState([]);

  const [bookedCars, setBookedCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/rental");
      const carData = response.data.data;

      console.log("Received carData:", carData);

      setCars(carData);

      const bookedCars = carData.filter((car) => {
        console.log("Car bookingStatus:", car.carDetails.bookingStatus);
        return car.bookingStatus === "Booked";
      });

      setBookedCars(bookedCars);
      console.log("Filtered booked cars:", bookedCars);
    } catch (error) {
      console.error("Failed to fetch car data:", error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);
  return (
    <div className="container">
      <div className="second ">
        <div className="booking w-full">
          <div className="flex justify-between items-center !px-5 !py-5">
            <h2>Booking</h2>

            <div className="flex gap-6 w-full flex-wrap  ">
              {/* Car Card */}
              {bookedCars.map((car) => (
                <div className="relative !p-4 bg-[#f9f9f9] text-black dark:text-white dark:bg-[#1d1b30] xl:w-[40%] rounded-xl">
                  <img
                    className="w-full object-contain h-[300px]"
                    alt="car Image"
                    src={car.CarDetails.carImageURL}
                  />

                  <div className="flex justify-between !items-center xl:h-7 !mb-3">
                    <div className="flex items-center ">
                      <h1 className="font-bold text-sm xl:text-xl !mt-3 !px-5">
                        {car.CarDetails.model.toUpperCase()}
                      </h1>
                    </div>

                    <div className="flex gap-2 items-center">
                      <img
                        className="w-10 h-10 cursor-pointer"
                        src={Cross}
                        alt=""
                      />
                      <img
                        data-car-id={car.carId}
                        onClick={(event) => handleBooking(event)}
                        className="w-12 cursor-pointer"
                        src={Tick}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
