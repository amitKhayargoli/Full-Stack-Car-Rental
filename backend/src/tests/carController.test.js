const request = require("supertest");
const app = require("../app");
const { Car } = require("../model/associations");

describe("Car Controller Tests", () => {
  let carId;

  it("should add a car successfully", async () => {
    const carData = {
      model: "Model X",
      brand: "Tesla",
      color: "Red",
      price: 50000,
      speed: 250,
      type: "Electric",
      year: 2021,
      carImageURL: "https://example.com/model-x.jpg",
      bookingStatus: "Available",
    };

    const response = await request(app).post("/Car").send(carData);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Car added successfully!");
    carId = response.body.car.carId;
  });

  it("should fetch all cars", async () => {
    const response = await request(app).get("/Car");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should update the booking status of a car", async () => {
    const response = await request(app)
      .put(`/Car/updateCarBookingStatus/${carId}`)
      .send({ bookingStatus: "Booked" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      "Car booking status updated successfully"
    );
  });

  it("should delete a car successfully", async () => {
    const response = await request(app).delete(`/Car/${carId}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Car deleted successfully");
  });

  it("should update car details successfully", async () => {
    const updatedCarData = {
      model: "Model Y",
      brand: "Tesla",
      color: "Blue",
      price: 60000,
      speed: 300,
      type: "Electric",
      year: 2022,
      carImageURL: "https://example.com/model-y.jpg",
    };

    const response = await request(app)
      .put(`/Car/${carId}`)
      .send(updatedCarData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Car updated successfully");
  });
});
