import React, { useEffect } from "react";
import mustang from "./mustang.png";
import thar from "./thar.png";
import car from "./car.png";
import "./Login.css";

export default function Login() {
  const handleValidation = (e) => {
    e.preventDefault();

    const loginForm = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const username_error = document.getElementById("username_error");
    const password_error = document.getElementById("password_error");

    loginForm.addEventListener("submit", (e) => {
      var username_check = /^[a-zA-Z0-9_]{5,15}$/;
      var password_check = /^[A-Za-z]\w{7,14}$/;

      if (!username.value.match(username_check)) {
        e.preventDefault();
        username_error.innerHTML =
          "*Required valid Username (5-15) characters*";
      }

      if (!password.value.match(password_check)) {
        e.preventDefault();
        password_error.innerHTML =
          "*Required valid Password (8-14) characters*";
      }
    });

    username.addEventListener("keydown", (event) => {
      console.log(`${event.key}`);
      username_error.innerHTML = "";
    });

    password.addEventListener("keydown", (event) => {
      console.log(`${event.key}`);
      password_error.innerHTML = "";
    });
  };

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
            <form id="loginForm" method="post" onSubmit={handleValidation}>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                />
                <span id="username_error"></span>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <span id="password_error"></span>
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
              <button type="submit" className="submit-btn">
                Login
              </button>
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
              <a href="#">Terms & Conditions</a> |<a href="#">Support</a> |
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
              style={{ display: "none" }}
              alt="Car"
            />
            <img
              src={thar}
              className="slide"
              style={{ display: "none" }}
              alt="Thar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
