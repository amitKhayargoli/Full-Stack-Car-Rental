import { Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ToolTip } from "./components/Tooltip";

import Tick from "./img/tick.png";
import Cross from "./img/cross.png";
import axios from "axios";
import { toast } from "react-toastify";
const AdminActiveBids = () => {
  const [cars, setCars] = useState([]);

  const [pendingCars, setPendingCars] = useState([]);

  const fetchCars = async () => {
    const response = await axios.get("http://localhost:5000/api/rental");
    const rentals = response.data.data;

    console.log("carData", rentals);
    setCars(rentals);

    const pendingCars = rentals
      .filter((rental) => rental.CarDetails.bookingStatus === "Pending")
      .map((rental) => rental);

    setPendingCars(pendingCars);
  };

  console.log(pendingCars);

  const handleBooking = async (event) => {
    const carId = event.currentTarget.getAttribute("data-car-id");

    const bookingStatus = "Booked";

    try {
      const response = await axios.put(
        `http://localhost:5000/Car/updateCarBookingStatus/${carId}`,
        { bookingStatus }
      );

      toast.success("Car Booked Successfully!");
      fetchCars();
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchCars();

    console.log("Fetched cars", cars);
  }, []);

  return (
    <div className="!p-8 dark:bg-black bg-white min-h-screen">
      <h1 className="dark:text-white text-2xl font-bold">Active Bids</h1>

      <div className="flex gap-6 w-full flex-wrap  ">
        {/* Car Card */}
        {pendingCars.map((car) => (
          <div className="relative !p-4 bg-[#f9f9f9] text-black dark:text-white dark:bg-[#1d1b30] xl:w-[40%] rounded-xl">
            <img
              className="w-full object-contain h-[300px]"
              alt="car Image"
              src={car.CarDetails.carImageURL}
            />

            <div className="flex justify-between !items-center xl:h-7 !mb-3">
              <div className="flex items-center ">
                <ToolTip
                  item={{
                    name: car.UserDetails.username,
                    image: car.UserDetails.profile?.profilePictureURL,
                  }}
                ></ToolTip>
                <h1 className="font-bold text-sm xl:text-xl !mt-3 !px-5">
                  {car.CarDetails.model.toUpperCase()}
                </h1>
              </div>

              <div className="flex gap-2 items-center">
                {/* <img className="w-10 h-10 cursor-pointer" src={Cross} alt="" /> */}
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
  );
};

export default AdminActiveBids;
