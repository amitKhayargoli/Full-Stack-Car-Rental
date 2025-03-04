const { Car, carRental, Users, UserProfile } = require("../model/associations");

const addRental = async (req, res) => {
  try {
    const { userId, carId, rentalDays, rentalPrice, rentalDate } = req.body;

    // Ensure userId and carId are valid integers
    const userIdInt = parseInt(userId, 10);
    const carIdInt = parseInt(carId, 10);

    if (
      isNaN(userIdInt) ||
      isNaN(carIdInt) ||
      isNaN(rentalDays) ||
      isNaN(rentalPrice)
    ) {
      return res.status(400).json({ error: "Invalid input values" });
    }

    // Create rental record
    const rental = await carRental.create({
      carId: carIdInt,
      userId: userIdInt,
      rentalDays,
      rentalPrice,
      rentalDate: rentalDate || new Date(), // Defaults to current date if not provided
    });

    res.status(201).json({ message: "Rental added successfully", rental });
  } catch (error) {
    console.error("Error adding rental:", error);
    res.status(500).json({ error: "Failed to create rental" });
  }
};

const getAllRentals = async (req, res) => {
  try {
    const cars = await carRental.findAll({
      include: [
        {
          model: Car,
          as: "CarDetails",
        },
        {
          model: Users,
          as: "UserDetails",
          include: [
            {
              model: UserProfile,
              as: "profile",
            },
          ],
        },
      ],
    });
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

const getRentalByUserId = async (req, res) => {
  try {
    const userId = Number(req.user.user.userId);

    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user ID format" });
    }

    const rentals = await carRental.findAll({
      where: { userId: userId },
      include: [
        {
          model: Car,
          as: "CarDetails",
        },
        {
          model: Users,
          as: "UserDetails",
          include: [
            {
              model: UserProfile,
              as: "profile",
            },
          ],
        },
      ],
    });

    if (!rentals.length) {
      return res.status(404).json({ error: "No rentals found for this user" });
    }

    res.status(200).json({ data: rentals });
  } catch (error) {
    console.error("Error fetching rentals by user:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addRental,
  getAllRentals,
  updateRentalStatus,
  getRentalByUserId,
};
