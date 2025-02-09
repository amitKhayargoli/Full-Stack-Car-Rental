const Car = require("../model/carSchema");

const addCar = async (req, res) => {
  try {
    const {
      carId,
      model,
      brand,
      color,
      price,
      speed,
      type,
      year,
      carImageURL,
      bookingStatus,
    } = req.body;

    const newCar = await Car.create({
      carId,
      model,
      brand,
      color,
      price,
      speed,
      type,
      year,
      carImageURL,
      bookingStatus,
    });

    res.status(201).json({ message: "Car added successfully!", car: newCar });
  } catch (error) {
    console.error("Error adding car:", error);
    res.status(500).json({ error: "Failed to add car" });
  }
};

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).send({ data: cars });
  } catch (error) {
    console.log(error);

    res.status(500).send({ error: "Failed to fetch cars" });
  }
};

module.exports = { addCar, getAllCars };
