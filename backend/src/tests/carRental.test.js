const { Users, Car, carRental } = require("../model/associations");
const { sequelize } = require("../database/db");

describe("Car Rental Creation and Associations", () => {
  let userId, carId, rentalId;

  beforeAll(async () => {
    await sequelize.sync({ force: true });

    const user = await Users.create({
      username: "testuser",
      email: "test@example.com",
      password: "password123",
    });

    const car = await Car.create({
      model: "Model X",
      brand: "Brand Y",
      color: "Red",
      price: 50000,
      speed: 200,
      type: "SUV",
      year: 2022,
      carImageURL: "http://example.com/car-image.jpg",
    });

    userId = user.userId;
    carId = car.carId;
  });

  it("should create a car rental and associate it with a user and car", async () => {
    const rental = await carRental.create({
      carId: carId,
      userId: userId,
      rentalDays: 5,
      rentalPrice: 500,
    });

    rentalId = rental.rentalId;

    const carRentalDetails = await rental.getCar();
    expect(carRentalDetails.carId).toBe(carId);

    const userRentalDetails = await rental.getUser();
    expect(userRentalDetails.userId).toBe(userId);
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
