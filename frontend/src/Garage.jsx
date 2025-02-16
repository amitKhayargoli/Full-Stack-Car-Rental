import "./Garage.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useCallback, useEffect, useState } from "react";
import GoBack from "./client/GoBack";

import { toast, ToastContainer } from "react-toastify";
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

  const fetchCars = useCallback(async () => {
    const userID = localStorage.getItem("userId");
    try {
      const response = await axios.get(
        `http://localhost:5000/api/garage/${userID}`
      );
      const carData = response.data;
      setCars(carData);

      setAvailableCars(carData.filter((car) => car.bookingStatus === false));
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  }, []);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const handleRentCar = async (event) => {
    const carId = event.currentTarget.getAttribute("data-car-id");

    const bookingStatus = true;
    // const userId = localStorage.getItem("userId");

    try {
      const req = { bookingStatus };
      const res = await axios.put(
        `http://localhost:5000/Car/updateCarBookingStatus/${carId}`,
        req,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res);

      toast.success("Car Rented successfully!");

      fetchCars();
    } catch (error) {
      toast.error("Error Renting Car!");
      console.error("Error Renting Car:", error);
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
                      <button
                        data-car-id={car.carId}
                        className="home__button !cursor-pointer"
                        onClick={handleRentCar}
                      >
                        <span>Rent now</span>
                        <i className="ri-arrow-right-line"></i>
                      </button>
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
