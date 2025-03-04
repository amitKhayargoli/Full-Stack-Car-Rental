import axios from "axios";
import {
  Bookmark,
  BookMarked,
  BookmarkIcon,
  Heart,
  LucideTrash2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { addToGarage } from "./addToGarage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favorites = () => {
  const textClassNames = "dark:text-gray-50";

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Car");
        console.log(response.data.data);

        const carData = response.data.data;
        setCars(carData);
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
    <div className="w-full min-h-[100vh] bg-[#f9f9f9] dark:bg-black !px-8 !py-5">
      <div className="flex flex-col gap-[1px]">
        <h1 className="dark:text-gray-50 font-bold text-2xl ">Favorites</h1>
        <p className="dark:text-gray-50">
          Rent the best cars. <br />
          You can add them to the garage from here.
        </p>
      </div>

      <div className="!mt-2 bg-white !p-4  rounded-2xl xl:!p-5 dark:bg-[#010101]  dark:text-white">
        <h1 className="font-bold text-xl !mb-3 ">Your Favorite Cars</h1>

        {/* Car Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Car Card */}
          {cars.map((car) => (
            <div className="relative !p-4 bg-[#f9f9f9] dark:bg-[#1d1b30] rounded-xl">
              <button className="absolute right-4">
                <LucideTrash2></LucideTrash2>
              </button>
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
    </div>
  );
};

export default Favorites;
