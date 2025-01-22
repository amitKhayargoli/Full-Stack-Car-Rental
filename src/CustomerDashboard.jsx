import "./CustomerDashboard.css";
import car1 from "./Customercar3.png";
import car2 from "./Customercar2.png";
import car3 from "./Customercar1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CustomerDashboard = () => {
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
    <div className="CustomerDashboard">
      <main className="main">
        <section className="home">
          <Swiper
            modules={[Pagination]}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}"> ${index + 1}</span>`,
            }}
            speed={1200}
            loop={true}
            className="home__swiper"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <article className="home__article car__orange">
                <div className="home__panel-1"></div>
                <div className="home__panel-2"></div>

                <div className="home__content container">
                  <div className="home__data">
                    <div className="home__titles">
                      <h3 className="home__subtitle">Best</h3>
                      <h1 className="home__title">CARS</h1>
                    </div>
                    <div className="home__image">
                      <img src={car3} className="home__img" alt="Car 1" />
                    </div>
                  </div>

                  <div className="home__info">
                    <div className="home__specs">
                      <span>302 MPH</span>
                      <span>0-100</span>
                      <span>360 KW</span>
                    </div>
                    <a className="home__button">
                      <span>Discover More</span>
                      <i class="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <article className="home__article car__green">
                <div className="home__panel-1"></div>
                <div className="home__panel-2"></div>

                <div className="home__content container">
                  <div className="home__data">
                    <div className="home__titles">
                      <h3 className="home__subtitle">Best</h3>
                      <h1 className="home__title">CARS</h1>
                    </div>
                    <div className="home__image">
                      <img src={car2} className="home__img" alt="Car 2" />
                    </div>
                  </div>

                  <div className="home__info">
                    <div className="home__specs">
                      <span>302 MPH</span>
                      <span>0-100</span>
                      <span>360 KW</span>
                    </div>
                    <a className="home__button">
                      <span>Discover More</span>
                      <i class="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <article className="home__article car__blue">
                <div className="home__panel-1"></div>
                <div className="home__panel-2"></div>

                <div className="home__content container">
                  <div className="home__data">
                    <div className="home__titles">
                      <h3 className="home__subtitle">Best</h3>
                      <h1 className="home__title">CARS</h1>
                    </div>
                    <div className="home__image">
                      <img src={car1} className="home__img" alt="Car 3" />
                    </div>
                  </div>

                  <div className="home__info">
                    <div className="home__specs">
                      <span>302 MPH</span>
                      <span>0-100</span>
                      <span>360 KW</span>
                    </div>
                    <a className="home__button">
                      <span>Discover More</span>
                      <i class="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          </Swiper>
          <div className="home__interaction">
            <div className="home__social">
              <div className="home__social-border"></div>
              <a href="" target="_blank" className="home__social-link">
                <i class="ri-twitter-x-line"></i>
              </a>
              <a href="" target="_blank" className="home__social-link">
                <i class="ri-instagram-line"></i>
              </a>
              <a href="" target="_blank" className="home__social-link">
                <i class="ri-facebook-fill"></i>
              </a>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </section>
      </main>
    </div>
  );
};

export default CustomerDashboard;
