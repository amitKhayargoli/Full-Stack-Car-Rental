import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import mustang from "./img/mustang.png";
import thar from "./img/thar.png";
import car from "./img/car.png";
import Rollsroyce from "./img/rollsroyce.png";
import "./Signup.css";
import * as Yup from "yup";
import axios from "axios";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  username: Yup.string()
    .matches(/^[a-zA-Z0-9_]{4,15}$/, "Username must be 4-15 characters long")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Confirm Password is required"),
});

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    console.log("Signup with:", data);

    axios
      .post("http://localhost:5000/api/user", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Log the entire response to inspect the structure
        console.log("Login Response:", response.data);

        // Check if access_token exists inside response.data
        if (response.data) {
          console.log("Created user email:", response.data.email);

          navigate("/login"); // ✅ Redirect to Login
        } else {
          alert("Login failed! Check credentials.");
        }
      })
      .catch((error) => {
        console.error("Error signup:", error);
        alert("Error creating account. Please try again.");
      });

    reset();
  };

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    const showNextSlide = () => {
      slides[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = "block";
    };

    const intervalId = setInterval(showNextSlide, 2200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="signup-body">
      <div className="signup-container">
        <div className="signup-section">
          <div className="signup-card">
            <h2>Signup</h2>
            <p>Join us and create your account!</p>
            <form id="signupForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                <span id="email_error" className="error-message">
                  {errors.email?.message}
                </span>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  {...register("username")}
                />
                <span id="username_error" className="error-message">
                  {errors.username?.message}
                </span>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  {...register("password")}
                />
                <span id="password_error" className="error-message">
                  {errors.password?.message}
                </span>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />
                <span id="confirmpassword_error" className="error-message">
                  {errors.confirmPassword?.message}
                </span>
              </div>
              <button className="submit-btn">Signup</button>
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
            {/* <img
              src={thar}
              className="slide"
              style={{ display: 'none' }}
              alt="Thar'
            />
            <img
              src={Rollsroyce}
              className="slide'
              style={{ display: 'none' }}
              alt="Rollsroyce'
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
