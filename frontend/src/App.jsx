import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Lodex from "./LodeX";
import Login from "./Login";
import Signup from "./signup";
import Settings from "./Settings";
import Sales from "./SellCars";
import Car from "./car";
import Booking from "./Booking";
import AdminDashboard from "./AdminDashboard";
import Garage from "./Garage";

import "./axiosConfig";
import ClientPage from "./client/ClientPage";
import ProtectedRoute from "./ProtectedRoute";
import Search from "./client/Search";
import Contact from "./client/Contact";
import CustomerReviews from "./client/CustomerReviews";
import AdminPage from "./AdminPage";
import Users from "./Users";

import ActiveBids from "./client/ActiveBids";
import Listings from "./client/Listings";
import Favorites from "./client/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lodex />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route element={<ProtectedRoute roleRequired={"admin"} />}>
          <Route path="/Admin" element={<AdminPage />}>
            <Route index element={<Navigate to="/Admin/Dashboard" replace />} />
            <Route path="Dashboard" element={<AdminDashboard />} />
            <Route path="Bookings" element={<Booking />} />
            <Route path="ActiveBids" element={<ActiveBids />} />
            <Route path="Users" element={<Users />} />
            <Route path="Listings" element={<Car />} />
            <Route path="Users" element={<Users />} />
            <Route path="Settings" element={<Settings />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute roleRequired={"user"} />}>
          <Route path="/client" element={<ClientPage />}>
            //Default Route is The Listings Page
            <Route index element={<Navigate to="/Client/Listings" replace />} />
            <Route path="search" element={<Search />} />
            <Route path="contact" element={<Contact />} />
            <Route path="ActiveBids" element={<ActiveBids />} />
            <Route path="CustomerReview" element={<CustomerReviews />} />
            <Route path="Listings" element={<Listings />} />
            <Route path="Favorites" element={<Favorites />} />
            <Route path="Settings" element={<Settings />} />
          </Route>

          <Route path="Garage" element={<Garage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
