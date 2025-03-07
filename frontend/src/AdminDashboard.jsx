import "./Booking.css";
import "./AdminDashboard.css";
import car1 from "./img/mini-car-01.png";
import car2 from "./img/mini-car-02.png";
import car3 from "./img/mini-car-03.png";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import ClientSidebar from "./client/ClientSidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

export default function AdminDashboard() {
  const [cars, setCars] = useState([]);
  const [bookedCars, setBookedCars] = useState([]);
  const [pendingCars, setPendingCars] = useState([]);
  const [clients, setClients] = useState([]);
  const [rentalData, setRentalData] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user");
      const user = response.data.data;
      const clients = user.filter((user) => user.role === "user");
      setClients(clients.length);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:5000/Car");
      const car = response.data.data;

      const available = car.filter((car) => car.bookingStatus === "Available");
      const booked = car.filter((car) => car.bookingStatus === "Booked");
      const pending = car.filter((car) => car.bookingStatus === "Pending");

      setCars(available.length);
      setBookedCars(booked.length);
      setPendingCars(pending.length);

      const allMonths = Array.from({ length: 6 }, (_, i) => ({
        name: dayjs().subtract(i, "month").format("MMM YYYY"),
        Rentals: 0,
      }));

      const rentalsByMonth = {};
      car.forEach((c) => {
        if (c.bookingStatus === "Booked" && c.createdAt) {
          const month = dayjs(c.createdAt).format("MMM YYYY");
          rentalsByMonth[month] = (rentalsByMonth[month] || 0) + 1;
        }
      });

      const rentalChartData = allMonths.map((month) => ({
        ...month,
        Rentals: rentalsByMonth[month.name] || 0,
      }));

      setRentalData(rentalChartData);
    } catch (error) {
      console.error("Error fetching cars", error);
    }
  };

  useEffect(() => {
    fetchCars();
    fetchUsers();
  }, []);

  return (
    <>
      <div className={`second bg-white dark:bg-black`}>
        <div className="AdminDashboard">
          <div className="cardStats">
            <div className="stat1 stats">
              <div className="section1">
                <h5>Total Listed Cars</h5>
                <h3>{cars}</h3>
              </div>
              <div className="section2">
                <i class="ri-car-line"></i>
              </div>
            </div>

            <div className="stat2 stats">
              <div className="section1">
                <h5>Total Bookings</h5>
                <h3>{bookedCars}</h3>
              </div>
              <div className="section2">
                <i class="ri-steering-2-line"></i>
              </div>
            </div>
            <div className="stat4 stats">
              <div className="section1">
                <h5>Pending Cars</h5>
                <h3>{pendingCars}</h3>
              </div>
              <div className="section2">
                <i class="ri-timer-flash-line"></i>
              </div>
            </div>

            <div className="stat3 stats">
              <div className="section1">
                <h5>Clients Active</h5>
                <h3>{clients}</h3>
              </div>
              <div className="section2">
                <i class="ri-user-line"></i>
              </div>
            </div>
          </div>

          <div className="statics ">
            <div className="statss">
              <h3 className="!text-2xl !mb-30">Car Rentals over Month</h3>
              <ResponsiveContainer width="100%" aspect={4 / 1}>
                <BarChart data={rentalData}>
                  <XAxis dataKey="name" stroke="#2884ff" />
                  <Bar
                    dataKey="Rentals"
                    stroke="#2884ff"
                    fill="#2884ff"
                    barSize={40}
                  />
                  <Tooltip wrapperClassName="tooltip_style" cursor={false} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
