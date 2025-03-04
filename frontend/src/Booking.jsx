import "./Booking.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToolTip } from "./components/Tooltip";

const Booking = () => {
  const [bookedCars, setBookedCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/rental");
      const rentals = response.data.data;
      console.log("Received carData:", rentals);

      const bookedCars = rentals.filter(
        (rental) => rental.CarDetails.bookingStatus === "Booked"
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
      <h1 className="dark:text-white text-2xl font-bold">Bookings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookedCars.map((car) => (
          <div
            key={car.carId}
            className="relative !p-4 bg-[#f9f9f9] text-black dark:text-white dark:bg-[#1d1b30] rounded-xl"
          >
            <img
              className="w-full object-contain h-[300px]"
              alt="car Image"
              src={car.CarDetails.carImageURL}
            />

            <div className="flex justify-between !items-center xl:h-7 !mb-3">
              <div className="flex items-center">
                <ToolTip
                  item={{
                    name: car.UserDetails.username,
                    image: car.UserDetails.profile.profilePictureURL,
                  }}
                />
                <h1 className="font-bold text-sm xl:text-xl !mt-3 !px-5">
                  {car.CarDetails.model.toUpperCase()}
                </h1>
              </div>
            </div>

            <div className="mt-3 text-sm xl:text-base ">
              <h1>
                <strong>Booked Date:</strong>{" "}
                {new Date(car.CarDetails.createdAt).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
              </h1>
              <h1>
                <strong>Return Date:</strong>{" "}
                {new Date(
                  new Date(car.CarDetails.createdAt).setDate(
                    new Date(car.CarDetails.createdAt).getDate() +
                      car.rentalDays
                  )
                ).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
