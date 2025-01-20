import React, { useState } from "react";
import supra from "./supra.png";
import porsche from "./porsche.png";
import chevrolet from "./chevrolet.png";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CarForm from "./SellCars";

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
      <Navbar showPlus={true} onPlusClick={openCarForm} />
      <div className="second">
        <Sidebar />
        <div className="booking">
          <h2>Available Cars</h2>
          <div className="cars">
            <div className="car1 card">
              <label>Supra MK4</label>
              <a>Supra</a>
              <img src={supra} alt="Supra MK4"></img>
              <label>$100,000</label>
            </div>

            <div className="car2 card">
              <label>Porsche 911 GT3 RS</label>
              <a>Porsche</a>
              <img src={porsche} alt="Porsche 911 GT3 RS"></img>
              <label>$101/d</label>
            </div>

            <div className="car3 card">
              <label>Chevrolet Corvette 1963</label>
              <a>Chevrolet</a>
              <img src={chevrolet} alt="Chevrolet Corvette 1963"></img>
              <label>$142/d</label>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional rendering of the CarForm */}
      {isCarFormVisible && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeCarForm}>
              &times;
            </button>
            <CarForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Car;
