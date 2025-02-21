const { Car, carRental, Users } = require("../model/associations");

const addRental = async (req, res) => {
  try {
    const body = req.body;
    const carId = req.params;

    const rental = await carRental.create({
      carId,
      userId,
      rentalDays,
      rentalPrice,
      rentalDate,
    });

    res.status(201).json({ message: "Rental added successfully", car: rental });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to create rental" });
  }
};

const getAllRentals = async (req, res) => {
  try {
    const cars = await carRental.findAll();
    res.status(200).send({ data: cars });
  } catch (error) {
    console.log(error);

    res.status(500).send({ error: "Failed to fetch cars" });
  }
};

const updateRentalStatus = async (req, res) => {
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

    res
      .status(200)
      .send({ message: "Car booking status updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update the car booking status" });
  }
};

module.exports = { addRental, getAllRentals, updateRentalStatus };
