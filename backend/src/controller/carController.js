const { Car, GarageCar } = require("../model/associations");
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

const updateCarBookingStatus = async (req, res) => {
  try {
    const carId = req.params.id;
    const { bookingStatus } = req.body;

    const car = await Car.update(
      { bookingStatus },
      {
        where: { carId: carId },
      }
    );

    if (car[0] === 0) {
      return res.status(404).send({ message: "Car not found" });
    }

    //Remove car details from GarageCar table
    await GarageCar.destroy({
      where: { carId: carId },
    });

    res
      .status(200)
      .send({ message: "Car booking status updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update the car booking status" });
  }
};

const deleteCar = async (req, res) => {
  try {
    const carId = parseInt(req.params.carId, 10);

    if (isNaN(carId)) {
      return res.status(400).json({ message: "Invalid car ID" });
    }
    const result = await Car.destroy({
      where: { carId: carId },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addCar, getAllCars, updateCarBookingStatus, deleteCar };
