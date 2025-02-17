import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import mustang from "./img/mustang.png";
import thar from "./img/thar.png";
import car from "./img/car.png";
import Rollsroyce from "./img/rollsroyce.png";
import "./Login.css";
import axios from "axios";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .matches(/^[A-Za-z]\w{7,14}$/, "Password must be 8-14 characters")
    .required("Password is required"),
});

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    // try {
    //   // Perform login request here
    //   const response = await axios.post("http://localhost:5000/login", data);
    //   alert(response.data.message);
    // } catch (error) {
    //   console.error("Error logging in:", error);
    // }
    console.log("Logging in with:", data);

    axios
      .post("http://localhost:5000/api/auth/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Log the entire response to inspect the structure
        console.log("Login Response:", response.data.data.access_token);

        // Check if access_token exists inside response.data
        if (response.data && response.data.data.access_token) {
          console.log("Access Token:", response.data.data.access_token);
          localStorage.setItem("token", response.data.data.access_token); // ✅ Store Token

          localStorage.setItem("role", response.data.data.role); //Storing role
          localStorage.setItem("userId", response.data.data.userId); //Storing userId

          console.log(response.data.data.role);
          if (response.data.data.role == "user") {
            //Add client and Admin navigate to Dashboard
            navigate("/Client/Listings"); // ✅ Redirect to Dashboard
          } else if (response.data.data.role == "admin") {
            navigate("/Admin/Dashboard");
          }
        } else {
          alert("Login failed! Check credentials.");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        alert("Error logging in. Please try again.");
      });

    reset();
  };

  // Slideshow functionality using useEffect
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    const showNextSlide = () => {
      slides[currentSlide].style.display = "none"; // Hide the current slide
      currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
      slides[currentSlide].style.display = "block"; // Show the next slide
    };

    const intervalId = setInterval(showNextSlide, 2200);

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
            <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  {...register("email")}
                />
                <span id="email_error" className="error-message">
                  {errors.email?.message}
                </span>
              </div>

              <div className="form-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  {...register("password")}
                />
                <span id="password_error" className="error-message">
                  {errors.password?.message}
                </span>
              </div>

              <div className="options">
                <label style={{ display: "flex", gap: "2px" }}>
                  <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={(e) => setShowPassword(e.target.checked)}
                  />
                  Show password
                </label>
              </div>
              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>
            <p className="signup-text">
              Don't have an account? <Link to="/Signup">Signup</Link>
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
            <img
              src={Rollsroyce}
              className="slide"
              style={{ display: "none" }}
              alt="Rollsroyce"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
