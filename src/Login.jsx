import React, { useEffect } from "react";
import mustang from "./mustang.png";
import thar from "./thar.png";
import car from "./car.png";
import "./Login.css";

export default function Login() {
  function validation(event) {
    event.preventDefault();
    console.log("Validation function triggered.");
  }

  // Slideshow Functionality using useEffect
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    const showNextSlide = () => {
      slides[currentSlide].style.display = "none"; // Hide the current slide
      currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
      slides[currentSlide].style.display = "block"; // Show the next slide
    };

    // Change slides every 3 seconds
    const intervalId = setInterval(showNextSlide, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-section">
          <div className="login-card">
            <h2>Login</h2>
            <p>Glad you're back.!</p>
            <form id="loginForm" action="#" method="post" onSubmit={validation}>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="options">
                <label>
                  <input type="checkbox" id="rememberMe" />
                  Remember me
                </label>
                <a href="forgotPass.html" className="forgot-password">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="submit-btn">Login</button>
              <div className="divider">
                <span>Or</span>
              </div>
              <div className="social-login">
                <button type="button" className="social-btn google">
                  Google
                </button>
                <button type="button" className="social-btn facebook">
                  Facebook
                </button>
              </div>
            </form>
            <p className="signup-text">
              Don't have an account? <a href="signUp.html">Signup</a>
            </p>
            <div className="footer-links">
              <a href="#">Terms & Conditions</a> | <a href="#">Support</a> |{" "}
              <a href="#">Customer Care</a>
            </div>
          </div>
        </div>

        <div className="image-section">
          <div className="slideshow-container">
            <img
              src={mustang}
              className="slide"
              style={{ display: "block" }}
              alt="Mustang"
            />
            <img
              src={car}
              className="slide"
              style={{ display: "none"}}
              alt="Car"
            />
             <img
              src={thar}
              className="slide"
              style={{ display: "none"}}
              alt="Thar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
