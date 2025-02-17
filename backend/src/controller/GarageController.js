const { User, Car, Garage, GarageCar } = require("../model/associations");

// Controller function to add a car to a user's garage
// const addCarToGarage = async (req, res) => {
//   const { userId, carId } = req.body;
//   try {
//     // Find the user's garage
//     let garage = await Garage.findOne({ where: { userId } });
//     if (!garage) {
//       garage = await Garage.create({ userId });
//       return res.status(404).json({ error: `Garage created  for ${userId}` });
//     }

//     // Find the car
//     const car = await Car.findByPk(carId);
//     if (!car) {
//       return res.status(404).json({ error: "Car not found" });
//     }

//     // Add the car to the garage
//     await garage.addCar(car);

//     res
//       .status(200)
//       .json({ message: `Car ${car.model} added to User ${userId}'s garage` });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const addCarToGarage = async (req, res) => {
  const { userId, carId } = req.body;
  try {
    // Ensure userId and carId are integers
    const userIdInt = parseInt(userId, 10);
    const carIdInt = parseInt(carId, 10);

    if (isNaN(userIdInt) || isNaN(carIdInt)) {
      return res.status(400).json({ error: "Invalid userId or carId" });
    }

    // Find or create the user's garage
    let garage = await Garage.findOne({ where: { userId: userIdInt } });
    if (!garage) {
      garage = await Garage.create({ userId: userIdInt });
      console.log(`Garage created for User ${userIdInt}`);
    }

    // Find the car
    const car = await Car.findByPk(carIdInt);
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    // Check if the car is already in the garage
    const existingEntry = await GarageCar.findOne({
      where: { garageId: garage.garageId, carId: carIdInt },
    });
    if (existingEntry) {
      return res.status(400).json({ error: "Car is already in the garage" });
    }

    // Add the car to the garage
    await GarageCar.create({ garageId: garage.garageId, carId: carIdInt });

    res
      .status(200)
      .json({
        message: `Car ${car.model} added to User ${userIdInt}'s garage`,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCarsFromGarage = async (req, res) => {
  const { userId } = req.params;
  try {
    // Find the user's garage and include car details
    const garage = await Garage.findOne({
      where: { userId },
      include: {
        model: Car,
        attributes: [
          "carId",
          "model",
          "brand",
          "color",
          "price",
          "speed",
          "type",
          "year",
          "carImageURL",
          "bookingStatus",
        ],
      },
    });

    if (!garage) {
      return res.status(404).json({ error: "Garage not found" });
    }

    // Send car details in the response
    res.status(200).json(garage.Cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addCarToGarage,
  getCarsFromGarage,
};
