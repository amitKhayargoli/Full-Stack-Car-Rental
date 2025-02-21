import "./Garage.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useCallback, useEffect, useState } from "react";
import GoBack from "./client/GoBack";

import { useForm } from "react-hook-form";

import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "./components/AnimatedModal";

import { toast, ToastContainer } from "react-toastify";
import { Check, DollarSign, Trash, Trash2 } from "lucide-react";

const Garage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [cars, setCars] = useState([]);
  const [availableCars, setAvailableCars] = useState(cars);

  const [selectedTime, setSelectedTime] = useState("");
  const [car, setCar] = useState("");
  const [total, setTotal] = useState(0);

  const fetchCars = useCallback(async () => {
    const userID = localStorage.getItem("userId");
    try {
      const response = await axios.get(
        `http://localhost:5000/api/garage/${userID}`
      );
      const carData = response.data;
      setCars(carData);

      setAvailableCars(
        carData.filter((car) => car.bookingStatus === "Available")
      );
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  }, []);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const handleChange = (event) => {
    const carId = Number(event.target.getAttribute("data-car-id"));

    console.log(carId);
    const newSelectedTime = event.target.value;
    setSelectedTime(newSelectedTime);

    const selectedCar = cars.find((car) => car.carId === carId);

    if (selectedCar) {
      const newTotal = newSelectedTime * selectedCar.price;
      setTotal(newTotal);
      console.log("Selected car price:", selectedCar.price);
      console.log("Total:", newTotal);
    } else {
      console.error("Selected car not found");
    }
  };

  const handleRentCar = async (carId) => {
    console.log("Renting Car ID:", carId);

    const userId = parseInt(localStorage.getItem("userId"), 10);
    const bookingStatus = "Pending";

    if (!userId || !carId || !selectedTime || !total) {
      toast.error("Please select rental duration before proceeding.");
      return;
    }

    try {
      // Add car to rental table
      const rentalData = {
        carId,
        userId,
        rentalDays: selectedTime,
        rentalPrice: total,
      };

      await axios.post(`http://localhost:5000/api/rental/${carId}`, rentalData);

      // Update car booking status
      await axios.put(
        `http://localhost:5000/Car/updateCarBookingStatus/${carId}`,
        { bookingStatus },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Request Submitted!");
      setIsModalOpen(false);
      fetchCars(); // Refresh car list
    } catch (error) {
      console.error(
        "Error Renting Car:",
        error.response?.data || error.message
      );
      toast.error("Error processing rental. Please try again.");
    }
  };

  const handleRemoveCar = async (event) => {
    const carId = event.currentTarget.getAttribute("data-car-id");

    try {
      const res = await axios.put(
        `http://localhost:5000/api/garage/removeCarFromGarage/${carId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      fetchCars();
      toast.success("Car Removed Successfully!");
      console.log(res.data);
    } catch (error) {
      console.error(
        "Error Renting Car:",
        error.response?.data || error.message
      );

      toast.error("Error Removing Car!");
    }
  };

  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  return (
    <div className="CustomerDashboard relative">
      <main className="main">
        <section className="home ">
          <GoBack />
          <Swiper
            modules={[Pagination]}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}"> ${index + 1}</span>`,
            }}
            speed={1200}
            loop={cars.length > 1}
            className="home__swiper"
          >
            {availableCars.map((car) => (
              <SwiperSlide key={car.carId}>
                <article className="home__article car__orange">
                  <div className={`home__panel-1 `}></div>
                  <div className="home__panel-2"></div>

                  <div className="home__content container">
                    <div className="home__data">
                      <div className="home__titles">
                        <h1 className="home__title">{car.brand}</h1>
                        <h3 className="home__subtitle">{car.model}</h3>
                      </div>
                      <div className="home__image">
                        <img
                          src={car.carImageURL}
                          className="home__img"
                          alt={car.model}
                        />
                      </div>
                    </div>

                    <div className="home__info">
                      <div className="home__specs">
                        <span>{car.speed} MPH</span>
                        <span>0-100</span>
                        <span>{car.price}$</span>
                      </div>
                      {/* <button
                        data-car-id={car.carId}
                        className="home__button !cursor-pointer"
                        onClick={handleRentCar}
                      >
                        <span>Rent now</span>
                        <i className="ri-arrow-right-line"></i>
                      </button> */}

                      <Modal>
                        {/* Button to open the modal */}
                        <ModalTrigger className="text-white px-4 py-2 rounded home__button !cursor-pointer">
                          Rent now
                          <i className="ri-arrow-right-line"></i>
                        </ModalTrigger>

                        {/* Modal content */}
                        <ModalBody className="rounded-2xl !mx-5 !p-6 text-black">
                          <ModalContent className="flex flex-col items-center justify-between">
                            <h1 className="font-bold mt-2 !text-2xl !text-gray-800">
                              Rent This Car
                            </h1>
                            <img
                              src={car.carImageURL}
                              alt=""
                              className="xl:w-[80%]"
                            />

                            <form className="flex flex-col justify-between gap-6 h-full">
                              <h4>Rental Duration</h4>

                              <div className="flex gap-2 justify-center">
                                <label
                                  className={`!p-1 ${
                                    selectedTime === "3"
                                      ? "bg-yellow-500 rounded-2xl"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    value="3"
                                    data-car-id={car.carId}
                                    checked={selectedTime === "3"}
                                    onClick={handleChange}
                                    hidden
                                  />
                                  3 days
                                </label>

                                <label
                                  className={`!p-1 ${
                                    selectedTime === "5"
                                      ? "bg-yellow-500 rounded-2xl"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    value="5"
                                    data-car-id={car.carId}
                                    checked={selectedTime === "5"}
                                    onClick={handleChange}
                                    hidden
                                  />
                                  5 days
                                </label>

                                <label
                                  className={`!p-1 ${
                                    selectedTime === "7"
                                      ? "bg-yellow-500 rounded-2xl"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    value="7"
                                    data-car-id={car.carId}
                                    checked={selectedTime === "7"}
                                    onClick={handleChange}
                                    hidden
                                  />
                                  7 days
                                </label>

                                <span className="flex !ml-4 gap-2">
                                  <h1 className="!text-xl !text-gray-500">
                                    Total:
                                  </h1>
                                  <h1 className="!text-xl !text-yellow-500">
                                    {total}$
                                  </h1>
                                </span>
                              </div>

                              <div className="flex gap-20 ">
                                <button
                                  type="button"
                                  className="flex rounded-sm bg-red-600 !p-2 cursor-pointer"
                                  data-car-id={car.carId}
                                  onClick={handleRemoveCar}
                                >
                                  <h1 className="!font-medium !text-[10px] md:!text-sm !mt-1 sm:!mt-0">
                                    Remove From Garage
                                  </h1>
                                </button>
                                <button
                                  data-car-id={car.carId}
                                  onClick={() => handleRentCar(car.carId)}
                                  type="button"
                                  className="cursor-pointer flex bg-white-200 !px-5 rounded-sm border-1 border-gray-500 !p-2  !font-medium !text-[12px] !text-black md:!text-sm !mt-1 md:!mt-0"
                                >
                                  Proceed
                                </button>
                              </div>
                            </form>
                          </ModalContent>

                          {/* Footer with close button */}
                        </ModalBody>
                      </Modal>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="home__interaction">
            <div className="home__social">
              <div className="home__social-border"></div>
              <a href="" target="_blank" className="home__social-link">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="" target="_blank" className="home__social-link">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="" target="_blank" className="home__social-link">
                <i className="ri-facebook-fill"></i>
              </a>
            </div>
          </div>
          {/* <div className="swiper-pagination"></div> */}
        </section>
      </main>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Garage;
