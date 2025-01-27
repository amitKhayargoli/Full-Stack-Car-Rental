import Navbar from "./Navbar";
import sidebar from "./Sidebar";

import "./Sellcar.css";

const CarForm = () => {
  return (
    <div className="car-form-container">
      <h1>Add New Car</h1>
      <p>Fill out the form to add a new car.</p>
      <form className="form">
        <div className="info">
          <label htmlFor="carModel">Car Model</label>
          <input type="text" id="carModel" placeholder="Enter car model" />
        </div>

        <div className="info">
          <label htmlFor="carColor">Car Color</label>
          <input
            type="color"
            id="carColor"
          />
        </div>

        <div className="info">
          <label htmlFor="carPrice">Price</label>
          <input type="number" id="carPrice" placeholder="Enter car price" />
        </div>

        <div className="info">
          <label htmlFor="yearOfManufacture">Year of Manufacture</label>
          <input
            type="number"
            id="yearOfManufacture"
            placeholder="Enter year of manufacture"
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>

        <div className="info">
          <label htmlFor="carImage">Choose a photo of the car</label>
          <input type="file" id="carImage" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CarForm;
