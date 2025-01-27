import pfp1 from "./pfp1.png";
import pfp2 from "./pfp2.jpg";
import pfp3 from "./pfp3.jpg";
import pfp4 from "./pfp4.jpg";
import arthur from "./arthur.jpg";
import "./Testimonial.css";
import React, { useEffect } from "react";

const Testimonial = () => {
  useEffect(() => {
    new Swiper(".swiper", {
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
          {[pfp1, pfp2, pfp3, pfp4].map((profile, index) => (
            <div className="swiper-slide item" key={index}>
              <div className="reviews-content">
                <div className="img-area">
                  <img
                    className="profileImg"
                    src={profile}
                    alt={`Profile ${index + 1}`}
                  />
                </div>
                <div className="text-content">
                  <p>
                    Great experience! Easy to navigate and helpful customer
                    service. Highly recommend!
                  </p>
                  <h2>John Doe</h2>
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
