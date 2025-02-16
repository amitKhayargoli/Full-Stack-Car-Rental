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
      </div>
    </div>
  );
};

export default Booking;
