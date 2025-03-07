const request = require("supertest");
const app = require("../index");
const { Car } = require("../model/associations");

describe("Car Routes", () => {
  let carId;

  beforeAll(async () => {
    const carData = {
      model: "Model X",
      brand: "Brand Y",
      color: "Red",
      price: 50000,
      speed: 200,
      type: "SUV",
      year: 2022,
      carImageURL: "http://example.com/car-image.jpg",
    };
    const car = await Car.create(carData);
    carId = car.carId;
  });

  it("should create a new car", async () => {
    const carData = {
      model: "Model Y",
      brand: "Brand Z",
      color: "Blue",
      price: 60000,
      speed: 250,
      type: "Sedan",
      year: 2023,
      carImageURL: "http://example.com/new-car-image.jpg",
    };

    const response = await request(app).post("/Car").send(carData).expect(201);

    expect(response.body).toHaveProperty("carId");
    expect(response.body.model).toBe(carData.model);
    expect(response.body.brand).toBe(carData.brand);
    expect(response.body.color).toBe(carData.color);
    expect(response.body.price).toBe(carData.price);
    expect(response.body.speed).toBe(carData.speed);
    expect(response.body.type).toBe(carData.type);
    expect(response.body.year).toBe(carData.year);
    expect(response.body.carImageURL).toBe(carData.carImageURL);
  });

  it("should fetch all cars", async () => {
    const response = await request(app).get("/Car").expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should fetch a car by its ID", async () => {
    const response = await request(app).get(`/Car/${carId}`).expect(200);

    expect(response.body).toHaveProperty("carId", carId);
    expect(response.body).toHaveProperty("model");
    expect(response.body).toHaveProperty("brand");
  });

  it("should update a car's booking status", async () => {
    const updatedStatus = {
      booked: true,
    };

    const response = await request(app)
      .put(`/Car/updateCarBookingStatus/${carId}`)
      .send(updatedStatus)
      .expect(200);

    expect(response.body).toHaveProperty("carId", carId);
    expect(response.body.booked).toBe(true);
  });

  it("should delete a car by its ID", async () => {
    const response = await request(app).delete(`/Car/${carId}`).expect(200);

    expect(response.body).toHaveProperty("message", "Car deleted successfully");
  });

  afterAll(async () => {
    await Car.destroy({ where: { carId } });
  });
});
