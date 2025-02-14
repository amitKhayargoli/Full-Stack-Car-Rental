import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lodex from "./LodeX";
import Login from "./Login";
import Signup from "./signup";
import Settings from "./Settings";
import Sales from "./SellCars";
import Car from "./car";
import Booking from "./Booking";
import AdminDashboard from "./AdminDashboard";
import CustomerDashboard from "./CustomerDashboard";
// main.jsx or App.jsx

import ClientPage from "./client/ClientPage";
import ProtectedRoute from "./ProtectedRoute";
import Search from "./client/Search";
import Contact from "./client/Contact";
import CustomerReviews from "./client/CustomerReviews";
import AdminPage from "./AdminPage";
import Users from "./Users";

import ActiveBids from "./AdminActiveBids";
import Listings from "./client/Listings";
import Favorites from "./client/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lodex />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/Car" element={<Car />} />
          <Route path="/Booking" element={<Booking />} />

          <Route path="/Admin" element={<AdminPage />}>
            <Route path="Dashboard" element={<AdminDashboard />} />
            <Route path="Bookings" element={<Booking />} />
            <Route path="Dashboard" element={<AdminDashboard />} />
            <Route path="ActiveBids" element={<ActiveBids />} />
            <Route path="Users" element={<Users />} />
            <Route path="Listings" element={<Car />} />
            <Route path="Users" element={<Users />} />
            <Route path="Settings" element={<Settings />} />
          </Route>

          <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
          <Route path="/client" element={<ClientPage />}>
            <Route path="search" element={<Search />} />
            <Route path="contact" element={<Contact />} />
            <Route path="CostumerReview" element={<CustomerReviews />} />
            <Route path="Listings" element={<Listings />} />
            <Route path="Favorites" element={<CustomerDashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
