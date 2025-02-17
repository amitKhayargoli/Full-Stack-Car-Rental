import { carModel } from "../postgres/db.js";
<<<<<<< HEAD
import path from "path";
import fs from "fs";
=======

>>>>>>> 1d1db17 (Normalize line endings)

export const addCar = async (req, res) => {
  const { model, color, price, yearOfManufacture, imagePath } = req.body;

  if (!model || !color || !price || !yearOfManufacture) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const existingCar = await carModel.findOne({ where: { model, yearOfManufacture } });
    if (existingCar) {
      return res.status(409).json({ message: "Car already exists" });
    }

    const newCar = await carModel.create({
      model,
      color,
      price,
      yearOfManufacture,
      imagePath,  
    });

    return res.status(201).json({ message: "Car added successfully", car: newCar });
  } catch (error) {
    console.error("Error adding car:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
