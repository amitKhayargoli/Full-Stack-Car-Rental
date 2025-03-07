const request = require("supertest");
const app = require("../app");

describe("Car Rental Routes Tests", () => {
  let carId;
  let rentalId;

  beforeAll(async () => {
    const carData = {
      model: "Model S",
      brand: "Tesla",
      color: "Black",
      price: 70000,
      speed: 250,
      type: "Electric",
      year: 2022,
      carImageURL: "https://example.com/model-s.jpg",
      bookingStatus: "Available",
    };

    const car = await request(app).post("/cars").send(carData);
    carId = car.body.car.carId;
  });

  it("should add a rental successfully", async () => {
    const rentalData = {
      userId: 1,
      rentalStartDate: "2025-03-05",
      rentalEndDate: "2025-03-10",
      totalAmount: 500,
    };

    const response = await request(app)
      .post(`/api/rental/${carId}`)
      .send(rentalData);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Rental added successfully!");
    rentalId = response.body.rental.rentalId;
  });

  it("should fetch all rentals", async () => {
    const response = await request(app).get("/rentals");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should fetch rentals by user ID", async () => {
    const response = await request(app)
      .get("/rentals/userRental")
      .query({ userId: 1 });
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should not fetch rentals for non-existent user", async () => {
    const response = await request(app)
      .get("/rentals/userRental")
      .query({ userId: 999 });
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("No rentals found for this user");
  });
});
