import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import mustang from "./mustang.png";
import thar from "./thar.png";
import car from "./car.png";
import "./Signup.css";

export default function Signup() {
  function validation() {
    const signupForm = document.getElementById("signupForm");
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmpassword");

    const emailError = document.getElementById("email_error");
    const usernameError = document.getElementById("username_error");
    const passwordError = document.getElementById("password_error");
    const confirmPasswordError = document.getElementById(
      "confirmpassword_error"
    );

    signupForm.addEventListener("submit", (e) => {
      const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const usernameCheck = /^[a-zA-Z0-9_]{5,15}$/;
      const passwordCheck =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,14}$/;

      let isValid = true;

      if (!email.value.match(emailCheck)) {
        isValid = false;
        emailError.innerHTML = "*Invalid email format*";
      } else {
        emailError.innerHTML = "";
      }

      if (!username.value.match(usernameCheck)) {
        isValid = false;
        usernameError.innerHTML = "*Username must be 5-15 characters long*";
      } else {
        usernameError.innerHTML = "";
      }

      if (!password.value.match(passwordCheck)) {
        isValid = false;
        passwordError.innerHTML =
          "*Password must be 8-14 characters and include at least one letter, one number, and one special character*";
      } else {
        passwordError.innerHTML = "";
      }

      if (password.value !== confirmPassword.value) {
        isValid = false;
        confirmPasswordError.innerHTML = "*Passwords do not match*";
      } else {
        confirmPasswordError.innerHTML = "";
      }

      if (isValid) {
        e.preventDefault();
        const userData = {
          email: email.value,
          username: username.value,
          password: password.value,
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Signup successful! Your data has been saved to local storage.");

        signupForm.reset();
      } else {
        e.preventDefault();
      }
    });

    email.addEventListener("keydown", () => (emailError.innerHTML = ""));
    username.addEventListener("keydown", () => (usernameError.innerHTML = ""));
    password.addEventListener("keydown", () => (passwordError.innerHTML = ""));
    confirmPassword.addEventListener(
      "keydown",
      () => (confirmPasswordError.innerHTML = "")
    );
  }

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    const showNextSlide = () => {
      slides[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = "block";
    };

    const intervalId = setInterval(showNextSlide, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="signup-body">
      <div className="signup-container">
        <div className="signup-section">
          <div className="signup-card">
            <h2>Signup</h2>
            <p>Join us and create your account!</p>
            <form id="signupForm" action="#" method="post" onSubmit={validation}>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                />
              </div>
              <button type="submit" className="submit-btn">
                Signup
              </button>
              <div className="divider">
                <span>Or</span>
              </div>
              <div className="social-login">
                <button type="button" className="social-btn google"></button>
                <button type="button" className="social-btn facebook"></button>
              </div>
            </form>
            <p className="login-text">
              Already have an account? <Link to="/Login">Login</Link>
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
