import React, { useEffect, useState } from "react";
import supra from "./img/supra.png";
import porsche from "./img/porsche.png";
import chevrolet from "./img/chevrolet.png";

import CarForm from "./SellCars";
import { Pencil, Plus, Trash2, X } from "lucide-react";
import axios from "axios";
const Car = () => {
  const [isCarFormVisible, setCarFormVisible] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const [cars, setCars] = useState([]);
  const [availableCars, setAvailableCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:5000/Car");
      console.log(response.data.data);

      const carData = response.data.data;
      setCars(carData);
      setAvailableCars(
        carData.filter((car) => car.bookingStatus === "Available")
      );
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const openCarForm = (car) => {
    setCarFormVisible(true);
    setSelectedCar(car);
  };

  const closeCarForm = () => {
    setCarFormVisible(false);
  };

  const handleDelete = async (carId) => {
    try {
      if (!carId) {
        console.error("Invalid carId");
        return;
      }

      const response = await axios.delete(`http://localhost:5000/Car/${carId}`);
      console.log("Car deleted:", response.data);
      fetchCars();
    } catch (error) {
      console.error(
        "Error deleting car:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const buttonClassNames =
    "hover:scale-105 transition  duration-300 ease-in hover:bg-[#292972]";
  return (
    <div className="!p-8 dark:bg-black bg-white min-h-screen">
      <div className="flex justify-between items-center !px-5 !py-5">
        <h2 className="text-black dark:text-white">Available Cars</h2>

        <h1
          className={`plus-sign dark:text-white ${buttonClassNames}`}
          onClick={openCarForm}
        >
          <Plus />
          Add Car
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ">
        {/* Car Card */}
        {availableCars.map((car) => (
          <div className="relative !p-4 bg-[#f9f9f9] text-black dark:text-white dark:bg-[#1d1b30]  rounded-xl">
            <img
              className="w-full object-contain h-[300px]"
              alt="car Image"
              src={car.carImageURL}
            />

            <a
              onClick={() => handleDelete(car.carId)}
              className="absolute top-4 right-4"
            >
              <Trash2 className="text-red-500"></Trash2>
            </a>

            <div className="flex justify-between items-center xl:h-7 !mb-3">
              <h1 className="font-bold text-sm xl:text-xl">
                {car.model.toUpperCase()}
              </h1>
              <button
                onClick={() => openCarForm(car)}
                className={`cursor-pointer text-lg bg-[#4545bf] !p-1 !px-4 rounded-xl dark:text-white ${buttonClassNames}`}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Conditional rendering of the CarForm */}
      {isCarFormVisible && (
        <div className="modal">
          <div className="modal-content w-[100%] !p-4 overflow-y-auto max-h-[80vh] xl:max-h-full ">
            <button className="close-button" onClick={closeCarForm}>
              <X />
            </button>
            <CarForm
              onClose={closeCarForm}
              fetchCars={fetchCars}
              car={selectedCar}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Car;
