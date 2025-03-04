import car from "./img/LandingPageCar.png";
import "./LodeX.css";
import about1 from "./LandingImg/vol.jpg";
import about2 from "./LandingImg/speed.jpg";
import about3 from "./LandingImg/mustang.jpg";
import about4 from "./LandingImg/fordmustang.jpg";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import BackgroundVideo from "./BackgroundVideo";
import { useEffect } from "react";
import axios from "axios";
import Contact from "./client/Contact";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function LodeX() {
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/customerReview/all"
        );
        // console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTestimonials();
  }, []);

  // Motion config
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
            <a href="/Contact">Contact</a>
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
      </div>

      <BackgroundVideo />

      <div className="about-section" id="About">
        <div className="about1">
          <div className="about-img">
            <img src={about1} alt="" />
          </div>
          <div className="about-text">
            <h1 style={{ color: "white" }}>We are</h1>
            <p style={{ color: "#888888" }}>
              A company of Dedicated Professionals with extensive experience in
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

      <motion.section
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="car-rental-section"
      >
        <h1 style={{ textAlign: "center", color: "white" }}>
          Car Rental Service
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#888888",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          Need a ride? Rent high-quality, luxury, and economy cars at affordable
          prices. Experience smooth and hassle-free car rental with Lodex.
        </p>
      </motion.section>

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
