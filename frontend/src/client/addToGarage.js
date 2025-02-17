import axios from "axios";

import { toast } from "react-toastify";

export const addToGarage = async (carId) => {
  const userId = localStorage.getItem("userId");

  try {
    const req = { userId: parseInt(userId, 10), carId: parseInt(carId, 10) };
    const res = await axios.post(
      "http://localhost:5000/api/garage/addCarToGarage",
      req,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(res);

    console.log(`Car ${carId} added to garage for user ${userId}`);

    toast.success("Car added to garage successfully!");
  } catch (error) { 
    toast.error("Car is already in the garage!");
    console.error("Error adding car to garage:", error);
  }
};
