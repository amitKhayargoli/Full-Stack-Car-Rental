import car from "./img/LandingPageCar.png";
import "./LodeX.css";
import about1 from "./LandingImg/vol.jpg";
import about2 from "./LandingImg/speed.jpg";
import about3 from "./LandingImg/mustang.jpg";
import about4 from "./LandingImg/fordmustang.jpg";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import BackgroundVideo from "./BackgroundVideo";
import { useEffect, useState } from "react";
function LodeX() {
  // useEffect(() => {
  //   const accessToken = localStorage.getItem("token");

  //   const [isLoggedin, setIsLoggedIn] = useState(false);

  //   if (accessToken) {
  //     setIsLoggedIn(true);
  //   }
  // });

  return (
    <div className="container">
      <div className="nav">
        <b>
          <a className="lo">
            <span>LO</span>DEX
          </a>
        </b>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#Reviews">Reviews</a>
          </li>
        </ul>
        <button className="login-btn">
          <a href="Login" className="login">
            Login
          </a>
        </button>

        {/* <div className="nav-close">
          <i class="ri-close-large-line"></i>
        </div>

        <div className="nav-toggle">
          <i class="ri-menu-line"></i>
        </div> */}
      </div>
      <div className="body">
        <BackgroundVideo></BackgroundVideo>
      </div>

      {/* <div class="icons-container">
        <div class="icons icon1">
          <i class="fa-solid fa-house"></i>
          <div class="content">
            <h3>159+</h3>
            <p>branches</p>
          </div>
        </div>

        <div class="icons icon2">
          <i class="fa-solid fa-car"></i>
          <div class="content">
            <h3>322+</h3>
            <p>cars sold</p>
          </div>
        </div>

        <div class="icons icon3">
          <i class="fa-solid fa-users"></i>
          <div class="content">
            <h3>300+</h3>
            <p>happy clients</p>
          </div>
        </div>

        <div class="icons icon4">
          <i class="fa-solid fa-car"></i>
          <div class="content">
            <h3>400+</h3>
            <p>new cars</p>
          </div>
        </div>
      </div> */}

      <div className="about-section" id="About">
        <div className="about1">
          <div className="about-img">
            <img src={about1} alt="" />
          </div>
          <div className="about-text">
            <h1 style={{ color: "white" }}>We are</h1>
            <p style={{ color: "#888888" }}>
              A company of Dedicated Professsionals with extensive experience in
              car sales.
            </p>
          </div>
        </div>

        <div className="about2">
          <div className="about-img">
            <img src={about2} alt="" />
          </div>
          <div className="about-text">
            <h1 style={{ color: "white" }}>Trusted Car Distributors</h1>
            <p style={{ color: "#888888" }}>
              We deal with the best car companies in the world.
            </p>
          </div>
        </div>

        <div className="about1">
          <div className="about-img">
            <img src={about4} alt="" />
          </div>
          <div className="about-text">
            <h1 style={{ color: "white" }}>100+ Companies</h1>
            <p style={{ color: "#888888" }}>
              With over 100+ trusted car brands, we provide a wide range of
              high-quality vehicles to suit every need.
            </p>
          </div>
        </div>

        <div className="about2">
          <div className="about-img">
            <img src={about3} alt="" />
          </div>
          <div className="about-text">
            <h1 style={{ color: "white" }}>Fastest Cars Available</h1>
            <p style={{ color: "#888888" }}>
              Get ready to break speed limits with the fastest cars available in
              the market.
            </p>
          </div>
        </div>
      </div>

      <section>
        <h1>Our Partners</h1>
        <div className="slider">
          <div className="slider-items">
            <img
              src="https://www.carlogos.org/car-logos/tesla-logo-2007-full-640.png"
              alt=""
            />
            <img
              src="https://www.carlogos.org/car-logos/ferrari-logo-2002-640.png"
              alt=""
            />
            <img
              src="https://www.carlogos.org/logo/Mercedes-Benz-logo.png"
              alt=""
            />
            <img
              src="https://www.carlogos.org/car-logos/lamborghini-logo-1998-640.png"
              alt=""
            />
            <img
              src="https://www.carlogos.org/car-logos/jeep-logo-1993-640.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <Testimonial />
      <Footer />
    </div>
  );
}

export default LodeX;
