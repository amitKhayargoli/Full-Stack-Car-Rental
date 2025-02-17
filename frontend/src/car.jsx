import React, { useState } from "react";
import supra from "./img/supra.png";
import porsche from "./img/porsche.png";
import chevrolet from "./img/chevrolet.png";

import CarForm from "./SellCars";
import { Plus, X } from "lucide-react";
const Car = () => {
  const [isCarFormVisible, setCarFormVisible] = useState(false);

  const openCarForm = () => {
    setCarFormVisible(true);
  };

  const closeCarForm = () => {
    setCarFormVisible(false);
  };

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

          <div className="!p-4 bg-[#f9f9f9] dark:bg-[#1d1b30] xl:w-[40%] rounded-xl">
            <img
              className="w-full object-contain h-[300px]"
              alt="car Image"
              // src={car.carImageURL}
              // src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg"
              src="https://pngimg.com/d/porsche_PNG10622.png"
            />

            <div className="flex justify-between items-center xl:h-7 !mb-3">
              <h1 className="font-bold text-sm xl:text-xl">
                {/* {car.model.toUpperCase()} */}
                Lamorghini
              </h1>
              {/* <a onClick={handleAddToGarage} 
                data-car-id={car.carId}>
                  <Button title="Add to Garage" />
                </a> */}
            </div>
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
