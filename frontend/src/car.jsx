import React, { useEffect, useState } from "react";
import supra from "./img/supra.png";
import porsche from "./img/porsche.png";
import chevrolet from "./img/chevrolet.png";

import CarForm from "./SellCars";
import { Plus, Trash2, X } from "lucide-react";
import axios from "axios";
const Car = () => {
  const [isCarFormVisible, setCarFormVisible] = useState(false);

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

  const openCarForm = () => {
    setCarFormVisible(true);
  };

  const closeCarForm = () => {
    setCarFormVisible(false);
  };

  const handleDelete = () => {};

  return (
    <div className="container">
      {/* <Navbar showPlus={true} onPlusClick={openCarForm} /> */}

      <div className="second">
        <div className="booking">
          <div className="flex justify-between items-center !px-5 !py-5">
            <h2>Available Cars</h2>

            <h1 className="plus-sign" onClick={openCarForm}>
              <Plus />
              Add Car
            </h1>
          </div>
          {/* <div className="cars">
            <div className="car1 card">
              <label>Supra MK4</label>
              <a>Supra</a>
              <img src={supra} alt="Supra MK4"></img>
              <label>$510</label>
            </div>
          </div> */}
          {/* Car */}

          <div className="flex gap-6 w-full flex-wrap  ">
            {/* Car Card */}
            {availableCars.map((car) => (
              <div className="relative !p-4 bg-[#f9f9f9] text-black dark:text-white dark:bg-[#1d1b30] xl:w-[40%] rounded-xl">
                <img
                  className="w-full object-contain h-[300px]"
                  alt="car Image"
                  src={car.carImageURL}
                />

                <a
                  onClick={() => handleDelete()}
                  className="absolute top-4 right-4"
                >
                  <Trash2></Trash2>
                </a>

                <div className="flex justify-between items-center xl:h-7 !mb-3">
                  <h1 className="font-bold text-sm xl:text-xl">
                    {car.model.toUpperCase()}
                  </h1>
                  <button className="">Update</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conditional rendering of the CarForm */}
      {isCarFormVisible && (
        <div className="modal">
          <div className="modal-content w-[100%] !p-4 overflow-y-auto max-h-[80vh] xl:max-h-full ">
            <button className="close-button" onClick={closeCarForm}>
              <X />
            </button>
            <CarForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Car;
