import "./Booking.css";
import supra from "./img/supra.png";
import porsche from "./img/porsche.png";
import chevrolet from "./img/chevrolet.png";

const Booking = () => {
  return (
    <div className="container">
      <div className="second ">
        <div className="booking w-full">
          <div className="flex justify-between items-center !px-5 !py-5">
            <h2>Booking</h2>
          </div>

          <div className="cars">
            <div className="car1 card">
              <label>Supra MK4</label>
              <a>Supra</a>
              <img src={supra}></img>
              <label>$111/d</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
