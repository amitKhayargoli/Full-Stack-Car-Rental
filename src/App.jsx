import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lodex from "./LodeX"
import Login from "./Login";
import Signup from "./signup";
import Settings from "./Settings";
import Booking from "./Booking";
import AdminDashboard from "./AdminDashboard";
import CustomerDashboard from "./CustomerDashboard";
import Try from "./try";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Lodex/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
        <Route path="/CustomerDashboard" element={<CustomerDashboard/>}/>
        <Route path="/Try" element={<Try/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
