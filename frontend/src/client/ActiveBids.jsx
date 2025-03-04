import { useEffect, useState } from "react";
import axios from "axios";
import { CalendarCheck, CloudLightning } from "lucide-react";

const ActiveBids = () => {
  const [cars, setCars] = useState([]);
  const [bookedCars, setBookedCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/rental/userRental"
      );
      const rentals = response.data.data;

      console.log("Received carData:", rentals);

      setCars(rentals);

      const bookedCars = rentals.filter(
        (rental) => rental.CarDetails.bookingStatus === "Pending"
      );

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
    <div className="!p-8 dark:bg-black bg-white min-h-screen">
      <h1 className="dark:text-white text-2xl font-bold mb-6">Active Bids</h1>
      <p className="dark:text-gray-500">Your Pending cars will show here...</p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {bookedCars.map((car, index) => (
          <div
            key={index}
            className="relative p-4 bg-[#f9f9f9] text-black dark:text-white dark:bg-[#1d1b30] rounded-xl !p-4"
          >
            <img
              className="w-full object-contain h-[300px] rounded-md"
              alt="Car Image"
              src={car.CarDetails.carImageURL}
            />
            <h2 className="text-lg font-semibold mt-3">
              {car.CarDetails.model}
            </h2>
            <div className="flex justify-between mt-2">
              <p className="flex items-center gap-2">
                <CloudLightning />
                {car.CarDetails.speed} kmph
              </p>
              <p className="flex items-center gap-2">
                <CalendarCheck />
                {new Date(car.CarDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveBids;
