import axios from "axios";
import { Bookmark, BookmarkIcon, Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToGarage } from "./addToGarage";

import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "../components/AnimatedModal";

const Listings = () => {
  const textClassNames = "dark:text-gray-50";

  const [cars, setCars] = useState([]);
  const [availableCars, setAvailableCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Car");
        console.log(response.data.data);

        const carData = response.data.data;

        setAvailableCars(
          carData.filter((car) => car.bookingStatus === "Available")
        );
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, []);

  const handleAddToGarage = (event) => {
    const carId = event.currentTarget.getAttribute("data-car-id");

    addToGarage(carId);
  };

  return (
    <div className="w-full min-h-[100vh] bg-[#f9f9f9] dark:bg-black !px-5 xl:!px-8 !py-5">
      <div className="flex flex-col gap-[1px]">
        <h1 className="dark:text-gray-50 font-bold text-2xl ">Listings</h1>
        <p className="dark:text-gray-50">Rent the latest cars.</p>
      </div>

      <div className="!mt-2 bg-white !p-4  rounded-2xl xl:!p-5 dark:bg-[#010101]  dark:text-white">
        <h1 className="font-bold text-xl !mb-3 ">Available Cars</h1>

        {/* Car Section */}

        <div className="flex gap-6 w-full flex-wrap ">
          {/* Car Card */}
          {availableCars.map((car) => (
            <div className="!p-4 bg-[#f9f9f9] dark:bg-[#1d1b30] xl:w-[40%] rounded-xl">
              <img
                className="w-full object-contain h-[300px]"
                alt="car Image"
                src={car.carImageURL}
                // src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg"
                // src="https://pngimg.com/d/porsche_PNG10622.png"
              />

              <div className="flex justify-between items-center xl:h-7 !mb-3">
                <h1 className="font-bold text-sm xl:text-xl">
                  {car.model.toUpperCase()}
                </h1>
                <a onClick={handleAddToGarage} data-car-id={car.carId}>
                  <Button title="Add to Garage" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ToastContainer className="!mt-22 !mx-5 !w-[90%] xl:w-full" />
    </div>
  );
};

export default Listings;
