import pfp1 from "./img/pfp1.png";
import pfp2 from "./img/pfp2.jpg";
import pfp3 from "./img/pfp3.jpg";
import pfp4 from "./img/pfp4.jpg";
import arthur from "./img/arthur.jpg";
import "./Testimonial.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    // const accessToken = localStorage.getItem("token");

    // const [isLoggedin, setIsLoggedIn] = useState(false);

    // if (accessToken) {
    //   setIsLoggedIn(true);
    // }

    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/customerReview/all"
        );
        console.log("Testimonials", response.data);
        const testimonials = response.data;

        setTestimonial(testimonials);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTestimonials();

    new Swiper(".swiper", {
      loop: true,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: {
        el: ".js-testimonials-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          // spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }, []);

  return (
    <div className="Testimonials-container" id="Reviews">
      <h1>Customer Reviews</h1>
      <div className="swiper Testimonial-slider">
        <div className="swiper-wrapper">
          {testimonial.map((testimonial) => (
            <div className="swiper-slide item">
              <div className="reviews-content">
                <div className="img-area">
                  <img
                    className="profileImg"
                    src={testimonial.profilePictureURL}
                  />
                </div>
                <div className="text-content">
                  <p>{testimonial.review}</p>
                  <h2>{testimonial.username}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Testimonial;
