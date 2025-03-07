const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();

const CarMock = dbMock.define("Car", {
  model: "Model X",
  brand: "Tesla",
  color: "Red",
  price: 80000,
  speed: 200,
  type: "Electric",
  year: 2023,
  carImageURL: "https://example.com/car.jpg",
  bookingStatus: "Available",
});

describe("Car Model", () => {
  it("should create a car entry", async () => {
    const carData = {
      model: "Model X",
      brand: "Tesla",
      color: "Red",
      price: 80000,
      speed: 200,
      type: "Electric",
      year: 2023,
      carImageURL: "https://example.com/car.jpg",
      bookingStatus: "Available",
    };

    const car = await CarMock.create(carData);

    expect(car.model).toBe(carData.model);
    expect(car.brand).toBe(carData.brand);
    expect(car.color).toBe(carData.color);
    expect(car.price).toBe(carData.price);
  });
});
